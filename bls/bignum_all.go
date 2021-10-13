package bls

import (
	"encoding/binary"
	"fmt"
	"math/big"
)

func (fr *Fr) String() string {
	return FrStr(fr)
}

// Checks if a *little endian* uint256 is within the Fr modulus
func ValidFr(val [32]byte) bool {
	if val[31] == 0 { // common to just use bytes31
		return true
	}
	// modulus-1 == 00000000fffffffffe5bfeff02a4bd5305d8a10908d83933487d9d2953a7ed73  (little endian)
	// 73eda753299d7d483339d80809a1d80553bda402fffe5bfeffffffff00000000 (big endian)
	// 73eda753299d7d48 3339d80809a1d805 53bda402fffe5bfe ffffffff00000000
	if a := binary.LittleEndian.Uint64(val[24:32]); a > 0x73eda753299d7d48 {
		return false
	} else if a < 0x73eda753299d7d48 {
		return true
	}
	if b := binary.LittleEndian.Uint64(val[16:24]); b > 0x3339d80809a1d805 {
		return false
	} else if b < 0x3339d80809a1d805 {
		return true
	}
	if c := binary.LittleEndian.Uint64(val[8:16]); c > 0x53bda402fffe5bfe {
		return false
	} else if c < 0x53bda402fffe5bfe {
		return true
	}
	return binary.LittleEndian.Uint64(val[0:8]) <= 0xffffffff00000000
}

// Code below -  Taken from Go-verkle
var modulus *big.Int

func init() {
	var ok bool
	modulus, ok = big.NewInt(0).SetString("52435875175126190479447740508185965837690552500527637822603658699938581184513", 10)
	if !ok {
		panic("could not get modulus")
	}

}

func ReduceBytesToFr(out *Fr, h []byte) {

	// Apply modulus
	x := big.NewInt(0).SetBytes(h)
	x.Mod(x, modulus)

	// FrFrom32 requires an array in little endian order
	// where the array represents a number reduced modulo the modulus
	//
	// BigInt returns a byte slice in big endian order
	// Where the slice represent a number reduced modulo the modulus
	//
	// The following lines, switch the endian and copy the byte slice into
	// an array
	var processed [32]byte
	converted := x.Bytes()
	for i := 0; i < len(converted); i++ {
		processed[i] = converted[len(converted)-i-1]
	}

	if !FrFrom32(out, processed) {
		panic(fmt.Sprintf("invalid Fr number %x", processed))
	}
}
