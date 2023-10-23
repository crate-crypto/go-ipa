package common

import (
	"encoding/hex"
	"testing"

	"github.com/crate-crypto/go-ipa/bandersnatch/fr"
	"github.com/crate-crypto/go-ipa/banderwagon"
)

func TestVector0(t *testing.T) {
	t.Parallel()

	tr := NewTranscript("simple_protocol")
	challenge_1 := tr.ChallengeScalar([]byte("simple_challenge"))
	challenge_2 := tr.ChallengeScalar([]byte("simple_challenge"))

	if challenge_1 == challenge_2 {
		t.Fatal("calling ChallengeScalar twice should yield two different challenges")
	}
}
func TestVector1(t *testing.T) {
	t.Parallel()

	tr := NewTranscript("simple_protocol")
	challenge := tr.ChallengeScalar([]byte("simple_challenge"))
	c_bytes := challenge.BytesLE()

	expected := "c2aa02607cbdf5595f00ee0dd94a2bbff0bed6a2bf8452ada9011eadb538d003"
	got := hex.EncodeToString(c_bytes[:])
	if expected != got {
		t.Fatal("computed challenge scalar is incorrect")
	}
}
func TestVector2(t *testing.T) {
	t.Parallel()

	tr := NewTranscript("simple_protocol")
	five := fr.Element{}
	five.SetUint64(5)

	tr.AppendScalar(&five, []byte("five"))
	tr.AppendScalar(&five, []byte("five again"))

	challenge := tr.ChallengeScalar([]byte("simple_challenge"))
	c_bytes := challenge.BytesLE()

	expected := "498732b694a8ae1622d4a9347535be589e4aee6999ffc0181d13fe9e4d037b0b"
	got := hex.EncodeToString(c_bytes[:])
	if expected != got {
		t.Fatal("computed challenge scalar is incorrect")
	}
}
func TestVector3(t *testing.T) {
	t.Parallel()

	tr := NewTranscript("simple_protocol")
	one := fr.One()
	minus_one := fr.MinusOne()

	tr.AppendScalar(&minus_one, []byte("-1"))
	tr.DomainSep([]byte("separate me"))
	tr.AppendScalar(&minus_one, []byte("-1 again"))
	tr.DomainSep([]byte("separate me again"))
	tr.AppendScalar(&one, []byte("now 1"))

	challenge := tr.ChallengeScalar([]byte("simple_challenge"))
	c_bytes := challenge.BytesLE()

	expected := "14f59938e9e9b1389e74311a464f45d3d88d8ac96adf1c1129ac466de088d618"
	got := hex.EncodeToString(c_bytes[:])
	if expected != got {
		t.Fatal("computed challenge scalar is incorrect")
	}
}
func TestVector4(t *testing.T) {
	t.Parallel()

	tr := NewTranscript("simple_protocol")

	gen := banderwagon.Generator
	tr.AppendPoint(&gen, []byte("generator"))

	challenge := tr.ChallengeScalar([]byte("simple_challenge"))
	c_bytes := challenge.BytesLE()

	expected := "8c2dafe7c0aabfa9ed542bb2cbf0568399ae794fc44fdfd7dff6cc0e6144921c"
	got := hex.EncodeToString(c_bytes[:])
	if expected != got {
		t.Fatal("computed challenge scalar is incorrect")
	}
}
