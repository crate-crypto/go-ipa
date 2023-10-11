package multiproof

import (
	"bytes"
	"encoding/hex"
	"fmt"
	"math/rand"
	"os"
	"runtime"
	"sync"
	"testing"

	"github.com/crate-crypto/go-ipa/bandersnatch/fr"
	"github.com/crate-crypto/go-ipa/banderwagon"
	"github.com/crate-crypto/go-ipa/common"
	"github.com/crate-crypto/go-ipa/ipa"
	"github.com/crate-crypto/go-ipa/test_helper"
)

var ipaConf *ipa.IPAConfig

func TestMain(m *testing.M) {
	var err error
	ipaConf, err = ipa.NewIPASettings()
	if err != nil {
		panic(err)
	}
	os.Exit(m.Run())
}

func TestMultiProofCreateVerify(t *testing.T) {
	t.Parallel()

	// Prover view
	poly_1 := test_helper.TestPoly256(1, 1, 1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14)
	prover_transcript := common.NewTranscript("multiproof")
	prover_comm_1 := ipaConf.Commit(poly_1)

	one := fr.One()

	Cs := []*banderwagon.Element{&prover_comm_1}
	fs := [][]fr.Element{poly_1}
	zs := []uint8{0}
	ys := []*fr.Element{&one}
	proof, err := CreateMultiProof(prover_transcript, ipaConf, Cs, fs, zs)
	if err != nil {
		t.Fatalf("failed to create multiproof: %s", err)
	}

	test_serialize_deserialize_proof(t, *proof)

	// Verifier view
	verifier_transcript := common.NewTranscript("multiproof")
	ok, err := CheckMultiProof(verifier_transcript, ipaConf, proof, Cs, ys, zs)
	if err != nil {
		t.Fatalf("failed to verify multiproof: %s", err)
	}
	if !ok {
		t.Fatalf("failed to verify multiproof")
	}

}
func TestMultiProofConsistency(t *testing.T) {
	t.Parallel()

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

	proof, err := CreateMultiProof(prover_transcript, ipaConf, Cs, fs, zs)
	if err != nil {
		t.Fatalf("failed to create multiproof: %s", err)
	}

	// Lets check the state of the transcript, by squeezing out a challenge
	p_challenge := prover_transcript.ChallengeScalar([]byte("state"))
	test_helper.ScalarEqualHex(t, p_challenge, "eee8a80357ff74b766eba39db90797d022e8d6dee426ded71234241be504d519")

	// Verifier view
	verifier_transcript := common.NewTranscript("test")
	ok, err := CheckMultiProof(verifier_transcript, ipaConf, proof, Cs, ys, zs)
	if err != nil {
		t.Fatalf("failed to verify multiproof: %s", err)
	}

	if !ok {
		t.Fatal("failed to verify multiproof")
	}

	// Check serialised bytes are consistent with other implementations
	expected := "4f53588244efaf07a370ee3f9c467f933eed360d4fbf7a19dfc8bc49b67df4711bf1d0a720717cd6a8c75f1a668cb7cbdd63b48c676b89a7aee4298e71bd7f4013d7657146aa9736817da47051ed6a45fc7b5a61d00eb23e5df82a7f285cc10e67d444e91618465ca68d8ae4f2c916d1942201b7e2aae491ef0f809867d00e83468fb7f9af9b42ede76c1e90d89dd789ff22eb09e8b1d062d8a58b6f88b3cbe80136fc68331178cd45a1df9496ded092d976911b5244b85bc3de41e844ec194256b39aeee4ea55538a36139211e9910ad6b7a74e75d45b869d0a67aa4bf600930a5f760dfb8e4df9938d1f47b743d71c78ba8585e3b80aba26d24b1f50b36fa1458e79d54c05f58049245392bc3e2b5c5f9a1b99d43ed112ca82b201fb143d401741713188e47f1d6682b0bf496a5d4182836121efff0fd3b030fc6bfb5e21d6314a200963fe75cb856d444a813426b2084dfdc49dca2e649cb9da8bcb47859a4c629e97898e3547c591e39764110a224150d579c33fb74fa5eb96427036899c04154feab5344873d36a53a5baefd78c132be419f3f3a8dd8f60f72eb78dd5f43c53226f5ceb68947da3e19a750d760fb31fa8d4c7f53bfef11c4b89158aa56b1f4395430e16a3128f88e234ce1df7ef865f2d2c4975e8c82225f578310c31fd41d265fd530cbfa2b8895b228a510b806c31dff3b1fa5c08bffad443d567ed0e628febdd22775776e0cc9cebcaea9c6df9279a5d91dd0ee5e7a0434e989a160005321c97026cb559f71db23360105460d959bcdf74bee22c4ad8805a1d497507"

	var buf = new(bytes.Buffer)
	if err := proof.Write(buf); err != nil {
		t.Fatalf("failed to write proof: %s", err)
	}

	bytes := buf.Bytes()
	if expected != hex.EncodeToString(bytes) {
		t.Fatalf("expected serialised proof is different from the other implementations")
	}
}

