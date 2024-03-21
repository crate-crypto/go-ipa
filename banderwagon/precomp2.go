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
	pointsPerColumn := int((FrBits + t - 1) / t)

	numWindows := (pointsPerColumn*len(basis) + int(b) - 1) / int(b)
	tableBasis := make([]bandersnatch.PointExtended, pointsPerColumn*len(basis))

	basisExtended := make([]bandersnatch.PointExtended, len(basis))
	for i := range basis {
		basisExtended[i] = bandersnatch.PointExtendedFromProj(&basis[i].inner)
	}

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
			windowBasis := tableBasis[start:end]

			var table = make([]bandersnatch.PointExtended, windowSize)
			fillWindow(windowBasis, table)
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

func (pmsm *PrecompMSM2) MSM(montScalars []Fr) (Element, int, error) {
	if len(montScalars) > pmsm.basisLen {
		return Element{}, 0, fmt.Errorf("scalars length (%d) bigger than basis length (%d)", len(montScalars), pmsm.basisLen)
	}

	var scalars [256]Fr
	for i := range montScalars {
		scalars[i] = montScalars[i]
		scalars[i].FromMont()
	}
	addDoubleCount := 0
	windowSize := 1 << pmsm.b
	accum := bandersnatch.IdentityExt
	for t_i := uint16(0); t_i < pmsm.t; t_i++ {
		if t_i > 0 {
			accum.Double(&accum)
			addDoubleCount++
		}

		currWindow := 0
		windowScalar := 0
		var windowBitPos byte
		for s_i := 0; s_i < len(montScalars); s_i++ {
			var k uint16
			for k < FrBits {
				scalarBitPos := (k + pmsm.t - t_i - 1)
				if scalarBitPos < FrBits && !scalars[s_i].IsZero() {
					limb := scalars[s_i][scalarBitPos/64]
					bit := limb >> (scalarBitPos % 64) & 1
					windowScalar |= int(bit) << (byte(pmsm.b) - windowBitPos - 1)
				}

				windowBitPos++
				if windowBitPos == pmsm.b {
					if windowScalar > 0 {
						windowPrecomp := pmsm.table[currWindow*windowSize : (currWindow+1)*windowSize]
						bandersnatch.ExtendedAddNormalized(&accum, &accum, &windowPrecomp[windowScalar])
						addDoubleCount++
					}
					currWindow++

					windowScalar = 0
					windowBitPos = 0
				}
				k += pmsm.t
			}
		}
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
