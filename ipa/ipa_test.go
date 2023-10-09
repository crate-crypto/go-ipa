package ipa

import (
	"bytes"
	"crypto/sha256"
	"encoding/hex"
	"os"
	"testing"

	"github.com/crate-crypto/go-ipa/bandersnatch/fr"
	"github.com/crate-crypto/go-ipa/banderwagon"
	"github.com/crate-crypto/go-ipa/common"
	"github.com/crate-crypto/go-ipa/test_helper"
)

var ipaConf *IPAConfig

func TestMain(m *testing.M) {
	var err error
	ipaConf, err = NewIPASettings()
	if err != nil {
		panic(err)
	}
	os.Exit(m.Run())
}

func TestIPAProofCreateVerify(t *testing.T) {
	t.Parallel()

	// Shared View
	var point fr.Element
	point.SetUint64(123456789)

	// Prover view
	poly := test_helper.TestPoly256(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14)
	prover_comm := ipaConf.Commit(poly)

	prover_transcript := common.NewTranscript("ipa")

	proof, err := CreateIPAProof(prover_transcript, ipaConf, prover_comm, poly, point)
	if err != nil {
		t.Fatalf("could not create proof: %s", err)
	}

	lagrange_coeffs := ipaConf.PrecomputedWeights.ComputeBarycentricCoefficients(point)
	inner_product, err := InnerProd(poly, lagrange_coeffs)
	if err != nil {
		t.Fatalf("could not compute inner product: %s", err)
	}

	test_serialize_deserialize_proof(t, proof)

	// Verifier view
	verifier_comm := prover_comm // In reality, the verifier will rebuild this themselves
	verifier_transcript := common.NewTranscript("ipa")

	ok, err := CheckIPAProof(verifier_transcript, ipaConf, verifier_comm, proof, point, inner_product)
	if err != nil {
		t.Fatalf("could not check proof: %s", err)
	}
	if !ok {
		t.Fatal("inner product proof failed")
	}
}

func TestIPAConsistencySimpleProof(t *testing.T) {
	t.Parallel()

	// Shared View
	var input_point fr.Element
	input_point.SetUint64(2101)

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
	test_helper.PointEqualHex(t, prover_comm, "1b9dff8f5ebbac250d291dfe90e36283a227c64b113c37f1bfb9e7a743cdb128")

	prover_transcript := common.NewTranscript("test")
	proof, err := CreateIPAProof(prover_transcript, ipaConf, prover_comm, poly, input_point)
	if err != nil {
		t.Fatalf("could not create proof: %s", err)
	}

	lagrange_coeffs := ipaConf.PrecomputedWeights.ComputeBarycentricCoefficients(input_point)
	output_point, err := InnerProd(poly, lagrange_coeffs)
	if err != nil {
		t.Fatalf("could not compute inner product: %s", err)
	}
	test_helper.ScalarEqualHex(t, output_point, "4a353e70b03c89f161de002e8713beec0d740a5e20722fd5bd68b30540a33208")

	// Lets check the state of the transcript, by squeezing out a challenge
	p_challenge := prover_transcript.ChallengeScalar([]byte("state"))
	test_helper.ScalarEqualHex(t, p_challenge, "0a81881cbfd7d7197a54ebd67ed6a68b5867f3c783706675b34ece43e85e7306")

	// Note, that we can be confident that any implementation which passes the above conditions
	// will have a proof object that is consistent, as the transcript adds everything into the proof

	// Verifier view
	//
	verifier_comm := prover_comm // In reality, the verifier will rebuild this themselves
	verifier_transcript := common.NewTranscript("test")

	ok, err := CheckIPAProof(verifier_transcript, ipaConf, verifier_comm, proof, input_point, output_point)
	if err != nil {
		t.Fatalf("could not check proof: %s", err)
	}
	if !ok {
		t.Fatal("inner product proof failed")
	}
	//
	v_challenge := verifier_transcript.ChallengeScalar([]byte("state"))
	if !v_challenge.Equal(&p_challenge) {
		t.Fatal("prover and verifier state are not the same. The proof should not have passed!")
	}

	// Check that the serialised proof matches the other implementations
	expected := "273395a8febdaed38e94c3d874e99c911a47dd84616d54c55021d5c4131b507e46a4ec2c7e82b77ec2f533994c91ca7edaef212c666a1169b29c323eabb0cf690e0146638d0e2d543f81da4bd597bf3013e1663f340a8f87b845495598d0a3951590b6417f868edaeb3424ff174901d1185a53a3ee127fb7be0af42dda44bf992885bde279ef821a298087717ef3f2b78b2ede7f5d2ea1b60a4195de86a530eb247fd7e456012ae9a070c61635e55d1b7a340dfab8dae991d6273d099d9552815434cc1ba7bcdae341cf7928c6f25102370bdf4b26aad3af654d9dff4b3735661db3177342de5aad774a59d3e1b12754aee641d5f9cd1ecd2751471b308d2d8410add1c9fcc5a2b7371259f0538270832a98d18151f653efbc60895fab8be9650510449081626b5cd24671d1a3253487d44f589c2ff0da3557e307e520cf4e0054bbf8bdffaa24b7e4cce5092ccae5a08281ee24758374f4e65f126cacce64051905b5e2038060ad399c69ca6cb1d596d7c9cb5e161c7dcddc1a7ad62660dd4a5f69b31229b80e6b3df520714e4ea2b5896ebd48d14c7455e91c1ecf4acc5ffb36937c49413b7d1005dd6efbd526f5af5d61131ca3fcdae1218ce81c75e62b39100ec7f474b48a2bee6cef453fa1bc3db95c7c6575bc2d5927cbf7413181ac905766a4038a7b422a8ef2bf7b5059b5c546c19a33c1049482b9a9093f864913ca82290decf6e9a65bf3f66bc3ba4a8ed17b56d890a83bcbe74435a42499dec115"

	buf := new(bytes.Buffer)
	if err := proof.Write(buf); err != nil {
		t.Fatal("could not serialise proof")
	}

	bytes := buf.Bytes()
	if expected != hex.EncodeToString(bytes) {
		t.Fatal("expected serialised proof is different from the other implementations")
	}
}

