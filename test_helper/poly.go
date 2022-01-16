package test_helper

import (
	"encoding/hex"
	"testing"

	"github.com/crate-crypto/go-ipa/bandersnatch/fr"
	"github.com/crate-crypto/go-ipa/banderwagon"
)

func TestPoly256(polynomial ...uint64) []fr.Element {
	n := len(polynomial)
	if len(polynomial) > 256 {
		panic("polynomial cannot exceed 256 coefficients")
	}
	polynomialFr := make([]fr.Element, 256)
	for i := 0; i < n; i++ {
		polynomialFr[i].SetUint64(polynomial[i])
	}

	pad := 256 - n
	for i := n; i < pad; i++ {
		polynomialFr[i] = fr.Zero()
	}

	return polynomialFr
}

func PointEqualHex(t *testing.T, point banderwagon.Element, expected string) {
	point_bytes := point.Bytes()
	got := hex.EncodeToString(point_bytes[:])
	if got != expected {
		t.Fatalf("point does not equal expected hex value, expected %s got %s", expected, got)
	}
}
func ScalarEqualHex(t *testing.T, scalar fr.Element, expected string) {
	scalar_bytes := scalar.BytesLE()
	got := hex.EncodeToString(scalar_bytes[:])
	if got != expected {
		t.Fatalf("scalar does not equal expected hex value, expected %s got %s", expected, got)
	}
}
