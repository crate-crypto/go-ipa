package multiproof

import (
	"bytes"
	"testing"

	"github.com/crate-crypto/go-ipa/bandersnatch"
	"github.com/crate-crypto/go-ipa/bandersnatch/fr"
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
	prover_comm_1 := ipaConf.Commit(poly_1)

	one := fr.One()

	Cs := []*bandersnatch.PointAffine{&prover_comm_1}
	fs := [][]fr.Element{poly_1}
	zs := []uint8{0}
	ys := []*fr.Element{&one}
	proof := CreateMultiProof(prover_transcript, ipaConf, Cs, fs, zs)

	test_serialize_deserialize_proof(*proof)

	// Verifier view
	verifier_transcript := common.NewTranscript("multiproof")
	ok := CheckMultiProof(verifier_transcript, ipaConf, proof, Cs, ys, zs)

	if !ok {
		panic("multi product proof failed")
	}

}

func test_serialize_deserialize_proof(proof MultiProof) {
	var buf = new(bytes.Buffer)
	proof.Write(buf)

	var got_proof MultiProof
	got_proof.Read(buf)

	if !got_proof.Equal(proof) {
		panic("proof serialization does not match deserialization for Multiproof")

	}

}
