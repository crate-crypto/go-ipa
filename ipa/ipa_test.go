package ipa

import (
	"testing"

	"github.com/crate-crypto/go-ipa/bandersnatch"
	"github.com/crate-crypto/go-ipa/bandersnatch/fr"
	"github.com/crate-crypto/go-ipa/common"
	"github.com/crate-crypto/go-ipa/test_helper"
)

func TestIPAProofCreateVerify(t *testing.T) {

	// Shared View
	var point fr.Element
	point.SetUint64(123456789)
	ipaConf := NewIPASettingsUnsecure()

	// Prover view
	poly := test_helper.TestPoly256(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14)
	prover_comm := ipaConf.Commit(poly)

	prover_transcript := common.NewTranscript("ipa")

	proof := CreateIPAProof(prover_transcript, ipaConf, prover_comm, poly, point)
	lagrange_coeffs := ipaConf.PrecomputedWeights.ComputeBarycentricCoefficients(point)
	inner_product := InnerProd(poly, lagrange_coeffs)

	// Verifier view
	verifier_comm := prover_comm // In reality, the verifier will rebuild this themselves
	verifier_transcript := common.NewTranscript("ipa")

	ok := CheckIPAProof(verifier_transcript, ipaConf, verifier_comm, proof, point, inner_product)
	if !ok {
		panic("inner product proof failed")
	}

}
func TestBasicInnerProduct(t *testing.T) {

	var a []fr.Element
	for i := 0; i < 10; i++ {
		var tmp fr.Element
		tmp.SetUint64(uint64(i))
		a = append(a, tmp)
	}
	var b []fr.Element
	for i := 0; i < 10; i++ {
		var tmp fr.Element
		tmp.SetOne()
		b = append(b, tmp)
	}

	got := InnerProd(a, b)
	expected := fr.Zero()

	for i := 0; i < 10; i++ {
		var tmp fr.Element
		tmp.SetUint64(uint64(i))
		expected.Add(&expected, &tmp)
	}
	if !got.Equal(&expected) {
		panic("the inner product should just be the sum of a since b is just 1")
	}
}
func TestBasicCommit(t *testing.T) {

	gen := bandersnatch.GetEdwardsCurve().Base

	var generators []bandersnatch.PointAffine
	for i := 0; i < 5; i++ {
		generators = append(generators, gen)
	}

	var a []fr.Element
	for i := 0; i < 5; i++ {
		var tmp fr.Element
		_, err := tmp.SetRandom()
		if err != nil {
			panic("could not generate randomness")
		}
		a = append(a, tmp)
	}
	got := commit(generators, a)

	total := fr.Zero()
	for i := 0; i < 5; i++ {
		total.Add(&total, &a[i])
	}

	var expected bandersnatch.PointAffine
	expected.ScalarMul(&gen, &total)

	if !got.Equal(&expected) {
		panic("commit function; incorrect results")
	}
}