func TestBasicInnerProduct(t *testing.T) {
	t.Parallel()

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

	got, err := InnerProd(a, b)
	if err != nil {
		t.Fatalf("could not compute inner product: %s", err)
	}
	expected := fr.Zero()

	for i := 0; i < 10; i++ {
		var tmp fr.Element
		tmp.SetUint64(uint64(i))
		expected.Add(&expected, &tmp)
	}
	if !got.Equal(&expected) {
		t.Fatal("the inner product should just be the sum of a since b is just 1")
	}
}

func TestBasicCommit(t *testing.T) {
	t.Parallel()

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
			t.Fatal("could not generate randomness")
		}
		a = append(a, tmp)
	}
	got, err := commit(generators, a)
	if err != nil {
		t.Fatalf("could not compute inner product: %s", err)
	}

	total := fr.Zero()
	for i := 0; i < 5; i++ {
		total.Add(&total, &a[i])
	}

	var expected banderwagon.Element
	expected.ScalarMul(&gen, &total)

	if !got.Equal(&expected) {
		t.Fatal("commit function; incorrect results")
	}
}

func TestCRSGeneration(t *testing.T) {
	t.Parallel()

	generator := banderwagon.Generator
	points := GenerateRandomPoints(256)
	for _, point := range points {
		if !point.IsOnCurve() {
			t.Fatal("generated a point that was not on the curve")
		}
		// Check point is in the correct subgroup by doing
		// serialise deserialise roundtrip

		bytes := point.Bytes()
		err := point.SetBytes(bytes[:])
		if err != nil {
			t.Fatal("point is not in the banderwagon subgroup")
		}
		if point.Equal(&generator) {
			t.Fatal("one of the generated points was the generator. The inner product point is being used as the generator.")
		}
	}

	// Check that the points are all unique
	points = removeDuplicatePoints(points)
	if len(points) != 256 {
		t.Fatal("points contained duplicates")
	}

	// Now check against the test vectors here: https://hackmd.io/1RcGSMQgT4uREaq1CCx_cg#Methodology
	// TODO: This hackmd document needs to be updated
	bytes := points[0].Bytes()
	got := hex.EncodeToString(bytes[:])
	expected := "01587ad1336675eb912550ec2a28eb8923b824b490dd2ba82e48f14590a298a0"
	if got != expected {
		t.Fatal("the first point is not correct")
	}
	bytes = points[255].Bytes()
	got = hex.EncodeToString(bytes[:])
	expected = "3de2be346b539395b0c0de56a5ccca54a317f1b5c80107b0802af9a62276a4d8"
	if got != expected {
		t.Fatal("the 256th (last) point is not correct")
	}

	digest := sha256.New()
	for _, point := range points {
		bytes := point.Bytes()
		digest.Write(bytes[:])
	}
	hash := digest.Sum(nil)
	got = hex.EncodeToString(hash[:])
	expected = "1fcaea10bf24f750200e06fa473c76ff0468007291fa548e2d99f09ba9256fdb"
	if got != expected {
		t.Fatal("unexpected point encountered")
	}
}

func TestInsideDomainEvaluation(t *testing.T) {
	t.Parallel()

	// Define some arbitrary polynomial in evaluation form.
	poly := test_helper.TestPoly256(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14)
	polyComm := ipaConf.Commit(poly)

	// For all the possible evaluation points *in the domain*, double check that
	// proof generation and verification works correctly.
	for domainEvalPoint := 0; domainEvalPoint < domainSize; domainEvalPoint++ {
		var frEvalPoint fr.Element
		frEvalPoint.SetUint64(uint64(domainEvalPoint))

		// Prover.
		transcript := common.NewTranscript("ipa")
		proof, err := CreateIPAProof(transcript, ipaConf, polyComm, poly, frEvalPoint)
		if err != nil {
			t.Fatalf("could not create proof: %s", err)
		}

		// Verifier.
		transcript = common.NewTranscript("ipa")
		// We check the proof against what we *know* to be correct regarding `poly` definition in evaluation form.
		ok, err := CheckIPAProof(transcript, ipaConf, polyComm, proof, frEvalPoint, poly[domainEvalPoint])
		if err != nil {
			t.Fatalf("could not check proof: %s", err)
		}
		if !ok {
			t.Fatal("inner product proof failed")
		}
	}
}

func test_serialize_deserialize_proof(t *testing.T, proof IPAProof) {
	buf := new(bytes.Buffer)
	if err := proof.Write(buf); err != nil {
		t.Fatal("failed to write proof")
	}

	var got_proof IPAProof
	if err := got_proof.Read(buf); err != nil {
		t.Fatal("failed to read proof")
	}

	if !got_proof.Equal(proof) {
		t.Fatal("proof serialization does not match deserialization for IPA")
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
