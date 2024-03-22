package banderwagon

import (
	"context"
	"fmt"
	"runtime"

	"github.com/crate-crypto/go-ipa/bandersnatch"
	"golang.org/x/sync/errgroup"
)

// PrecompMSM2 is an implementation of "Notes on MSMs with Precomputation"
// by Gottfried Herold. https://hackmd.io/WfIjm0icSmSoqy2cfqenhQ
type PrecompMSM2 struct {
	t          uint16
	b          byte
	table      []bandersnatch.PointExtendedNormalized
	numWindows int
	basisLen   int
}

// NewPrecompMSM2 creates a PrecompMSM2 instance.
func NewPrecompMSM2(basis []Element, t uint16, b byte) PrecompMSM2 {
	windowSize := 1 << b
	// Calculate how many points we have per column (i.e: per basis point).
	pointsPerColumn := int((FrBits + t - 1) / t)

	// Every window has b points (corresponding to bits of the scalar), so we can calculate the number of
	// windows.
	numWindows := (pointsPerColumn*len(basis) + int(b) - 1) / int(b)

	// tableBasis contains all the points that will be used to create the precomputed table.
	tableBasis := make([]bandersnatch.PointExtended, pointsPerColumn*len(basis))

	// basisExtended just converts the basis of the MSM to the extended representation.
	basisExtended := make([]bandersnatch.PointExtended, len(basis))
	for i := range basis {
		basisExtended[i] = bandersnatch.PointExtendedFromProj(&basis[i].inner)
	}

	// Fill the tableBasis with the points that will be used to create the precomputed table.
	// The first pointPerColumn points are the t-th powers of the first basis point, the second
	// pointPerColumn points are the t-th powers of the second basis point, and so on.
	var idx int
	for hi := range basisExtended {
		tableBasis[idx] = basisExtended[hi]
		idx++
		for i := 1; i < pointsPerColumn; i++ {
			tableBasis[idx] = tableBasis[idx-1]
			for j := 0; j < int(t); j++ {
				tableBasis[idx].Double(&tableBasis[idx])
			}
			idx += 1
		}
	}

	// nnTable is a flat array that will have the precomputed tables. For each window, we have
	// windowSize entries. Each window computation is independent of each other, so we can do this in parallel.
	// Note that despite nnTable is a flat array, each goroutine is filling an non-overlapping subslice of it.
	var nnTable = make([]bandersnatch.PointExtendedNormalized, windowSize*numWindows)
	group, _ := errgroup.WithContext(context.Background())
	group.SetLimit(runtime.NumCPU())
	for w := 0; w < numWindows; w++ {
		w := w
		group.Go(func() error {
			start := w * int(b)
			end := (w + 1) * int(b)
			if end > len(tableBasis) {
				end = len(tableBasis)
			}
			// windowBasis contains which points corresponds to this window.
			windowBasis := tableBasis[start:end]

			var table = make([]bandersnatch.PointExtended, windowSize)
			// Each window precomputed table has windowSize entries. fillWindow will fill the table
			// by calculating all entries of the windowBasis.
			fillWindow(windowBasis, table)

			// The result is saved in the main table (nnTable) in the corresponding subslice (since it's a flat array),
			// and in extended normalized points (since in the MSM calculation, these points require less field muls)
			tableNormalized := batchToExtendedPointNormalized(table)
			for i := 0; i < windowSize; i++ {
				nnTable[w*windowSize+i] = tableNormalized[i]
			}

			return nil
		})
	}
	_ = group.Wait() // Can't error.

	return PrecompMSM2{
		t:          t,
		b:          b,
		table:      nnTable,
		numWindows: numWindows,
		basisLen:   len(basis),
	}
}

