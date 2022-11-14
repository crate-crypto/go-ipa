package fp

import (
	"encoding/binary"

	basefield "github.com/consensys/gnark-crypto/ecc/bls12-381/fr"
)

// A field element representing the basefield of the
// bandersnatch curve
type Element = basefield.Element

// The number of limbs needed to represent this field element
const Limbs = basefield.Limbs

// The number 1 in montgomery form
func One() Element {
	return basefield.One()
}

// The number 0 in montgomery form
func Zero() Element {
	return basefield.Element{}
}

// The number `-1` in montgomery form
func MinusOne() Element {
	m_one := One()
	m_one.Neg(&m_one)
	return m_one
}

// Batch invert multiple field elements using the montgomery trick
func BatchInvert(a []Element) []Element {
	return basefield.BatchInvert(a)
}

// Serialise a field element in little-endian form
func SerialiseLe(z Element) (res [Limbs * 8]byte) {
	_z := z.ToRegular()
	binary.BigEndian.PutUint64(res[24:32], _z[0])
	binary.BigEndian.PutUint64(res[16:24], _z[1])
	binary.BigEndian.PutUint64(res[8:16], _z[2])
	binary.BigEndian.PutUint64(res[0:8], _z[3])
	return
}
