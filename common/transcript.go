package common

import (
	"crypto/sha256"
	"hash"

	"github.com/crate-crypto/go-ipa/bandersnatch"
	"github.com/crate-crypto/go-ipa/bandersnatch/fr"
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

// Appends a Scalar to the transcript
//
// Converts the scalar to 32 bytes, then appends it to
// the state
func (t *Transcript) AppendScalar(scalar *fr.Element) {
	tmpBytes := scalar.Bytes()
	t.state.Write(tmpBytes[:])
}

func (t *Transcript) AppendScalars(scalars ...*fr.Element) {
	for _, idx := range scalars {
		t.AppendScalar(idx)
	}
}

// Appends a Point to the transcript
//
// Compresses the Point into a 32 byte slice, then appends it to
// the state
func (t *Transcript) AppendPoint(point *bandersnatch.PointAffine) {
	tmp_bytes := point.Bytes()
	t.state.Write(tmp_bytes[:])
}

func (t *Transcript) AppendPoints(points ...*bandersnatch.PointAffine) {
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
func (t *Transcript) ChallengeScalar() fr.Element {
	var tmp fr.Element
	tmp.SetBytes(t.state.Sum(nil))

	// Clear the state
	t.state.Reset()

	// Add the new challenge to the state
	// Which "summarises" the previous state before we cleared it
	t.AppendScalar(&tmp)

	// Return the new challenge
	return tmp
}
