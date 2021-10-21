package ipa

import (
	"fmt"

	"github.com/crate-crypto/go-ipa/bandersnatch"
	"github.com/crate-crypto/go-ipa/bandersnatch/fr"
	"github.com/crate-crypto/go-ipa/common"
)

type IPAConfig struct {
	// Points to commit to the two input vectors
	SRS []bandersnatch.PointAffine

	// Point to commit to the inner product in the inner product argument
	Q bandersnatch.PointAffine

	PrecomputedWeights *PrecomputedWeights
}

// This function creates 256 random generator points where the relative discrete log is
// not known between each generator
// TODO This is not the case at the moment because we currently do not have
// TODO an agreed way to do this, and this is the easiest way to have interoperability
func NewIPASettingsUnsecure() *IPAConfig {

	gen := bandersnatch.GetEdwardsCurve().Base
	srs := make([]bandersnatch.PointAffine, common.POLY_DEGREE)
	for i := uint64(0); i < common.POLY_DEGREE; i++ {
		var tmp fr.Element
		tmp.SetUint64(i)

		srs[i].ScalarMul(&gen, &tmp)
	}

	var tmp fr.Element
	// 1010 is irrelevant here, we just need a random group element
	// in the end, see the comments at the top of this function
	tmp.SetUint64(1010)

	var Q bandersnatch.PointAffine
	Q.ScalarMul(&gen, &tmp)

	return &IPAConfig{
		SRS:                srs,
		Q:                  Q,
		PrecomputedWeights: NewPrecomputedWeights(),
	}
}

func slowMultiScalar(points []bandersnatch.PointAffine, scalars []fr.Element) bandersnatch.PointAffine {
	var result bandersnatch.PointAffine
	result.Identity()
	for i := 0; i < len(points); i++ {
		var tmp bandersnatch.PointAffine
		tmp.ScalarMul(&points[i], &scalars[i])
		result.Add(&result, &tmp)
	}

	return result

}

func Commit(group_elements []bandersnatch.PointAffine, polynomial []fr.Element) bandersnatch.PointAffine {
	if len(group_elements) != len(polynomial) {
		panic(fmt.Sprintf("diff sizes, %d != %d", len(group_elements), len(polynomial)))
	}
	return slowMultiScalar(group_elements, polynomial)
}

// compute the inner product of a and b
func InnerProd(a []fr.Element, b []fr.Element) fr.Element {
	if len(a) != len(b) {
		panic("two vectors must have the same lengths")
	}

	result := fr.Zero()
	for i := 0; i < len(a); i++ {
		var tmp fr.Element

		tmp.Mul(&a[i], &b[i])
		result.Add(&result, &tmp)
	}

	return result
}

// Computes c[i] =a[i] + b[i] * x
// returns c
func fold_scalars(a []fr.Element, b []fr.Element, x fr.Element) []fr.Element {

	if len(a) != len(b) {
		panic("slices not equal length")
	}

	result := make([]fr.Element, len(a))
	for i := 0; i < len(a); i++ {
		var bx fr.Element
		bx.Mul(&x, &b[i])
		result[i].Add(&bx, &a[i])
	}
	return result
}

// Computes c[i] =a[i] + b[i] * x
// returns c
func fold_points(a []bandersnatch.PointAffine, b []bandersnatch.PointAffine, x fr.Element) []bandersnatch.PointAffine {

	if len(a) != len(b) {
		panic("slices not equal length")
	}

	result := make([]bandersnatch.PointAffine, len(a))
	for i := 0; i < len(a); i++ {
		var bx bandersnatch.PointAffine
		bx.ScalarMul(&b[i], &x)
		result[i].Add(&bx, &a[i])
	}
	return result
}
