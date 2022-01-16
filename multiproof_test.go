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
	test_helper.ScalarEqualHex(t, p_challenge, "f9c48313d1af5e069386805b966ce53a3d95794b82da3aac6d68fd629062a31c")

	// Verifier view
	verifier_transcript := common.NewTranscript("test")
	ok := CheckMultiProof(verifier_transcript, ipaConf, proof, Cs, ys, zs)

	if !ok {
		panic("multi product proof failed")
	}

	// Check serialised bytes are consistent with other implementations
	expected := "1e575ed50234769345382d64f828d8dd65052cc623c4bfe6dd1ca0a8eb6940de717d20b92f592aea4e1a649644ee92d83813e8e296c71e2d32b40532f455d8b9b56baadafbe84808d784aa920836b73af49d758bd8bb1a2690df8b2450d2112e3a48a06378bc60dffa9cd9f80c9c4da0385a388fc8edeca1a740d76b3ab1d8d3ccb0387a0c2005432d6a52e98ca46c0649a69b6b02b9832b1e108199e6977c403624cfff05715445e37586444a27d8c97f18b3bbf417b442e8c8ab16dfe3b0e96ba20178280e6192f8e4e861a21215f394c1ff3057cd5492d1a5154ed8330f3f93f7f02079042c27d51c6299904eadaf6e1e290cc94920d143112ddb34cf2488131bc321ff0349150aad44563ac765905b15b30ac71ebb01c78d7e26e4f920219d040fb50fab3a233ea349fe5e09b1c7e56b311dc8e4505c04c60e27c86d8cbb72a0fe057815972f4bf2e126684a79ba5a3932a9713e059cd51d1a8f0599efa54172d4dfae7016ce2b7b2b325ba847782a2741ba560c158e38d10362a61a11538dd3c5e6742bb96901f53291649fbad13518c79c40af9733f5b54743f7fba3cda82d56894d0265f0befbc2e8a45612411e9bde4123263b1cde7c76ede1b21d97694382416b8c8f502f2c9af06bf250095122fbbfada1b683f588aa01a654a2ddd736135729835790845b3c403cc793bbfc808dba33b7af33bb43d49e06595a095ac84290e268e41d72ef9b93d4bafd0bf537179621a1c4936a5b7f713e9dd5f0cec2779933f46e0d8f48f15a81565de89df43e727e834de5386e446ca2696a13"

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
