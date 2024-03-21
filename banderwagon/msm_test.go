package banderwagon

import (
	"fmt"
	"math/rand"
	"runtime"
	"testing"

	"github.com/crate-crypto/go-ipa/bandersnatch"
	"github.com/crate-crypto/go-ipa/bandersnatch/fr"
)

func TestMSMCorrectness(t *testing.T) {
	t.Parallel()

	basis, pointsAffine := generateRandomPoints(256)

	msm, err := NewMSM(basis)
	if err != nil {
		t.Fatal(err)
	}

	t.Run("Between [1, 5] non-zero scalars only in the first 5 positions", func(t *testing.T) {
		for nonZeroScalarCount := 1; nonZeroScalarCount <= 5; nonZeroScalarCount++ {
			nonZeroScalarCount := nonZeroScalarCount
			for round := 0; round < runtime.NumCPU(); round++ {
				t.Run(fmt.Sprintf("cpu %d", round), func(t *testing.T) {
					t.Parallel()
					testCorrectness(t, &msm, pointsAffine, nonZeroScalarCount, 5)
				})
			}
		}
	})

	t.Run("Between [1, 32] non-zero scalars in any position", func(t *testing.T) {
		nonZeroScalarCounts := []int{6, 10, 16, 32}
		for _, nonZeroScalarCount := range nonZeroScalarCounts {
			nonZeroScalarCount := nonZeroScalarCount
			for round := 0; round < runtime.NumCPU(); round++ {
				t.Run(fmt.Sprintf("cpu %d", round), func(t *testing.T) {
					t.Parallel()
					testCorrectness(t, &msm, pointsAffine, nonZeroScalarCount, 32)
				})
			}
		}
	})

	t.Run("Between [1, 256] non-zero scalars in any position", func(t *testing.T) {
		nonZeroScalarCounts := []int{33, 63, 64, 65, 129, 255, 256}
		for _, nonZeroScalarCount := range nonZeroScalarCounts {
			nonZeroScalarCount := nonZeroScalarCount
			t.Run(fmt.Sprintf("nonZeroScalarCount %d", nonZeroScalarCount), func(t *testing.T) {
				for round := 0; round < runtime.NumCPU(); round++ {
					t.Run(fmt.Sprintf("cpu %d", round), func(t *testing.T) {
						t.Parallel()
						testCorrectness(t, &msm, pointsAffine, nonZeroScalarCount, 256)
					})
				}
			})
		}
	})
}

// testCorrectness calculates a MSM with the following configuration:
// - It creates nonZeroScalarCount non-zero elements.
// - It creates non-zero elements only for the first vectorSize elements of the potential 256 scalars.
// This method allows us to cover many cases like:
// - Test scalar vectors of 1, 3, 4 non-zero scalars only in the first 5 positions.
// - Test scalar vectors of 1, 3, 4, 19, 230, 256 non-zero scalars in any of the 256 positions.
//
// Generating these cases is important to be sure covering the partitioned MSM configuration with different precomputed tables.
func testCorrectness(t *testing.T, msm *MSM, basisAffine []bandersnatch.PointAffine, nonZeroScalarCount int, vectorSize int) {
	if nonZeroScalarCount > vectorSize {
		t.Fatalf("nonZeroScalarCount cannot be greater than vectorSize %d %d", nonZeroScalarCount, vectorSize)
	}
	for i := 0; i < 100; i++ {
		scalars := make([]fr.Element, 256)
		for i := range scalars {
			scalars[i].SetZero()
		}
		for i := 0; i < nonZeroScalarCount; i++ {
			if _, err := scalars[i].SetRandom(); err != nil {
				t.Fatalf("error generating random scalar: %v", err)
			}
		}
		rand.Shuffle(vectorSize, func(i, j int) { scalars[i], scalars[j] = scalars[j], scalars[i] })

		// Calculate the MSM with our algorithm.
		precompResult, err := msm.MSM(scalars[:vectorSize])
		if err != nil {
			t.Fatalf("error calculating msm: %v", err)
		}
		// Calculate the same MSM with gnark.
		var gnarkResult bandersnatch.PointProj
		if _, err := bandersnatch.MultiExp(&gnarkResult, basisAffine, scalars, bandersnatch.MultiExpConfig{ScalarsMont: true}); err != nil {
			t.Fatalf("error in gnark multiexp: %v", err)
		}

		// Check that msmEngine and gnark match on the result.
		if !precompResult.inner.Equal(&gnarkResult) {
			t.Fatalf("msm result does not match gnark result")
		}
	}
}

func BenchmarkMSMInitialize(b *testing.B) {
	basis, _ := generateRandomPoints(256)

	b.ReportAllocs()
	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		_, _ = NewMSM(basis)
	}
}
