package bandersnatch

import (
	"testing"
)

func TestElementBytes(t *testing.T) {

	gen := GetEdwardsCurve().Base
	ok := gen.IsInPrimeSubgroup()
	if !ok {
		panic("point should have prime order")
	}
}
func TestSerDer(t *testing.T) {

	gen := GetEdwardsCurve().Base
	byts := gen.Bytes()
	var p = &PointAffine{}
	p.SetBytes(byts[:])
	if !p.Equal(&gen) {
		panic("bug in serialisaion ")
	}
}
