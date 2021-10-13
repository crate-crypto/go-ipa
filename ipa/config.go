package ipa

import (
	"fmt"

	"github.com/crate-crypto/go-ipa/bls"
	"github.com/crate-crypto/go-ipa/common"
)

type IPAConfig struct {
	// Points to commit to the two input vectors
	SRS []bls.G1Point

	// Point to commit to the inner product in the inner product argument
	Q bls.G1Point

	PrecomputedWeights *PrecomputedWeights
}

// This function creates 256 random generator points where the relative discrete log is
// not known between each generator
// TODO This is not the case at the moment because we currently do not have
// TODO an agreed way to do this, and this is the easiest way to have interoperability
func NewIPASettingsUnsecure() *IPAConfig {

	srs := make([]bls.G1Point, common.POLY_DEGREE)
	for i := uint64(0); i < common.POLY_DEGREE; i++ {
		tmp := bls.Fr{}
		bls.AsFr(&tmp, i)

		bls.MulG1(&srs[i], &bls.GenG1, &tmp)
	}

	tmp := bls.Fr{}
	// 1010 is irrelevant here, we just need a random group element
	// in the end, see the comments at the top of this function
	bls.AsFr(&tmp, 1010)
	Q := bls.G1Point{}
	bls.MulG1(&Q, &bls.GenG1, &tmp)

	return &IPAConfig{
		SRS:                srs,
		Q:                  Q,
		PrecomputedWeights: NewPrecomputedWeights(),
	}
}

func Commit(group_elements []bls.G1Point, polynomial []bls.Fr) bls.G1Point {
	if len(group_elements) != len(polynomial) {
		panic(fmt.Sprintf("diff sizes, %d != %d", len(group_elements), len(polynomial)))
	}
	return *bls.LinCombG1(group_elements, polynomial)
}

// compute the inner product of a and b
func InnerProd(a []bls.Fr, b []bls.Fr) bls.Fr {
	if len(a) != len(b) {
		panic("two vectors must have the same lengths")
	}

	result := bls.ZERO
	for i := 0; i < len(a); i++ {
		tmp := bls.Fr{}

		bls.MulModFr(&tmp, &a[i], &b[i])
		bls.AddModFr(&result, &result, &tmp)
	}

	return result
}

// Computes c[i] =a[i] + b[i] * x
// returns c
func fold_scalars(a []bls.Fr, b []bls.Fr, x bls.Fr) []bls.Fr {

	if len(a) != len(b) {
		panic("slices not equal length")
	}

	result := make([]bls.Fr, len(a))
	for i := 0; i < len(a); i++ {
		bx := bls.Fr{}
		bls.MulModFr(&bx, &x, &b[i])
		bls.AddModFr(&result[i], &bx, &a[i])
	}
	return result
}

// Computes c[i] =a[i] + b[i] * x
// returns c
func fold_points(a []bls.G1Point, b []bls.G1Point, x bls.Fr) []bls.G1Point {

	if len(a) != len(b) {
		panic("slices not equal length")
	}

	result := make([]bls.G1Point, len(a))
	for i := 0; i < len(a); i++ {
		bx := bls.G1Point{}
		bls.MulG1(&bx, &b[i], &x)
		bls.AddG1(&result[i], &bx, &a[i])
	}
	return result
}
