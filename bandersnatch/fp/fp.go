package fp

import (
	"encoding/binary"

	basefield "github.com/consensys/gnark-crypto/ecc/bls12-381/fr"
)

type Element = basefield.Element

const Limbs = basefield.Limbs

func One() Element {
	return basefield.One()
}
func Zero() Element {
	return basefield.Element{}
}

func MinusOne() Element {
	m_one := One()
	m_one.Neg(&m_one)
	return m_one
}

func BatchInvert(a []Element) []Element {
	return basefield.BatchInvert(a)
}

func SerialiseLe(z Element) (res [Limbs * 8]byte) {
	_z := z.ToRegular()
	binary.BigEndian.PutUint64(res[24:32], _z[0])
	binary.BigEndian.PutUint64(res[16:24], _z[1])
	binary.BigEndian.PutUint64(res[8:16], _z[2])
	binary.BigEndian.PutUint64(res[0:8], _z[3])
	return
}
