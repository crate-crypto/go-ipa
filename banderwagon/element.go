package banderwagon

import (
	"errors"
	"io"

	"github.com/crate-crypto/go-ipa/bandersnatch"
	"github.com/crate-crypto/go-ipa/bandersnatch/fp"
	"github.com/crate-crypto/go-ipa/bandersnatch/fr"
)

const sizePointCompressed = fp.Limbs * 8

var Generator = Element{inner: bandersnatch.PointProj{
	X: bandersnatch.GetEdwardsCurve().Base.X,
	Y: bandersnatch.GetEdwardsCurve().Base.Y,
	Z: fp.One(),
}}
var Identity = Element{inner: bandersnatch.PointProj{
	X: fp.Zero(),
	Y: fp.One(),
	Z: fp.One(),
}}

// TODO: Reconsider the API. inner is not a pointer because it does not seem
// TODO to be idiomatic
type Element struct {
	inner bandersnatch.PointProj
}

func (p Element) Bytes() [sizePointCompressed]byte {
	// Convert underlying point to affine representation
	var affine_representation bandersnatch.PointAffine
	affine_representation.FromProj(&p.inner)

	// Serialisation takes the x co-ordinate and multiplies it by the sign of y
	var x = affine_representation.X
	if !affine_representation.Y.LexicographicallyLargest() {
		x.Neg(&x)
	}
	return x.Bytes()
}

func (p *Element) SetBytes(buf []byte) error {
	// set the buffer which is x * SignY as X
	var x fp.Element
	x.SetBytes(buf)
	point := bandersnatch.GetPointFromX(&x, true)
	if point == nil {
		return errors.New("point is not on the curve")
	}

	// subgroup check
	err := subgroup_check(x)
	if err != nil {
		return err
	}

	*p = Element{inner: bandersnatch.PointProj{
		X: point.X,
		Y: point.Y,
		Z: fp.One(),
	}}

	return nil
}

// computes X/Y
func (p Element) mapToBaseField() fp.Element {

	var res fp.Element
	res.Div(&p.inner.X, &p.inner.Y)
	return res
}

// computes X/Y and returns the byte representation
func (p Element) MapToBaseFieldBytes() [sizePointCompressed]byte {
	basefield := p.mapToBaseField()
	return basefield.BytesLE()
}

// TODO: change this to not use pointers
func (p *Element) Equal(other *Element) bool {
	x1 := p.inner.X
	y1 := p.inner.Y

	x2 := other.inner.X
	y2 := other.inner.Y

	var lhs fp.Element
	var rhs fp.Element

	lhs.Mul(&x1, &y2)
	rhs.Mul(&y1, &x2)

	x1_zero := x1.IsZero()
	y1_zero := y1.IsZero()
	if x1_zero && y1_zero {
		return false
	}
	x2_zero := x2.IsZero()
	y2_zero := y2.IsZero()
	if x2_zero && y2_zero {
		return false
	}
	return lhs.Equal(&rhs)
}

func subgroup_check(x fp.Element) error {
	var res, one, ax_sq fp.Element
	one.SetOne()
	var A = bandersnatch.GetEdwardsCurve().A

	// 1 - ax^2
	ax_sq.Square(&x)
	ax_sq.Mul(&ax_sq, &A)
	res.Sub(&one, &ax_sq)

	if res.Legendre() <= 0 {
		return errors.New("point is not in the correct subgroup")
	}

	return nil
}

func (p *Element) Identity() *Element {
	*p = Identity
	return p
}
func (p *Element) Double(p1 *Element) *Element {
	p.inner.Double(&p1.inner)
	return p
}
func (p *Element) Add(p1, p2 *Element) *Element {
	p.inner.Add(&p1.inner, &p2.inner)
	return p
}
func (p *Element) Sub(p1, p2 *Element) *Element {
	var neg_p2 Element
	neg_p2.Neg(p2)

	return p.Add(p1, &neg_p2)

}

func (p *Element) IsOnCurve() bool {
	// TODO: use projective curve equation to check
	var point_aff bandersnatch.PointAffine
	point_aff.FromProj(&p.inner)
	return point_aff.IsOnCurve()
}
func (p *Element) Set(p1 *Element) *Element {
	p.inner.X.Set(&p1.inner.X)
	p.inner.Y.Set(&p1.inner.Y)
	p.inner.Z.Set(&p1.inner.Z)
	return p
}

func (p *Element) Neg(p1 *Element) *Element {
	p.inner.Neg(&p1.inner)
	return p
}
func (p *Element) ScalarMul(p1 *Element, scalar_mont *fr.Element) *Element {
	p.inner.ScalarMul(&p1.inner, scalar_mont)
	return p
}

// This method is unsafe for two reasons:
// - It does not check that the point is indeed in the group
// - The serialisation method being used is for bandersnatch and not banderwagon
// Only use this method if you point is trusted and it has been serialised using
// UnsafeWriteUncompressedPoint.
// You can use this method to write points to disk that will not be sent to others
//
// we could increase storage by 2x and save CPU time by serialising the projective point
func UnsafeReadUncompressedPoint(r io.Reader) *Element {

	affine_point := bandersnatch.ReadUncompressedPoint(r)
	var proj_repr bandersnatch.PointProj
	proj_repr.FromAffine(&affine_point)

	return &Element{
		inner: proj_repr,
	}
}

// Writes an uncompressed affine point to an io.Writer
func (element *Element) UnsafeWriteUncompressedPoint(w io.Writer) (int, error) {

	// Convert underlying point to affine representation
	var p bandersnatch.PointAffine
	p.FromProj(&element.inner)
	return p.WriteUncompressedPoint(w)
}
