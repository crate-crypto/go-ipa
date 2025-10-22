package ipa

import (
	"bytes"
	"crypto/sha256"
	"encoding/hex"
	"fmt"
	"testing"

	"github.com/crate-crypto/go-ipa/banderwagon"
	"github.com/crate-crypto/go-ipa/bandersnatch/fr"
	"github.com/crate-crypto/go-ipa/common"
	"github.com/crate-crypto/go-ipa/test_helper"
)

const (
	transcriptLabelIPA  = "ipa"
	transcriptLabelTest = "test"
)

var ipaConf *IPAConfig

func TestMain(m *testing.M) {
	var err error
	ipaConf, err = NewIPASettings()
	if err != nil {
		panic(err)
	}
	m.Run()
}

func hexEqual(t *testing.T, got []byte, wantHex, msg string) {
	t.Helper()
	gh := hex.EncodeToString(got)
	if gh != wantHex {
		t.Fatalf("%s: mismatch\n got:  %s\n want: %s", msg, gh, wantHex)
	}
}

func scalarEqualHex(t *testing.T, got *fr.Element, wantHex, msg string) {
	t.Helper()
	gb := got.Bytes()
	gh := hex.EncodeToString(gb[:])
	if gh != wantHex {
		t.Fatalf("%s: mismatch\n got:  %s\n want: %s", msg, gh, wantHex)
	}
}

func pointHex(p *banderwagon.Element) string {
	b := p.Bytes()
	return hex.EncodeToString(b[:])
}

func removeDuplicatePoints(points []banderwagon.Element) []banderwagon.Element {
	seen := make(map[[32]byte]struct{}, len(points))
	out := make([]banderwagon.Element, 0, len(points))
	for _, p := range points {
		b := p.Bytes()
		var k [32]byte
		copy(k[:], b[:])
		if _, ok := seen[k]; ok {
			continue
		}
		seen[k] = struct{}{}
		out = append(out, p)
	}
	return out
}

func serializeDeserializeProof(t *testing.T, proof IPAProof) IPAProof {
	t.Helper()
	buf := new(bytes.Buffer)
	if err := proof.Write(buf); err != nil {
		t.Fatal("failed to write proof:", err)
	}
	var got IPAProof
	if err := got.Read(buf); err != nil {
		t.Fatal("failed to read proof:", err)
	}
	if !got.Equal(proof) {
		t.Fatal("proof serialization does not match deserialization for IPA")
	}
	return got
}

func TestIPAProofCreateVerify(t *testing.T) {
	t.Parallel()

	var point fr.Element
	point.SetUint64(123456789)

	poly := test_helper.TestPoly256(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14)
	proverComm := ipaConf.Commit(poly)
	proverTranscript := common.NewTranscript(transcriptLabelIPA)

	proof, err := CreateIPAProof(proverTranscript, ipaConf, proverComm, poly, point)
	if err != nil {
		t.Fatalf("could not create proof: %s", err)
	}

	lagrangeCoeffs := ipaConf.PrecomputedWeights.ComputeBarycentricCoefficients(point)
	innerProduct, err := InnerProd(poly, lagrangeCoeffs)
	if err != nil {
		t.Fatalf("could not compute inner product: %s", err)
	}

	serializeDeserializeProof(t, proof)

	verifierComm := proverComm
	verifierTranscript := common.NewTranscript(transcriptLabelIPA)

	ok, err := CheckIPAProof(verifierTranscript, ipaConf, verifierComm, proof, point, innerProduct)
	if err != nil {
		t.Fatalf("could not check proof: %s", err)
	}
	if !ok {
		t.Fatal("inner product proof failed")
	}
}