// MSM calculates the MSM instance corresponding to the given scalars.
func (pmsm *PrecompMSM2) MSM(montScalars []Fr) (Element, int, error) {
	if len(montScalars) > pmsm.basisLen {
		return Element{}, 0, fmt.Errorf("scalars length (%d) bigger than basis length (%d)", len(montScalars), pmsm.basisLen)
	}

	// scalars contains the scalars in non-montgomery form. We need to do this conversion since the default
	// representation of Fr is montgomery-form, and we need the original bits for this algorithm.
	//
	// Some notes about this:
	// - We could avoid creating this scalars array, by simply creating a `var scalar Fr` inside the for loop below,
	//   and do the conversion there. However, benchmarks have shown that doing all these conversion in a single loop
	//   is significantly faster (way faster of what I'd have expected).
	// - We define scalars as [256]Fr to avoid doing allocations, since 256 is the maximun length of montScalars.
	// - montScalars might be shorter than 256. This shouldn't be a problem since we loop over the length of montScalars
	//   both in this loop and in the main one below (i.e: so extra items are never accessed anyway).
	var scalars [256]Fr
	for i := range montScalars {
		scalars[i] = montScalars[i]
		scalars[i].FromMont()
	}

	// addDoubleCount is a simple counter that counts every point doubling and addition, this is only used for
	// benchmark metric reporting. It's not used in any real use-case. In the grand scheme of things, it shouldn't
	// add any meaningful overhead consdiering the heavy operations that are done here.
	addDoubleCount := 0
	windowSize := 1 << pmsm.b
	accum := bandersnatch.IdentityExt

	// The main loop does all the iterations of window sums that we have to do, one per t value.
	for t_i := uint16(0); t_i < pmsm.t; t_i++ {
		// Similar to a double-and-add algorithm, we have to double the current accumulator on every iteration but
		// the first one (which would be a noop since the aggregator is the identity, but we can avoid that anyway).
		if t_i > 0 {
			accum.Double(&accum)
			addDoubleCount++
		}

		// Now we iterate each scalar bits, forming in windowScalar the next window.
		// The current window is indicated by currWindow, and the windowBitPos indicates which is the next bit
		// to set in the windowScalar.
		currWindow := 0
		windowScalar := 0
		var windowBitPos byte
		for s_i := 0; s_i < len(montScalars); s_i++ {
			var k uint16
			// We iterate all the bits of the current scalar, and continue filling the current next bit in
			// windowScalar which represents the current window.
			for k < FrBits {
				scalarBitPos := (k + pmsm.t - t_i - 1)
				if scalarBitPos < FrBits && !scalars[s_i].IsZero() {
					// The scalar is in non-montgomery form represented in little-endian limbs.
					// So we get the corresponding bit accordingly.
					limb := scalars[s_i][scalarBitPos/64]
					bit := limb >> (scalarBitPos % 64) & 1
					// Set that bit in the right bit position in windowScalar.
					windowScalar |= int(bit) << (byte(pmsm.b) - windowBitPos - 1)
				}

				// We fill that bit, so we move to the next one.
				windowBitPos++
				// If we filled already b bits in windowScalar, that means we already have the full window.
				if windowBitPos == pmsm.b {
					if windowScalar > 0 {
						// Get from the table the precomputed window and add it to the accumulator.
						windowPrecomp := pmsm.table[currWindow*windowSize : (currWindow+1)*windowSize]
						bandersnatch.ExtendedAddNormalized(&accum, &accum, &windowPrecomp[windowScalar])
						addDoubleCount++
					}
					// Now we we'll move to the next window -- note that we could still be iterating on more bits
					// of the same scalar. This is due to the wrap-around nature of the algorithm!
					currWindow++

					windowScalar = 0
					windowBitPos = 0
				}

				// Note that "the next bit of the scalar" is the next t-th bit from the current position!
				k += pmsm.t
			}
		}
		// We don't have any extra scalars, so we do the final aggregation of the remaining windowScalar.
		if windowScalar > 0 {
			windowSlice := pmsm.table[currWindow*windowSize : (currWindow+1)*windowSize]
			bandersnatch.ExtendedAddNormalized(&accum, &accum, &windowSlice[windowScalar])
			addDoubleCount++
		}
	}

	return Element{
		inner: bandersnatch.PointProj{
			X: accum.X,
			Y: accum.Y,
			Z: accum.Z,
		},
	}, addDoubleCount, nil
}

// fillWindow is a recursive way of generating the table.
// The idea is that generating the table for [P0, P1, P2] is the same as the table of [P0, P1] and then
// adding as entries that same result plus P0 plus each element of the table.
// i.e: table([P0, P1, P2]) = table([P1, P2]) ++ (P0 + table([P1, P2])), the first half is for window values
// where the first bit is 0 (for P0) and the second half is for window values where the first bit is 1 (for P0).
//
// I'm pretty sure this isn't ideal for performance, but it's a very compact way of doing this work -- and the
// current generation times are already <1s.
func fillWindow(basis []bandersnatch.PointExtended, table []bandersnatch.PointExtended) {
	if len(basis) == 0 {
		for i := 0; i < len(table); i++ {
			table[i] = bandersnatch.IdentityExt
		}
		return
	}
	fillWindow(basis[1:], table[:len(table)/2])
	for i := 0; i < len(table)/2; i++ {
		table[len(table)/2+i].Add(&table[i], &basis[0])
	}
}
