package multiproof

import (
	"bytes"
	"encoding/hex"
	"testing"

	"github.com/crate-crypto/go-ipa/bandersnatch/fr"
	"github.com/crate-crypto/go-ipa/banderwagon"
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

	Cs := []*banderwagon.Element{&prover_comm_1}
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

	Cs := []*banderwagon.Element{&comm_a, &comm_b}
	fs := [][]fr.Element{poly_a, poly_b}
	zs := []uint8{0, 0}
	ys := []*fr.Element{&one, &thirty_two}

	proof := CreateMultiProof(prover_transcript, ipaConf, Cs, fs, zs)

	// Lets check the state of the transcript, by squeezing out a challenge
	p_challenge := prover_transcript.ChallengeScalar("state")
	test_helper.ScalarEqualHex(t, p_challenge, "eee8a80357ff74b766eba39db90797d022e8d6dee426ded71234241be504d519")

	// Verifier view
	verifier_transcript := common.NewTranscript("test")
	ok := CheckMultiProof(verifier_transcript, ipaConf, proof, Cs, ys, zs)

	if !ok {
		panic("multi product proof failed")
	}

	// Check serialised bytes are consistent with other implementations
	expected := "4f53588244efaf07a370ee3f9c467f933eed360d4fbf7a19dfc8bc49b67df4711bf1d0a720717cd6a8c75f1a668cb7cbdd63b48c676b89a7aee4298e71bd7f4013d7657146aa9736817da47051ed6a45fc7b5a61d00eb23e5df82a7f285cc10e67d444e91618465ca68d8ae4f2c916d1942201b7e2aae491ef0f809867d00e83468fb7f9af9b42ede76c1e90d89dd789ff22eb09e8b1d062d8a58b6f88b3cbe80136fc68331178cd45a1df9496ded092d976911b5244b85bc3de41e844ec194256b39aeee4ea55538a36139211e9910ad6b7a74e75d45b869d0a67aa4bf600930a5f760dfb8e4df9938d1f47b743d71c78ba8585e3b80aba26d24b1f50b36fa1458e79d54c05f58049245392bc3e2b5c5f9a1b99d43ed112ca82b201fb143d401741713188e47f1d6682b0bf496a5d4182836121efff0fd3b030fc6bfb5e21d6314a200963fe75cb856d444a813426b2084dfdc49dca2e649cb9da8bcb47859a4c629e97898e3547c591e39764110a224150d579c33fb74fa5eb96427036899c04154feab5344873d36a53a5baefd78c132be419f3f3a8dd8f60f72eb78dd5f43c53226f5ceb68947da3e19a750d760fb31fa8d4c7f53bfef11c4b89158aa56b1f4395430e16a3128f88e234ce1df7ef865f2d2c4975e8c82225f578310c31fd41d265fd530cbfa2b8895b228a510b806c31dff3b1fa5c08bffad443d567ed0e628febdd22775776e0cc9cebcaea9c6df9279a5d91dd0ee5e7a0434e989a160005321c97026cb559f71db23360105460d959bcdf74bee22c4ad8805a1d497507"

	var buf = new(bytes.Buffer)
	proof.Write(buf)

	bytes := buf.Bytes()
	if expected != hex.EncodeToString(bytes) {
		panic("expected serialised proof is different from the other implementations")
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