func TestIPAConsistencySimpleProof(t *testing.T) {
	t.Parallel()

	var inputPoint fr.Element
	inputPoint.SetUint64(2101)

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

	proverComm := ipaConf.Commit(poly)
	test_helper.PointEqualHex(t, proverComm, "1b9dff8f5ebbac250d291dfe90e36283a227c64b113c37f1bfb9e7a743cdb128")

	proverTranscript := common.NewTranscript(transcriptLabelTest)
	proof, err := CreateIPAProof(proverTranscript, ipaConf, proverComm, poly, inputPoint)
	if err != nil {
		t.Fatalf("could not create proof: %s", err)
	}

	lagrangeCoeffs := ipaConf.PrecomputedWeights.ComputeBarycentricCoefficients(inputPoint)
	outputPoint, err := InnerProd(poly, lagrangeCoeffs)
	if err != nil {
		t.Fatalf("could not compute inner product: %s", err)
	}
	test_helper.ScalarEqualHex(t, outputPoint, "4a353e70b03c89f161de002e8713beec0d740a5e20722fd5bd68b30540a33208")

	pChallenge := proverTranscript.ChallengeScalar([]byte("state"))
	test_helper.ScalarEqualHex(t, pChallenge, "0a81881cbfd7d7197a54ebd67ed6a68b5867f3c783706675b34ece43e85e7306")

	verifierComm := proverComm
	verifierTranscript := common.NewTranscript(transcriptLabelTest)

	ok, err := CheckIPAProof(verifierTranscript, ipaConf, verifierComm, proof, inputPoint, outputPoint)
	if err != nil {
		t.Fatalf("could not check proof: %s", err)
	}
	if !ok {
		t.Fatal("inner product proof failed")
	}

	vChallenge := verifierTranscript.ChallengeScalar([]byte("state"))
	if !vChallenge.Equal(&pChallenge) {
		t.Fatal("prover and verifier state are not the same. The proof should not have passed!")
	}

	expectedHex := "273395a8febdaed38e94c3d874e99c911a47dd84616d54c55021d5c4131b507e46a4ec2c7e82b77ec2f533994c91ca7edaef212c666a1169b29c323eabb0cf690e0146638d0e2d543f81da4bd597bf3013e1663f340a8f87b845495598d0a3951590b6417f868edaeb3424ff174901d1185a53a3ee127fb7be0af42dda44bf992885bde279ef821a298087717ef3f2b78b2ede7f5d2ea1b60a4195de86a530eb247fd7e456012ae9a070c61635e55d1b7a340dfab8dae991d6273d099d9552815434cc1ba7bcdae341cf7928c6f25102370bdf4b26aad3af654d9dff4b3735661db3177342de5aad774a59d3e1b12754aee641d5f9cd1ecd2751471b308d2d8410add1c9fcc5a2b7371259f0538270832a98d18151f653efbc60895fab8be9650510449081626b5cd24671d1a3253487d44f589c2ff0da3557e307e520cf4e0054bbf8bdffaa24b7e4cce5092ccae5a08281ee24758374f4e65f126cacce64051905b5e2038060ad399c69ca6cb1d596d7c9cb5e161c7dcddc1a7ad62660dd4a5f69b31229b80e6b3df520714e4ea2b5896ebd48d14c7455e91c1ecf4acc5ffb36937c49413b7d1005dd6efbd526f5af5d61131ca3fcdae1218ce81c75e62b39100ec7f474b48a2bee6cef453fa1bc3db95c7c6575bc2d5927cbf7413181ac905766a4038a7b422a8ef2bf7b5059b5c546c19a33c1049482b9a9093f864913ca82290decf6e9a65bf3f66bc3ba4a8ed17b56d890a83bcbe74435a42499dec115"
	buf := new(bytes.Buffer)
	if err := proof.Write(buf); err != nil {
		t.Fatal("could not serialise proof:", err)
	}
	hexEqual(t, buf.Bytes(), expectedHex, "serialized proof")

	t.Run("fails if claimed output is wrong", func(t *testing.T) {
		vt := common.NewTranscript(transcriptLabelTest)
		var one fr.Element
		one.SetOne()
		var bad fr.Element
		bad.Add(&outputPoint, &one) // output + 1
		ok, err := CheckIPAProof(vt, ipaConf, verifierComm, proof, inputPoint, bad)
		if err == nil && ok {
			t.Fatal("verification should fail with incorrect claimed output")
		}
	})

	t.Run("fails if commitment is tampered", func(t *testing.T) {
		vt := common.NewTranscript(transcriptLabelTest)
		var tampered banderwagon.Element
		tampered.Add(&verifierComm, &banderwagon.Generator) // shift commitment
		ok, err := CheckIPAProof(vt, ipaConf, tampered, proof, inputPoint, outputPoint)
		if err == nil && ok {
			t.Fatal("verification should fail with tampered commitment")
		}
	})

	t.Run("fails if proof bytes are corrupted", func(t *testing.T) {
		b := new(bytes.Buffer)
		if err := proof.Write(b); err != nil {
			t.Fatal(err)
		}
		raw := b.Bytes()
		if len(raw) == 0 {
			t.Fatal("empty proof bytes?")
		}
		raw[len(raw)-1] ^= 0x01

		var corrupted IPAProof
		if err := corrupted.Read(bytes.NewReader(raw)); err == nil {
			vt := common.NewTranscript(transcriptLabelTest)
			ok, err := CheckIPAProof(vt, ipaConf, verifierComm, corrupted, inputPoint, outputPoint)
			if err == nil && ok {
				t.Fatal("verification should fail with corrupted proof")
			}
		}
	})
}

