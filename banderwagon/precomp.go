package banderwagon

import (
	"context"
	"runtime"

	"github.com/crate-crypto/go-ipa/bandersnatch"
	"github.com/crate-crypto/go-ipa/bandersnatch/fr"
	"golang.org/x/sync/errgroup"
)

const precompNumPoints = 256

type MSMFixedBasis struct {
	precompPoints [precompNumPoints]PrecompPoint
}

func NewPrecompMSM(points []Element) MSMFixedBasis {
	affPoints := getAffinePoints(points)
	var precompPoints [precompNumPoints]PrecompPoint
	for i := 0; i < precompNumPoints; i++ {
		if i <= 4 {
			precompPoints[i] = NewPrecompPoint(affPoints[i], 16)
		} else {
			precompPoints[i] = NewPrecompPoint(affPoints[i], 8)
		}
	}

	return MSMFixedBasis{
		precompPoints: precompPoints,
	}
}

func (msm *MSMFixedBasis) MSM(scalars []fr.Element) Element {
	var result bandersnatch.PointProj
	result.Identity()

	nonZeroScalars := bitset{}
	for i := range scalars {
		if !scalars[i].IsZero() {
			nonZeroScalars.set(i)
		}
	}

	minScalarsPerRoutine := 8
	if nonZeroScalars.count <= minScalarsPerRoutine {
		for i := range scalars {
			if nonZeroScalars.test(i) {
				msm.precompPoints[i].ScalarMul(scalars[i], &result)
			}
		}
		return Element{inner: result}
	}

	numBatches := (nonZeroScalars.count + minScalarsPerRoutine - 1) / minScalarsPerRoutine
	if numBatches > runtime.NumCPU() {
		numBatches = runtime.NumCPU()
	}
	batchSize := (nonZeroScalars.count + numBatches - 1) / numBatches

	results := make(chan bandersnatch.PointProj, numBatches)
	start := 0
	for i := 0; i < numBatches; i++ {
		end := start
		size := 0
		for size < batchSize && end < len(scalars) {
			if nonZeroScalars.test(end) {
				size++
			}
			end++
		}
		go func(start, end int, nonZeroScalars bitset) {
			var res bandersnatch.PointProj
			res.Identity()
			for i := start; i < end; i++ {
				if nonZeroScalars.test(i) {
					msm.precompPoints[i].ScalarMul(scalars[i], &res)
				}
			}
			results <- res
		}(start, end, nonZeroScalars)
		start = end
	}

	for i := 0; i < numBatches; i++ {
		res := <-results
		result.Add(&result, &res)
	}

	return Element{inner: result}
}

type bitset struct {
	words [4]uint64
	count int
}

func (b *bitset) set(i int) {
	b.words[i/64] |= 1 << (uint(i) % 64)
	b.count++
}

func (b *bitset) test(i int) bool {
	return b.words[i/64]&(1<<(uint(i)%64)) != 0
}

func getAffinePoints(points []Element) []bandersnatch.PointAffine {
	affine_points := make([]bandersnatch.PointAffine, len(points))

	for index, point := range points {
		var affine bandersnatch.PointAffine
		affine.FromProj(&point.inner)
		affine_points[index] = affine
	}

	return affine_points
}

type PrecompPoint struct {
	windowSize int
	windows    [][]bandersnatch.PointAffine
}

func NewPrecompPoint(point bandersnatch.PointAffine, windowSize int) PrecompPoint {
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
		var base bandersnatch.PointProj
		base.FromAffine(&point)
		group.Go(func() error {
			windows[i] = make([]bandersnatch.PointProj, 1<<(windowSize-1))
			curr := base
			for j := 0; j < len(windows[i]); j++ {
				windows[i][j] = curr
				curr.Add(&curr, &base)
			}
			// BatchJacobianToAffineG1(windows[i])
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
