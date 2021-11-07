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
	ipaConf := ipa.NewIPASettings()

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
func TestMultiProofConsistency(t *testing.T) {

	// Shared View
	ipaConf := ipa.NewIPASettings()

	// Prover view
	poly_a := test_helper.TestPoly256(
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
	)
	poly_b := test_helper.TestPoly256(
		32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
		32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
		32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
		32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
		32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
		32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
		32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
		32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
	)
	prover_transcript := common.NewTranscript("test")
	comm_a := ipaConf.Commit(poly_a)
	comm_b := ipaConf.Commit(poly_b)

	one := fr.One()
	var thirty_two = fr.Element{}
	thirty_two.SetUint64(32)

	Cs := []*bandersnatch.PointAffine{&comm_a, &comm_b}
	fs := [][]fr.Element{poly_a, poly_b}
	zs := []uint8{0, 0}
	ys := []*fr.Element{&one, &thirty_two}

	proof := CreateMultiProof(prover_transcript, ipaConf, Cs, fs, zs)

	// Lets check the state of the transcript, by squeezing out a challenge
	p_challenge := prover_transcript.ChallengeScalar("state")
	test_helper.ScalarEqualHex(t, p_challenge, "f9c48313d1af5e069386805b966ce53a3d95794b82da3aac6d68fd629062a31c")

	// Verifier view
	verifier_transcript := common.NewTranscript("test")
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