func TestBasicInnerProduct(t *testing.T) {
	t.Parallel()

	a := make([]fr.Element, 10)
	b := make([]fr.Element, 10)
	for i := 0; i < 10; i++ {
		a[i].SetUint64(uint64(i))
		b[i].SetOne()
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
		t.Fatalf("inner product should equal sum(a) since b is all ones\n got: %x\n exp: %x", got.Bytes(), expected.Bytes())
	}
}

func TestBasicCommit(t *testing.T) {
	t.Parallel()

	gen := banderwagon.Generator

	generators := make([]banderwagon.Element, 5)
	for i := range generators {
		generators[i] = gen
	}

	a := make([]fr.Element, 5)
	for i := range a {
		a[i].SetUint64(uint64(i + 1)) // 1..5
	}

	got, err := commit(generators, a)
	if err != nil {
		t.Fatalf("commit failed: %v", err)
	}

	total := fr.Zero()
	for i := range a {
		total.Add(&total, &a[i])
	}
	var expected banderwagon.Element
	expected.ScalarMul(&gen, &total)

	if !got.Equal(&expected) {
		t.Fatalf("commit mismatch:\n got: %s\n exp: %s", pointHex(&got), pointHex(&expected))
	}
}

func TestCRSGeneration(t *testing.T) {
	t.Parallel()

	generator := banderwagon.Generator
	points := GenerateRandomPoints(256)
	for _, p := range points {
		if !p.IsOnCurve() {
			t.Fatal("generated a point that was not on the curve")
		}
		bytes := p.Bytes()
		if err := p.SetBytes(bytes[:]); err != nil {
			t.Fatal("point is not in the banderwagon subgroup")
		}
		if p.Equal(&generator) {
			t.Fatal("one of the generated points was the generator; inner product point should not be the generator")
		}
	}

	points = removeDuplicatePoints(points)
	if len(points) != 256 {
		t.Fatalf("points contained duplicates: got %d unique", len(points))
	}

	p0 := points[0].Bytes()
	got := hex.EncodeToString(p0[:])
	want := "01587ad1336675eb912550ec2a28eb8923b824b490dd2ba82e48f14590a298a0"
	if got != want {
		t.Fatalf("the first point is not correct\n got: %s\n exp: %s", got, want)
	}

	p255 := points[255].Bytes()
	got = hex.EncodeToString(p255[:])
	want = "3de2be346b539395b0c0de56a5ccca54a317f1b5c80107b0802af9a62276a4d8"
	if got != want {
		t.Fatalf("the 256th (last) point is not correct\n got: %s\n exp: %s", got, want)
	}

	digest := sha256.New()
	for _, p := range points {
		b := p.Bytes()
		digest.Write(b[:])
	}
	hash := digest.Sum(nil)
	got = hex.EncodeToString(hash[:])
	want = "1fcaea10bf24f750200e06fa473c76ff0468007291fa548e2d99f09ba9256fdb"
	if got != want {
		t.Fatalf("unexpected point encountered\n got: %s\n exp: %s", got, want)
	}
}

