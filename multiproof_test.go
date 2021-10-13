package multiproof

import (
	"fmt"
	"testing"

	"github.com/crate-crypto/go-ipa/bls"
	"github.com/crate-crypto/go-ipa/common"
	"github.com/crate-crypto/go-ipa/ipa"
	"github.com/crate-crypto/go-ipa/test_helper"
)

func TestMultiProofCreateVerify(t *testing.T) {

	// Shared View
	ipaConf := ipa.NewIPASettingsUnsecure()

	// Prover view
	poly_1 := test_helper.TestPoly256(1, 1, 1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14)
	prover_transcript := common.NewTranscript("multiproof")
	prover_comm_1 := ipa.Commit(ipaConf.SRS, poly_1)

	Cs := []*bls.G1Point{&prover_comm_1}
	fs := [][]bls.Fr{poly_1}
	zs := []*bls.Fr{&bls.ZERO}
	ys := []*bls.Fr{&bls.ONE}
	proof := CreateMultiProof(prover_transcript, ipaConf, Cs, fs, zs)

	// Verifier view
	verifier_transcript := common.NewTranscript("multiproof")
	ok := CheckMultiProof(verifier_transcript, ipaConf, proof, Cs, ys, zs)
	if !ok {
		panic("multi product proof failed")
	}

}

func TestFrToDomain(testing *testing.T) {
	expected := uint8(200)

	a := bls.Fr{}
	bls.AsFr(&a, uint64(expected))

	got := frToDomain(&a)
	if expected != got {
		panic(fmt.Sprintf("got %d, expected %d", got, expected))
	}
}
