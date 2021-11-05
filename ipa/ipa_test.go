package ipa

import (
	"bytes"
	"crypto/sha256"
	"encoding/hex"
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

	test_serialize_deserialize_proof(&proof)

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
func TestCRSGeneration(t *testing.T) {

	points := GenerateRandomPoints(256)
	for _, point := range points {
		if !point.IsOnCurve() {
			panic("generated a point that was not on the curve")
		}
		if !point.IsInPrimeSubgroup() {
			panic("point is not in the prime sub group")
		}
	}
	bytes := points[0].Bytes()
	got := hex.EncodeToString(bytes[:])
	expected := "22ac968a98ab6c50379fc8b039abc8fd9aca259f4746a05bfbdf12c86463c208"
	if got != expected {
		panic("the first point is not correct")
	}
	bytes = points[255].Bytes()
	got = hex.EncodeToString(bytes[:])
	expected = "c8b4968a98ab6c50379fc8b039abc8fd9aca259f4746a05bfbdf12c86463c208"
	if got != expected {
		panic("the 256th (last) point is not correct")
	}

	digest := sha256.New()
	for _, point := range points {
		bytes := point.Bytes()
		digest.Write(bytes[:])
	}
	hash := digest.Sum(nil)
	got = hex.EncodeToString(hash[:])
	expected = "c390cbb4bc42019685d5a01b2fb8a536d4332ea4e128934d0ae7644163089e76"
	if got != expected {
		panic("unexpected point encountered")
	}

}

func test_serialize_deserialize_proof(proof *IPAProof) {
	var buf = new(bytes.Buffer)
	proof.Write(buf)

	var got_proof IPAProof
	got_proof.Read(buf)

	for i := 0; i < 8; i++ {
		expect_L_i := proof.L[i]
		expect_R_i := proof.R[i]

		got_L_i := got_proof.L[i]
		got_R_i := got_proof.R[i]

		if !expect_L_i.Equal(&got_L_i) {
			panic("proof serialization does not match deserialization L_i")
		}
		if !expect_R_i.Equal(&got_R_i) {
			panic("proof serialization does not match deserialization R_i")
		}
	}
	if !proof.A_scalar.Equal(&got_proof.A_scalar) {
		panic("proof serialization does not match deserialization A")
	}
}
