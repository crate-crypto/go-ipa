package ipa

import (
	"bytes"
	"crypto/sha256"
	"encoding/hex"
	"testing"

	"github.com/crate-crypto/go-ipa/bandersnatch/fr"
	"github.com/crate-crypto/go-ipa/banderwagon"
	"github.com/crate-crypto/go-ipa/common"
	"github.com/crate-crypto/go-ipa/test_helper"
)

func TestIPAProofCreateVerify(t *testing.T) {

	// Shared View
	var point fr.Element
	point.SetUint64(123456789)
	ipaConf := NewIPASettings()

	// Prover view
	poly := test_helper.TestPoly256(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14)
	prover_comm := ipaConf.Commit(poly)

	prover_transcript := common.NewTranscript("ipa")

	proof := CreateIPAProof(prover_transcript, ipaConf, prover_comm, poly, point)
	lagrange_coeffs := ipaConf.PrecomputedWeights.ComputeBarycentricCoefficients(point)
	inner_product := InnerProd(poly, lagrange_coeffs)

	test_serialize_deserialize_proof(proof)

	// Verifier view
	verifier_comm := prover_comm // In reality, the verifier will rebuild this themselves
	verifier_transcript := common.NewTranscript("ipa")

	ok := CheckIPAProof(verifier_transcript, ipaConf, verifier_comm, proof, point, inner_product)
	if !ok {
		panic("inner product proof failed")
	}

}
func TestIPAConsistencySimpleProof(t *testing.T) {

	// Shared View
	var input_point fr.Element
	input_point.SetUint64(2101)
	ipaConf := NewIPASettings()

	// Prover view
	//
	poly := test_helper.TestPoly256(
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
	)

	prover_comm := ipaConf.Commit(poly)
	test_helper.PointEqualHex(t, prover_comm, "637bf70491d8a87a5a15a004cfbed28ae94f01bdaa801af034a81e63e0fa7db9")

	prover_transcript := common.NewTranscript("test")
	proof := CreateIPAProof(prover_transcript, ipaConf, prover_comm, poly, input_point)

	lagrange_coeffs := ipaConf.PrecomputedWeights.ComputeBarycentricCoefficients(input_point)
	output_point := InnerProd(poly, lagrange_coeffs)
	test_helper.ScalarEqualHex(t, output_point, "4a353e70b03c89f161de002e8713beec0d740a5e20722fd5bd68b30540a33208")

	// Lets check the state of the transcript, by squeezing out a challenge
	p_challenge := prover_transcript.ChallengeScalar("state")
	test_helper.ScalarEqualHex(t, p_challenge, "50d7f61175ffcfefc0dd603943ec8da7568608564d509cd0d1fa71cc48dc3515")

	// Note, that we can be confident that any implementation which passes the above conditions
	// will have a proof object that is consistent, as the transcript adds everything into the proof

	// Verifier view
	//
	verifier_comm := prover_comm // In reality, the verifier will rebuild this themselves
	verifier_transcript := common.NewTranscript("test")

	ok := CheckIPAProof(verifier_transcript, ipaConf, verifier_comm, proof, input_point, output_point)
	if !ok {
		panic("inner product proof failed")
	}
	//
	v_challenge := verifier_transcript.ChallengeScalar("state")
	if !v_challenge.Equal(&p_challenge) {
		panic("prover and verifier state are not the same. The proof should not have passed!")
	}

	// Check that the serialised proof matches the other implementations
	expected := "9cbba7fb5bf96ef7fd13e085f783e8b09263426dc5d17142acd0d851ff705fd0fcf15f2fad4f6578d95339e914b44ae6dce731d786bf252c92b5fc0d9c4461d310595f85da60a24822cf8aaa137f0db313069fe6bf32d9f41b4eeead08ea3b88956fc57860b5b479b8dd6d7b73c37a793b134b47197f6e9a1dfaa518cca52b29fab70bb94ed51588684776fe5da4d4e6aaee0126fff920f0f1b744f5a4dc3226eb0f8ec433351abb5cde8a53d6e4ecd86e5a00486dc41ae0feab9823137d132d288d91cf339a2e944b921fe0f886f333902a32026408f7e30b8b4193b7f9c2f128ae45c0c7cfe8cd752559b8dc191eba7f13536d173cc087de5425cbb7114f529107539160aa9f8706fd0ef56adf45ba1cce515b88fc43e8618586d207a25f1ce07ff1bbeff6dc1306c2125d21db49c9431240fd78865b010dc3132a7052bdeb23970d4af5304857423fafcd08e4e91d60a82006da73d2df57fa80588f753e3aaa12e294af01ecd06cdc2c69fb4603536355f523ae918ca24ba51aff3130dd5b3f7a962db4208154c268a83c1dfb65d8a91609403ffbb085cbe8f28c24ae3aa67a9776135e07ab675275a76ec54f8ff5355fe9e6419739d1e2f1f4951c43ce619758c8348f28e50000cb5c45915044a9e47bf9514c6eaf8ec88f31fb3cc7b52ba60e038ebd684a9f8efee1d345724764bebec999c230908759ac01cf30829cd981fff0e1fa629b4fc6702c824d7764901af6e9e0b5d36d1fc194ba2408311b0c"

	var buf = new(bytes.Buffer)
	proof.Write(buf)

	bytes := buf.Bytes()
	if expected != hex.EncodeToString(bytes) {
		panic("expected serialised proof is different from the other implementations")
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

	gen := banderwagon.Generator

	var generators []banderwagon.Element
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

	var expected banderwagon.Element
	expected.ScalarMul(&gen, &total)

	if !got.Equal(&expected) {
		panic("commit function; incorrect results")
	}
}
func TestCRSGeneration(t *testing.T) {
	generator := banderwagon.Generator
	points := GenerateRandomPoints(256)
	for _, point := range points {
		if !point.IsOnCurve() {
			panic("generated a point that was not on the curve")
		}
		// Check point is in the correct subgroup by doing
		// serialise deserialise roundtrip

		bytes := point.Bytes()
		err := point.SetBytes(bytes[:])
		if err != nil {
			panic("point is not in the banderwagon subgroup")
		}
		if point.Equal(&generator) {
			panic("one of the generated points was the generator. The inner product point is being used as the generator.")
		}
	}

	// Check that the points are all unique
	points = removeDuplicatePoints(points)
	if len(points) != 256 {
		panic("points contained duplicates")
	}

	// Now check against the test vectors here: https://hackmd.io/1RcGSMQgT4uREaq1CCx_cg#Methodology
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

func test_serialize_deserialize_proof(proof IPAProof) {
	var buf = new(bytes.Buffer)
	proof.Write(buf)

	var got_proof IPAProof
	got_proof.Read(buf)

	if !got_proof.Equal(proof) {
		panic("proof serialization does not match deserialization for IPA")
	}
}

func removeDuplicatePoints(intSlice []banderwagon.Element) []banderwagon.Element {
	allKeys := make(map[banderwagon.Element]bool)
	list := []banderwagon.Element{}
	for _, item := range intSlice {
		if _, value := allKeys[item]; !value {
			allKeys[item] = true
			list = append(list, item)
		}
	}
	return list
}