func TestInsideDomainEvaluation(t *testing.T) {
	t.Parallel()

	poly := test_helper.TestPoly256(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14)
	polyComm := ipaConf.Commit(poly)

	for domainEvalPoint := 0; domainEvalPoint < domainSize; domainEvalPoint++ {
		dep := domainEvalPoint
		t.Run(fmt.Sprintf("domain-x=%d", dep), func(t *testing.T) {
			var frEvalPoint fr.Element
			frEvalPoint.SetUint64(uint64(dep))

			tr := common.NewTranscript(transcriptLabelIPA)
			proof, err := CreateIPAProof(tr, ipaConf, polyComm, poly, frEvalPoint)
			if err != nil {
				t.Fatalf("could not create proof: %s", err)
			}

			tr = common.NewTranscript(transcriptLabelIPA)
			ok, err := CheckIPAProof(tr, ipaConf, polyComm, proof, frEvalPoint, poly[dep])
			if err != nil {
				t.Fatalf("could not check proof: %s", err)
			}
			if !ok {
				t.Fatal("inner product proof failed")
			}
		})
	}
}

func TestProofSerializeDeserialize(t *testing.T) {
	t.Parallel()

	var point fr.Element
	point.SetUint64(42)
	poly := test_helper.TestPoly256(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14)
	comm := ipaConf.Commit(poly)
	tr := common.NewTranscript(transcriptLabelIPA)
	proof, err := CreateIPAProof(tr, ipaConf, comm, poly, point)
	if err != nil {
		t.Fatalf("could not create proof: %s", err)
	}
	got := serializeDeserializeProof(t, proof)
	if !got.Equal(proof) {
		t.Fatal("round-tripped proof not equal")
	}
}

func TestInnerProdLinearityFirstArg(t *testing.T) {
	t.Parallel()
	const n = 16

	randVec := func() []fr.Element {
		v := make([]fr.Element, n)
		for i := range v {
			if _, err := v[i].SetRandom(); err != nil {
				t.Fatal("randomness failed")
			}
		}
		return v
	}

	a := randVec()
	a2 := randVec()
	b := randVec()

	c := make([]fr.Element, n)
	for i := 0; i < n; i++ {
		c[i].Add(&a[i], &a2[i])
	}

	ip1, err := InnerProd(a, b)
	if err != nil {
		t.Fatal(err)
	}
	ip2, err := InnerProd(a2, b)
	if err != nil {
		t.Fatal(err)
	}
	ip3, err := InnerProd(c, b)
	if err != nil {
		t.Fatal(err)
	}

	sum := fr.Zero()
	sum.Add(&sum, &ip1)
	sum.Add(&sum, &ip2)
	if !ip3.Equal(&sum) {
		t.Fatalf("InnerProd not linear in first argument\n (a+a2, b) != (a,b)+(a2,b)\n got: %x\n exp: %x", ip3.Bytes(), sum.Bytes())
	}
}

func BenchmarkCreateIPAProof(b *testing.B) {
	var point fr.Element
	point.SetUint64(123456789)
	poly := test_helper.TestPoly256(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14)
	comm := ipaConf.Commit(poly)

	b.ReportAllocs()
	for i := 0; i < b.N; i++ {
		tr := common.NewTranscript(transcriptLabelIPA)
		if _, err := CreateIPAProof(tr, ipaConf, comm, poly, point); err != nil {
			b.Fatal(err)
		}
	}
}

func BenchmarkCheckIPAProof(b *testing.B) {
	var point fr.Element
	point.SetUint64(123456789)
	poly := test_helper.TestPoly256(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14)
	comm := ipaConf.Commit(poly)
	tr := common.NewTranscript(transcriptLabelIPA)
	proof, err := CreateIPAProof(tr, ipaConf, comm, poly, point)
	if err != nil {
		b.Fatal(err)
	}
	lc := ipaConf.PrecomputedWeights.ComputeBarycentricCoefficients(point)
	ip, err := InnerProd(poly, lc)
	if err != nil {
		b.Fatal(err)
	}

	b.ReportAllocs()
	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		tr := common.NewTranscript(transcriptLabelIPA)
		ok, err := CheckIPAProof(tr, ipaConf, comm, proof, point, ip)
		if err != nil || !ok {
			b.Fatal("verify failed")
		}
	}
}
