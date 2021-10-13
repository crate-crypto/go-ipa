package common

import (
	"crypto/sha256"

	"github.com/crate-crypto/go-ipa/bls"
)

/// The transcript is used to create challenge scalars.
/// See: Fiat-Shamir
/// XXX: ideally, this should also contain labels, however this is not included in the python implementation
// and we first want this different API to pass without modifying the tests.
// TODO Feedback from gballet remove the buffer and store the SHa256 object
type Transcript struct {
	state []byte
}

func NewTranscript(label string) *Transcript {
	transcript := &Transcript{
		state: []byte{},
	}
	transcript.state = append(transcript.state, label...)
	return transcript
}

// Appends a Bls Scalar to the transcript
//
// Converts the scalar to 32 bytes, then appends it to
// the state
func (t *Transcript) AppendScalar(scalar *bls.Fr) {
	tmpBytes := bls.FrTo32(scalar)
	t.appendBytes(tmpBytes[:])
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
	// XXX: Ideally, we just add the compressed bytes into
	// the transcript
	// However, so that tests do not fail, we
	// sha256 hash the compressed point
	// tmpBytes := bls.ToCompressedG1(point)
	//
	//
	tmpBytes := sha256.Sum256(bls.ToCompressedG1(point))
	t.appendBytes(tmpBytes[:])
}
func (t *Transcript) AppendPoints(points ...*bls.G1Point) {
	for _, point := range points {
		t.AppendPoint(point)
	}
}

// Appends Bytes to the transcript
func (t *Transcript) appendBytes(b []byte) {
	t.state = append(t.state, b...)
}

// Computes a challenge based off of the state of the transcript
//
// Hash the transcript state, then reduce the hash modulo the size of the
// scalar field
//
// XXX: Reduction to a field element, should probably be in the bls library and not here
// with an api that just takes a slice and reduces it to an Fr
func (t *Transcript) ChallengeScalar() bls.Fr {
	digest := sha256.New()
	digest.Write(t.state)

	// XXX: Clear the state in order to be consistent with tests
	// Although I believe we should not clear
	t.state = []byte{}

	var tmp bls.Fr
	HashToFr(&tmp, digest.Sum(nil))
	return tmp
}
