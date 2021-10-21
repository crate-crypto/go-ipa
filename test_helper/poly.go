package test_helper

import "github.com/crate-crypto/go-ipa/bandersnatch/fr"

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
