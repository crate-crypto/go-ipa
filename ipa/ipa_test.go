package ipa

import (
	"testing"

	"github.com/crate-crypto/go-ipa/bls"
	"github.com/crate-crypto/go-ipa/test_helper"
)

func TestIPAProofCreateVerify(t *testing.T) {

	// Shared View
	point := bls.Fr{}
	bls.AsFr(&point, 123456789)
	ipaConf := NewIPASettingsUnsecure()

	// Prover view
	poly := test_helper.TestPoly256(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14)

	prover_comm := Commit(ipaConf.SRS, poly)
	proof := CreateIPAProof(ipaConf, prover_comm, poly, point)

	lagrange_coeffs := ipaConf.PrecomputedWeights.ComputeBarycentricCoefficients(point)
	inner_product := InnerProd(poly, lagrange_coeffs)

	// Verifier view
	verifier_comm := prover_comm // In reality, the verifier will rebuild this themselves

	ok := CheckIPAProof(ipaConf, verifier_comm, proof, point, inner_product)
	if !ok {
		panic("inner product proof failed")
	}

}
