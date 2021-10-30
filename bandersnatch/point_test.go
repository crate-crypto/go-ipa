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
