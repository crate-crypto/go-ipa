package common

import (
	"crypto/sha256"
	"hash"

	"github.com/crate-crypto/go-ipa/bls"
)

/// The transcript is used to create challenge scalars.
/// See: Fiat-Shamir
/// XXX: ideally, this should also contain labels, however this is not included in the python implementation
// and we first want this different API to pass without modifying the tests.
type Transcript struct {
	state hash.Hash
}

func NewTranscript(label string) *Transcript {
	digest := sha256.New()
	digest.Write([]byte(label))

	transcript := &Transcript{
		state: digest,
	}

	return transcript
}

// Appends a Bls Scalar to the transcript
//
// Converts the scalar to 32 bytes, then appends it to
// the state
func (t *Transcript) AppendScalar(scalar *bls.Fr) {
	tmpBytes := bls.FrTo32(scalar)
	t.state.Write(tmpBytes[:])
}

func (t *Transcript) AppendScalars(scalars ...*bls.Fr) {
	for _, idx := range scalars {
		t.AppendScalar(idx)
	}
}

// Appends a G1 Point to the transcript
//
// Compresses the G1 Point into a 32 byte slice, then appends it to
// the state
func (t *Transcript) AppendPoint(point *bls.G1Point) {
	t.state.Write(bls.ToCompressedG1(point))
}

func (t *Transcript) AppendPoints(points ...*bls.G1Point) {
	for _, point := range points {
		t.AppendPoint(point)
	}
}

// Computes a challenge based off of the state of the transcript
//
// Hash the transcript state, then reduce the hash modulo the size of the
// scalar field
//
// Note that calling the transcript twice, will yield two different challenges
func (t *Transcript) ChallengeScalar() bls.Fr {
	var tmp bls.Fr
	bls.ReduceBytesToFr(&tmp, t.state.Sum(nil))

	// Clear the state
	t.state.Reset()

	// Add the new challenge to the state
	// Which "summarises" the previous state before we cleared it
	t.AppendScalar(&tmp)

	// Return the new challenge
	return tmp
}
