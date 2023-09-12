package banderwagon

import (
	"crypto/sha256"
	"encoding/binary"
	"fmt"
	"runtime"
	"testing"

	"github.com/crate-crypto/go-ipa/bandersnatch"
	"github.com/crate-crypto/go-ipa/bandersnatch/fp"
	"github.com/crate-crypto/go-ipa/bandersnatch/fr"
)

func TestPrecompCorrectness(t *testing.T) {
	t.Parallel()

	// Generate a 256-basis. It returns the same points as Banderwagon points and affine points.
	// This is only necessary since our APIs and gnark APIs receive different representations of the same
	// points.
	pointsWagon, pointsAffine := generateRandomPoints(256)

	msmEngine, err := NewPrecompMSM(pointsWagon)
	if err != nil {
		t.Fatal(err)
	}

	// We split it in NumCPU() rounds to parallelize the test, each checking 1000 random MSM.
	for round := 0; round < runtime.NumCPU(); round++ {
		t.Run(fmt.Sprintf("round %d", round), func(t *testing.T) {
			t.Parallel()

			for i := 0; i < 1_000; i++ {
				// Generate random scalars.
				scalars := make([]fr.Element, len(pointsWagon))
				for i := 0; i < len(scalars); i++ {
					if _, err := scalars[i].SetRandom(); err != nil {
						t.Fatalf("error generating random scalar: %v", err)
					}
				}

				// Calculate the MSM with our precomputed tables.
				precompResult := msmEngine.MSM(scalars)

				// Calculate the same MSM with gnark.
				var gnarkResult bandersnatch.PointProj
				if _, err := bandersnatch.MultiExp(&gnarkResult, pointsAffine, scalars, bandersnatch.MultiExpConfig{ScalarsMont: true}); err != nil {
					t.Fatalf("error in gnark multiexp: %v", err)
				}

				// Test that both results are equal.
				if !precompResult.inner.Equal(&gnarkResult) {
					t.Fatalf("msm result does not match gnark result (%s)", scalars[0].String())
				}
			}
		})
	}
}

func BenchmarkPrecompMSM(b *testing.B) {
	msmLength := []int{1, 2, 4, 8, 16, 32, 64, 128, 256}

	pointsWagon, _ := generateRandomPoints(256)
	msmEngine, err := NewPrecompMSM(pointsWagon)
	if err != nil {
		b.Fatal(err)
	}

	for _, k := range msmLength {
		b.Run(fmt.Sprintf("msm_length=%d", k), func(b *testing.B) {
			// Generate random scalars.
			scalars := make([]fr.Element, 256)
			for i := 0; i < k; i++ {
				if _, err := scalars[i].SetRandom(); err != nil {
					b.Fatalf("error generating random scalar: %v", err)
				}
			}

			b.Run("precomp", func(b *testing.B) {
				b.ReportAllocs()
				b.ResetTimer()
				for i := 0; i < b.N; i++ {
					_ = msmEngine.MSM(scalars)
				}
			})
		})
	}
}

func BenchmarkPrecompInitialize(b *testing.B) {
	points, _ := generateRandomPoints(256)

	b.ReportAllocs()
	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		_, _ = NewPrecompMSM(points)
	}
}

// generateRandomPoints is a similar version of the one that exist in the ipa package
// but we're pulling it here for tests to avoid an import cycle and output point format convenience.
func generateRandomPoints(numPoints uint64) ([]Element, []bandersnatch.PointAffine) {
	seed := "eth_verkle_oct_2021"

	pointsWagon := []Element{}
	pointsAffine := []bandersnatch.PointAffine{}
	var increment uint64 = 0
	for uint64(len(pointsWagon)) != numPoints {
		digest := sha256.New()
		digest.Write([]byte(seed))

		b := make([]byte, 8)
		binary.BigEndian.PutUint64(b, increment)
		digest.Write(b)

		hash := digest.Sum(nil)

		var x fp.Element
		x.SetBytes(hash)

		increment++

		x_as_bytes := x.Bytes()
		var point_found Element
		err := point_found.SetBytes(x_as_bytes[:])
		if err != nil {
			// This point is not in the correct subgroup or on the curve
			continue
		}
		pointsWagon = append(pointsWagon, point_found)
		var pointAffine bandersnatch.PointAffine
		pointAffine.FromProj(&point_found.inner)
		pointsAffine = append(pointsAffine, pointAffine)

	}

	return pointsWagon, pointsAffine
}