func test_serialize_deserialize_proof(t *testing.T, proof MultiProof) {
	var buf = new(bytes.Buffer)
	if err := proof.Write(buf); err != nil {
		t.Fatalf("failed to write proof: %s", err)
	}

	var got_proof MultiProof
	if err := got_proof.Read(buf); err != nil {
		t.Fatalf("failed to read proof: %s", err)
	}

	if !got_proof.Equal(proof) {
		t.Fatal("proof serialization does not match deserialization for Multiproof")
	}
}

func FuzzMultiProofCreateVerify(f *testing.F) {
	f.Fuzz(func(t *testing.T, p0_z uint8, p0_0, p0_1, p0_2, p0_3, p0_4, p0_5, p0_6, p0_7, p0_8, p0_9, p0_10 uint64) {
		if p0_z > 10 {
			return
		}

		poly_1 := test_helper.TestPoly256(p0_0, p0_1, p0_2, p0_3, p0_4, p0_5, p0_6, p0_7, p0_8, p0_9, p0_10)
		prover_transcript := common.NewTranscript("multiproof")
		prover_comm_1 := ipaConf.Commit(poly_1)

		Cs := []*banderwagon.Element{&prover_comm_1}
		fs := [][]fr.Element{poly_1}
		zs := []uint8{p0_z}
		proof, err := CreateMultiProof(prover_transcript, ipaConf, Cs, fs, zs)
		if err != nil {
			return
		}
		if err != nil {
			t.Fatalf("failed to create multiproof: %s", err)
		}

		test_serialize_deserialize_proof(t, *proof)

		// Verifier view
		verifier_transcript := common.NewTranscript("multiproof")

		ys := []*fr.Element{&poly_1[p0_z]}
		ok, err := CheckMultiProof(verifier_transcript, ipaConf, proof, Cs, ys, zs)
		if err != nil && ok {
			t.Fatalf("failing to verify multiproof can't return OK: %s", err)
		}
		if err != nil {
			return
		}
		if !ok {
			t.Fatalf("failed to verify multiproof")
		}
	})
}

func FuzzMultiProofCreateVerifyOpaqueBytes(f *testing.F) {
	f.Fuzz(func(t *testing.T, z uint8, evalPointsBytes []byte) {
		if len(evalPointsBytes) != common.VectorLength*32 {
			return
		}
		evalPoints := make([]fr.Element, len(evalPointsBytes)/32)
		for i := 0; i < len(evalPointsBytes); i += 32 {
			evalPoint := evalPointsBytes[i : i+32]
			if err := evalPoints[i/64].SetBytes(evalPoint); err != nil {
				return
			}
		}

		poly_1 := evalPoints
		prover_transcript := common.NewTranscript("multiproof")
		prover_comm_1 := ipaConf.Commit(poly_1)

		Cs := []*banderwagon.Element{&prover_comm_1}
		fs := [][]fr.Element{poly_1}
		zs := []uint8{z}
		proof, err := CreateMultiProof(prover_transcript, ipaConf, Cs, fs, zs)
		if err != nil {
			return
		}

		test_serialize_deserialize_proof(t, *proof)

		// Verifier view
		verifier_transcript := common.NewTranscript("multiproof")

		ys := []*fr.Element{&poly_1[z]}
		ok, err := CheckMultiProof(verifier_transcript, ipaConf, proof, Cs, ys, zs)
		if err != nil && ok {
			t.Fatalf("failing to verify multiproof can't return OK: %s", err)
		}
		if err != nil {
			return
		}
		if !ok {
			t.Fatalf("failed to verify multiproof")
		}
	})
}

