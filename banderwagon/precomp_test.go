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

	msmEngine2s := []PrecompMSM2{
		NewPrecompMSM2(pointsWagon, 2, 5),
		NewPrecompMSM2(pointsWagon, 3, 7),
		NewPrecompMSM2(pointsWagon, 8, 10),
		NewPrecompMSM2(pointsWagon, 64, 11),
		NewPrecompMSM2(pointsWagon, 128, 12),
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

				// Check that msmEngine and gnark match on the result.
				if !precompResult.inner.Equal(&gnarkResult) {
					t.Fatalf("msm result does not match gnark result")
				}

				// Check that all msmEngine2 configurations match too.
				for _, msmEngine2 := range msmEngine2s {
					precomp2Result, _, _ := msmEngine2.MSM(scalars)
					if !precompResult.inner.Equal(&precomp2Result.inner) {
						t.Fatalf("msm2 result does not match msm")
					}
				}
			}
		})
	}
}

func BenchmarkPrecompMSM(b *testing.B) {
	msmBase, _ := generateRandomPoints(256)

	// Build a list of 10k random scalars, so the benchmark will circle through them.
	// This to avoid any extra caching that could happen if we use the same scalars in every iteration.
	scalarList := make([][]fr.Element, 10_000)
	for i := range scalarList {
		scalarList[i] = make([]fr.Element, 256)
		for j := 0; j < len(scalarList[i]); j++ {
			if _, err := scalarList[i][j].SetRandom(); err != nil {
				b.Fatalf("error generating random scalar: %v", err)
			}
		}
	}

	msmLengths := []int{1, 2, 4, 8, 16, 32, 64, 128, 256}
	b.Run("FullPrecomputedTables", func(b *testing.B) {
		msmEngine, err := NewPrecompMSM(msmBase)
		if err != nil {
			b.Fatal(err)
		}
		for _, msmLengths := range msmLengths {
			b.Run(fmt.Sprintf("msmLength=%d", msmLengths), func(b *testing.B) {
				b.ReportAllocs()
				b.ResetTimer()
				for i := 0; i < b.N; i++ {
					_ = msmEngine.MSM(scalarList[i%len(scalarList)][:msmLengths])
				}
			})
		}
	})

	b.Run("GottiPrecomputedTables", func(b *testing.B) {
		ts := []int{1, 2, 4, 8, 11, 16, 23, 32, 64, 128, 256}
		bs := []int{8, 10, 12}

		for _, msmLength := range msmLengths {
			b.Run(fmt.Sprintf("msmLength=%d", msmLength), func(b *testing.B) {
				for _, bb := range bs {
					for _, t := range ts {
						msmEngine2 := NewPrecompMSM2(msmBase, uint16(t), byte(bb))
						b.Run(fmt.Sprintf("t=%d b=%d", t, bb), func(b *testing.B) {
							b.ResetTimer()
							var addDoubleCount int
							for i := 0; i < b.N; i++ {
								_, addDoubleCount, _ = msmEngine2.MSM(scalarList[i%len(scalarList)][:msmLength])
							}
							tableSize := float64(len(msmEngine2.table)*3*4*8) / 1024 / 1024
							b.ReportMetric(tableSize, "MiB(tablesize)")
							b.ReportMetric(float64(addDoubleCount), "Add+Double")
						})
					}
				}
			})
		}
	})
}

func BenchmarkGotti5(b *testing.B) {
	msmBase, _ := generateRandomPoints(5)

	// Build a list of 10k random scalars, so the benchmark will circle through them.
	// This to avoid any extra caching that could happen if we use the same scalars in every iteration.
	scalarList := make([][]fr.Element, 10_000)
	for i := range scalarList {
		scalarList[i] = make([]fr.Element, len(msmBase))
		for j := 0; j < len(scalarList[i]); j++ {
			if _, err := scalarList[i][j].SetRandom(); err != nil {
				b.Fatalf("error generating random scalar: %v", err)
			}
		}
	}

	msmLengths := []int{2}
	ts := []int{2}
	bs := []int{16}

	for _, msmLength := range msmLengths {
		b.Run(fmt.Sprintf("msmLength=%d", msmLength), func(b *testing.B) {
			for _, bb := range bs {
				for _, t := range ts {
					msmEngine2 := NewPrecompMSM2(msmBase, uint16(t), byte(bb))
					b.Run(fmt.Sprintf("t=%d b=%d", t, bb), func(b *testing.B) {
						b.ResetTimer()
						var addDoubleCount int
						for i := 0; i < b.N; i++ {
							_, addDoubleCount, _ = msmEngine2.MSM(scalarList[i%len(scalarList)][:msmLength])
						}
						tableSize := float64(len(msmEngine2.table)*3*4*8) / 1024 / 1024
						b.ReportMetric(tableSize, "MiB(tablesize)")
						b.ReportMetric(float64(addDoubleCount), "Add+Double")
					})
				}
			}
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
