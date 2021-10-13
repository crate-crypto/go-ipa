package common

import (
	"fmt"
	"math/big"

	"github.com/crate-crypto/go-ipa/bls"
)

// Code below -  Taken from Go-verkle
var modulus *big.Int

func init() {
	var ok bool
	modulus, ok = big.NewInt(0).SetString("52435875175126190479447740508185965837690552500527637822603658699938581184513", 10)
	if !ok {
		panic("could not get modulus")
	}

}

func HashToFr(out *bls.Fr, h []byte) {
	// Q&D check that the hash doesn't exceed 32 bytes. hashToFr
	// should disappear in the short term, so a panic isn't a
	// big problem here.
	if len(h) != 32 {
		panic("invalid hash length ≠ 32")
	}
	h[31] &= 0x7F // mod 2^255

	// reverse endianness (little -> big)
	for i := 0; i < len(h)/2; i++ {
		h[i], h[len(h)-i-1] = h[len(h)-i-1], h[i]
	}

	// Apply modulus
	x := big.NewInt(0).SetBytes(h)
	x.Mod(x, modulus)

	// clear the buffer in case the trailing bytes were 0
	for i := 0; i < 32; i++ {
		h[i] = 0
	}

	// back to original endianness
	var processed [32]byte
	converted := x.Bytes()
	for i := 0; i < len(converted); i++ {
		processed[i] = converted[len(converted)-i-1]
	}

	if !bls.FrFrom32(out, processed) {
		panic(fmt.Sprintf("invalid Fr number %x", processed))
	}
	// TODO(@gballet) activate when geth moves to Go 1.17
	// in replacement of what is above.
	//if !bls.FrFrom32(out, (*[32]byte)(h)) {
	//panic(fmt.Sprintf("invalid Fr number %x", h))
	//}
}
