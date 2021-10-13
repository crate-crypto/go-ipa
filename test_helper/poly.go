package test_helper

import "github.com/crate-crypto/go-ipa/bls"

func TestPoly256(polynomial ...uint64) []bls.Fr {
	n := len(polynomial)
	if len(polynomial) > 256 {
		panic("polynomial cannot exceed 256 coefficients")
	}
	polynomialFr := make([]bls.Fr, 256, 256)
	for i := 0; i < n; i++ {
		bls.AsFr(&polynomialFr[i], polynomial[i])
	}

	pad := 256 - n
	for i := n; i < pad; i++ {
		polynomialFr[i] = bls.ZERO
	}

	return polynomialFr
}