func FuzzMultiProofDeserialize(f *testing.F) {
	f.Fuzz(func(t *testing.T, proofBytes []byte) {
		var proof MultiProof
		err := proof.Read(bytes.NewReader(proofBytes))
		if err != nil {
			return
		}
		var buf = new(bytes.Buffer)
		if err := proof.Write(buf); err != nil {
			t.Fatalf("failed to write proof: %s", err)
		}
		a := buf.Bytes()
		if !bytes.Equal(a, proofBytes) {
			t.Fatalf("proof serialization does not match deserialization for Multiproof")
		}
	})
}

func BenchmarkProofGeneration(b *testing.B) {
	numOpenings := []int{2_000, 16_000, 32_000, 64_000, 128_000}
	openings := genRandomPolynomialOpenings(b, numOpenings[len(numOpenings)-1])

	for _, n := range numOpenings {
		b.Run(fmt.Sprintf("numopenings=%d", n), func(b *testing.B) {
			Cs := make([]*banderwagon.Element, n)
			fs := make([][]fr.Element, n)
			zs := make([]uint8, n)

			for i := 0; i < n; i++ {
				Cs[i] = &openings[i].commitment
				fs[i] = openings[i].evaluations[:]
				zs[i] = openings[i].evalPoint
			}

			for i := 0; i < b.N; i++ {
				tr := common.NewTranscript("multiproof")

				b.StopTimer()
				Cs2 := make([]*banderwagon.Element, n)
				for i := 0; i < n; i++ {
					cs2 := *Cs[i]
					Cs2[i] = &cs2
				}
				b.StartTimer()

				if _, err := CreateMultiProof(tr, ipaConf, Cs2, fs, zs); err != nil {
					b.Fatalf("failed to create multiproof: %s", err)
				}
			}
		})

	}
}

func BenchmarkProofVerification(b *testing.B) {
	numOpenings := []int{2_000, 16_000, 32_000, 64_000, 128_000}
	openings := genRandomPolynomialOpenings(b, numOpenings[len(numOpenings)-1])

	for _, n := range numOpenings {
		b.Run(fmt.Sprintf("numopenings=%d", n), func(b *testing.B) {
			Cs := make([]*banderwagon.Element, n)
			fs := make([][]fr.Element, n)
			zs := make([]uint8, n)
			ys := make([]*fr.Element, n)
			for i := 0; i < n; i++ {
				Cs[i] = &openings[i].commitment
				fs[i] = openings[i].evaluations[:]
				zs[i] = openings[i].evalPoint
				ys[i] = &fs[i][zs[i]]
			}
			transcriptProving := common.NewTranscript("multiproof")
			proof, err := CreateMultiProof(transcriptProving, ipaConf, Cs, fs, zs)
			if err != nil {
				b.Fatalf("failed to create multiproof: %s", err)
			}

			b.ResetTimer()
			for i := 0; i < b.N; i++ {
				tr := common.NewTranscript("multiproof")
				if ok, err := CheckMultiProof(tr, ipaConf, proof, Cs, ys, zs); !ok || err != nil {
					b.Fatalf("failed to verify multiproof")
				}
			}
		})
	}
}

func genRandomPolynomialOpenings(t testing.TB, n int) []polyOpening {
	openings := make([]polyOpening, n)

	batches := runtime.NumCPU()
	batchSize := (n + batches - 1) / batches

	var wg sync.WaitGroup
	wg.Add(batches)
	for i := 0; i < batches; i++ {
		go func(i int) {
			defer wg.Done()
			for j := 0; j < batchSize; j++ {
				if i*batchSize+j >= n {
					break
				}
				openings[i*batchSize+j] = genRandomPolynomialOpening(t)
			}
		}(i)
	}
	wg.Wait()

	return openings
}

type polyOpening struct {
	commitment  banderwagon.Element
	evaluations [256]fr.Element
	evalPoint   uint8
}

func genRandomPolynomialOpening(t testing.TB) polyOpening {
	var polynomialFr [256]fr.Element
	for i := range polynomialFr {
		if _, err := polynomialFr[i].SetRandom(); err != nil {
			t.Fatalf("failed to set random element: %s", err)
		}
	}
	c := ipaConf.Commit(polynomialFr[:])

	return polyOpening{
		commitment:  c,
		evaluations: polynomialFr,
		evalPoint:   uint8(rand.Uint32()),
	}
}
