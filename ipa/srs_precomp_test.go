package ipa

import (
	"bytes"
	"testing"

	"github.com/crate-crypto/go-ipa/banderwagon"
)

func TestPrecompSerde(t *testing.T) {
	points := GenerateRandomPoints(2)
	pcl := banderwagon.NewPrecomputeLagrange(points)
	var buf bytes.Buffer

	err := pcl.SerializePrecomputedLagrange(&buf)
	if err != nil {
		t.Fatal(err)
	}
	reader := bytes.NewReader(buf.Bytes())
	deser, err := banderwagon.DeserializePrecomputedLagrange(reader)
	if err != nil {
		t.Fatal(err)
	}

	if !pcl.Equal(*deser) {
		t.Fatalf("error during (de)serialization of precomputed data %v %v", pcl, deser)
	}

}

func TestSRSPrecompSerde(t *testing.T) {
	var srs_precomp = NewSRSPrecomp(2)
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

}
