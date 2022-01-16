package common

import (
	"encoding/hex"
	"testing"

	"github.com/crate-crypto/go-ipa/bandersnatch/fr"
	"github.com/crate-crypto/go-ipa/banderwagon"
)

func TestVector0(t *testing.T) {
	tr := NewTranscript("simple_protocol")
	challenge_1 := tr.ChallengeScalar("simple_challenge")
	challenge_2 := tr.ChallengeScalar("simple_challenge")

	if challenge_1 == challenge_2 {
		panic("calling ChallengeScalar twice should yield two different challenges")
	}
}
func TestVector1(t *testing.T) {
	tr := NewTranscript("simple_protocol")
	challenge := tr.ChallengeScalar("simple_challenge")
	c_bytes := challenge.BytesLE()

	expected := "c2aa02607cbdf5595f00ee0dd94a2bbff0bed6a2bf8452ada9011eadb538d003"
	got := hex.EncodeToString(c_bytes[:])
	if expected != got {
		panic("computed challenge scalar is incorrect")
	}
}
func TestVector2(t *testing.T) {
	tr := NewTranscript("simple_protocol")
	five := fr.Element{}
	five.SetUint64(5)

	tr.AppendScalar(&five, "five")
	tr.AppendScalar(&five, "five again")

	challenge := tr.ChallengeScalar("simple_challenge")
	c_bytes := challenge.BytesLE()

	expected := "498732b694a8ae1622d4a9347535be589e4aee6999ffc0181d13fe9e4d037b0b"
	got := hex.EncodeToString(c_bytes[:])
	if expected != got {
		panic("computed challenge scalar is incorrect")
	}
}
func TestVector3(t *testing.T) {
	tr := NewTranscript("simple_protocol")
	one := fr.One()
	minus_one := fr.MinusOne()

	tr.AppendScalar(&minus_one, "-1")
	tr.DomainSep("separate me")
	tr.AppendScalar(&minus_one, "-1 again")
	tr.DomainSep("separate me again")
	tr.AppendScalar(&one, "now 1")

	challenge := tr.ChallengeScalar("simple_challenge")
	c_bytes := challenge.BytesLE()

	expected := "14f59938e9e9b1389e74311a464f45d3d88d8ac96adf1c1129ac466de088d618"
	got := hex.EncodeToString(c_bytes[:])
	if expected != got {
		panic("computed challenge scalar is incorrect")
	}
}
func TestVector4(t *testing.T) {
	tr := NewTranscript("simple_protocol")

	gen := banderwagon.Generator
	tr.AppendPoint(&gen, "generator")

	challenge := tr.ChallengeScalar("simple_challenge")
	c_bytes := challenge.BytesLE()

	expected := "c3d390ff8ef3242c4ec3508d9c5f66d8c9f6aae3bde9ce7b4e1a53b9a6e9ac18"
	got := hex.EncodeToString(c_bytes[:])
	if expected != got {
		panic("computed challenge scalar is incorrect")
	}
}
