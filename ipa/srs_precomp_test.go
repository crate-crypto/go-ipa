package ipa

import (
	"bytes"
	"fmt"
	"testing"

	"github.com/crate-crypto/go-ipa/bandersnatch/fr"
	"github.com/crate-crypto/go-ipa/banderwagon"
	"github.com/crate-crypto/go-ipa/common"
)

func TestPrecompSerde(t *testing.T) {
	t.Parallel()

	testNumPoints := []int{
		2, 3, 7, // Arbitrary sizes
		common.POLY_DEGREE, // Ethereum Verkle Trees case
	}

	for _, numPoints := range testNumPoints {
		numPoints := numPoints
		t.Run(fmt.Sprintf("num points %d", numPoints), func(t *testing.T) {
			t.Parallel()
			// Generate the random points.
			points := GenerateRandomPoints(uint64(numPoints))

			// Create thee precomputes.
			pcl1 := banderwagon.NewPrecomputeLagrange(points)

			// Serialize.
			var buf bytes.Buffer
			if err := pcl1.SerializePrecomputedLagrange(&buf); err != nil {
				t.Fatal(err)
			}

			// Deserialize and check both are equal.
			reader := bytes.NewReader(buf.Bytes())
			pcl2, err := banderwagon.DeserializePrecomputedLagrange(reader)
			if err != nil {
				t.Fatal(err)
			}

			if !pcl1.Equal(*pcl2) {
				t.Fatalf("error during (de)serialization of precomputed data %v %v", pcl1, pcl2)
			}

			// Double check that a random evaluation is the same for both too; this should be obvious if .Equal(...)
			// is correct, but it's good to be sure since it might have a bug.
			evals := make([]fr.Element, numPoints)
			for i := 0; i < numPoints; i++ {
				evals[i].SetRandom()
			}
			comm1 := pcl1.Commit(evals)
			comm2 := pcl2.Commit(evals)
			if !comm1.Equal(&comm2) {
				t.Fatalf("random vector commitment between original and deserialized doesn't match: %v %v", comm1, comm2)
			}
		})
	}
}

func TestSRSPrecompSerde(t *testing.T) {
	t.Parallel()

	testNumPoints := []int{
		2, 3, 7, // Arbitrary sizes
		256, // Ethereum Verkle Tries case
	}

	for _, numPoints := range testNumPoints {
		numPoints := numPoints
		t.Run(fmt.Sprintf("num points %d", numPoints), func(t *testing.T) {
			t.Parallel()

			srs_precomp := NewSRSPrecomp(uint(numPoints))
			b, err := srs_precomp.SerializeSRSPrecomp()
			if err != nil {
				t.Fatal(err)
			}

			deser, err := DeserializeSRSPrecomp(b)
			if err != nil {
				t.Fatal(err)
			}

			if !srs_precomp.Equal(*deser) {
				t.Fatalf("error during (de)serialization of precomputed data %v %v", srs_precomp, deser)
			}
		})
	}
}
