package banderwagon

import (
	"crypto/sha256"
	"encoding/binary"
	"fmt"
	"testing"

	"github.com/crate-crypto/go-ipa/bandersnatch"
	"github.com/crate-crypto/go-ipa/bandersnatch/fp"
	"github.com/crate-crypto/go-ipa/bandersnatch/fr"
)

func BenchmarkPrecompMSM(b *testing.B) {
	msmLength := []int{1, 2, 4, 8, 16, 32, 64, 128, 256}

	pointsWagon, _ := generateRandomPoints(256)
	precompLagrange := NewPrecomputeLagrange(pointsWagon)

	for _, k := range msmLength {
		b.Run(fmt.Sprintf("msm_length=%d", k), func(b *testing.B) {
			// Generate random scalars.
			scalars := make([]fr.Element, 256)
			for i := 0; i < k; i++ {
				scalars[i].SetRandom()
			}

			b.Run("precomp", func(b *testing.B) {
				b.ReportAllocs()
				b.ResetTimer()
				for i := 0; i < b.N; i++ {
					_ = precompLagrange.Commit(scalars)
				}
			})
		})
	}
}

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
