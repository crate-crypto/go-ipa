package fp

import (
	basefield "github.com/consensys/gnark-crypto/ecc/bls12-381/fr"
)

// A field element representing the basefield of the
// bandersnatch curve.
type Element = basefield.Element

// The number of limbs needed to represent this field element.
const Limbs = basefield.Limbs

// The number 1 in montgomery form.
func One() Element {
	return basefield.One()
}

// The number -1 in montgomery form.
func Zero() Element {
	return basefield.Element{}
}

// One returns 1 (in montgommery form)
func MinusOne() Element {
	m_one := One()
	m_one.Neg(&m_one)
	return m_one
}

func MulBy5(a *Element) {
	basefield.MulBy5(a)
}

// Batch invert multiple field elements using the montgomery trick.
func BatchInvert(a []Element) []Element {
	return basefield.BatchInvert(a)
}

// Serialise a field element in little-endian form.
func BytesLE(a Element) []byte {
	var result [basefield.Bytes]byte
	basefield.LittleEndian.PutElement(&result, a)
	return result[:]
}
