package banderwagon

import (
	"context"
	"runtime"

	"github.com/crate-crypto/go-ipa/bandersnatch"
	"github.com/crate-crypto/go-ipa/bandersnatch/fp"
	"github.com/crate-crypto/go-ipa/bandersnatch/fr"
	"github.com/crate-crypto/go-ipa/common/parallel"
	"golang.org/x/sync/errgroup"
)

const precompNumPoints = 256

// MSMPrecomp is an engine to calculate 256-MSM on a fixed basis using precomputed tables.
type MSMPrecomp struct {
	precompPoints [precompNumPoints]PrecompPoint
}

// NewPrecompMSM creates a new MSMPrecomp.
func NewPrecompMSM(points []Element) MSMPrecomp {
	var precompPoints [precompNumPoints]PrecompPoint

	// We apply the current strategy of:
	// - Use a 16-bit window for the first 5 points.
	// - Use an 8-bit window for the remaining points.
	for i := 0; i < precompNumPoints; i++ {
		if i <= 4 {
			precompPoints[i] = NewPrecompPoint(points[i], 16)
		} else {
			precompPoints[i] = NewPrecompPoint(points[i], 8)
		}
	}

	return MSMPrecomp{
		precompPoints: precompPoints,
	}
}

// MSM calculates the 256-MSM of the given scalars on the fixed basis.
// It automatically detects how many non-zero scalars there are and parallelizes the computation.
func (msm *MSMPrecomp) MSM(scalars []fr.Element) Element {
	var result bandersnatch.PointProj
	result.Identity()

	for i := range scalars {
		if !scalars[i].IsZero() {
			msm.precompPoints[i].ScalarMul(scalars[i], &result)
		}
	}
	return Element{inner: result}
}

// PrecompPoint is a precomputed table for a single point.
type PrecompPoint struct {
	windowSize int
	windows    [][]bandersnatch.PointAffine
}

// NewPrecompPoint creates a new PrecompPoint for the given point and window size.
func NewPrecompPoint(point Element, windowSize int) PrecompPoint {
	var specialWindow fr.Element
	specialWindow.SetUint64(1 << windowSize)

	res := PrecompPoint{
		windowSize: windowSize,
		windows:    make([][]bandersnatch.PointAffine, 256/windowSize),
	}

	windows := make([][]bandersnatch.PointProj, 256/windowSize)
	group, _ := errgroup.WithContext(context.Background())
	group.SetLimit(runtime.NumCPU())
	for i := 0; i < len(res.windows); i++ {
		i := i
		base := point.inner
		group.Go(func() error {
			windows[i] = make([]bandersnatch.PointProj, 1<<(windowSize-1))
			curr := base
			for j := 0; j < len(windows[i]); j++ {
				windows[i][j] = curr
				curr.Add(&curr, &base)
			}
			batchProjToAffine(windows[i])
			res.windows[i] = make([]bandersnatch.PointAffine, 1<<(windowSize-1))
			for j := range windows[i] {
				res.windows[i][j].FromProj(&windows[i][j])
			}
			return nil
		})
		point.ScalarMul(&point, &specialWindow)
	}
	_ = group.Wait()

	return res
}

// ScalarMul multiplies the point by the given scalar using the precomputed points.
// It applies a trick to push a carry between windows since our precomputed tables
// avoid storing point inverses.
func (pp *PrecompPoint) ScalarMul(scalar fr.Element, res *bandersnatch.PointProj) {
	numWindowsInLimb := 64 / pp.windowSize

	scalar.FromMont()
	var carry uint64
	var pNeg bandersnatch.PointAffine
	for l := 0; l < fr.Limbs; l++ {
		for w := 0; w < numWindowsInLimb; w++ {
			windowValue := (scalar[l]>>(pp.windowSize*w))&((1<<pp.windowSize)-1) + carry
			if windowValue == 0 {
				continue
			}
			carry = 0

			if windowValue > 1<<(pp.windowSize-1) {
				windowValue = (1 << pp.windowSize) - windowValue
				if windowValue != 0 {
					pNeg.Neg(&pp.windows[l*numWindowsInLimb+w][windowValue-1])
					res.MixedAdd(res, &pNeg)
				}
				carry = 1
			} else {
				res.MixedAdd(res, &pp.windows[l*numWindowsInLimb+w][windowValue-1])
			}
		}
	}
}

// TODO(jsign): this is pulled from gnark, but we must delete this file when we update our gnark dependency
// to the latest version since there's a similar method.
func batchProjToAffine(points []bandersnatch.PointProj) []bandersnatch.PointAffine {
	result := make([]bandersnatch.PointAffine, len(points))
	zeroes := make([]bool, len(points))
	accumulator := fp.One()

	// batch invert all points[].Z coordinates with Montgomery batch inversion trick
	// (stores points[].Z^-1 in result[i].X to avoid allocating a slice of fr.Elements)
	for i := 0; i < len(points); i++ {
		if points[i].Z.IsZero() {
			zeroes[i] = true
			continue
		}
		result[i].X = accumulator
		accumulator.Mul(&accumulator, &points[i].Z)
	}

	var accInverse fp.Element
	accInverse.Inverse(&accumulator)

	for i := len(points) - 1; i >= 0; i-- {
		if zeroes[i] {
			// do nothing, (X=0, Y=0) is infinity point in affine
			continue
		}
		result[i].X.Mul(&result[i].X, &accInverse)
		accInverse.Mul(&accInverse, &points[i].Z)
	}

	// batch convert to affine.
	parallel.Execute(len(points), func(start, end int) {
		for i := start; i < end; i++ {
			if zeroes[i] {
				// do nothing, (X=0, Y=0) is infinity point in affine
				continue
			}
			var a, b fp.Element
			a = result[i].X
			b.Square(&a)
			result[i].X.Mul(&points[i].X, &b)
			result[i].Y.Mul(&points[i].Y, &b).
				Mul(&result[i].Y, &a)
		}
	})

	return result
}
