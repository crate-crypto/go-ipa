package banderwagon

import (
	"errors"
	"fmt"
	"io"

	"github.com/crate-crypto/go-ipa/bandersnatch"
	"github.com/crate-crypto/go-ipa/bandersnatch/fp"
	"github.com/crate-crypto/go-ipa/bandersnatch/fr"
)

const (
	sizeCoordinate                      = fp.Limbs * 8
	SerializedAffinePointSize           = 2 * sizeCoordinate
	SerializedAffinePointCompressedSize = sizeCoordinate
)

type (
	SerializedAffinePoint           [SerializedAffinePointSize]byte
	SerializedAffinePointCompressed [SerializedAffinePointCompressedSize]byte
)

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

func (p Element) Bytes() SerializedAffinePoint {
	// Convert underlying point to affine representation
	var affine_representation bandersnatch.PointAffine
	affine_representation.FromProj(&p.inner)

	xbytes := affine_representation.X.Bytes()
	ybytes := affine_representation.Y.Bytes()

	var xy SerializedAffinePoint
	copy(xy[:], xbytes[:])
	copy(xy[sizeCoordinate:], ybytes[:])

	return xy
}

func (p Element) BytesCompressed() SerializedAffinePointCompressed {
	// Convert underlying point to affine representation
	var affine_representation bandersnatch.PointAffine
	affine_representation.FromProj(&p.inner)

	// Serialisation takes the x co-ordinate and multiplies it by the sign of y
	x := affine_representation.X
	if !affine_representation.Y.LexicographicallyLargest() {
		x.Neg(&x)
	}
	return x.Bytes()
}

// Serialises multiple group elements using a batch multi inversion
func ElementsToBytes(elements []*Element) []SerializedAffinePoint {
	// Collect all z co-ordinates
	zs := make([]fp.Element, len(elements))
	for i := 0; i < int(len(elements)); i++ {
		zs[i] = elements[i].inner.Z
	}

	// Invert z co-ordinates
	zInvs := fp.BatchInvert(zs)

	serialised_points := make([]SerializedAffinePoint, len(elements))

	// Multiply x and y by zInv
	for i := 0; i < int(len(elements)); i++ {
		var X fp.Element
		var Y fp.Element

		element := elements[i]

		X.Mul(&element.inner.X, &zInvs[i])
		Y.Mul(&element.inner.Y, &zInvs[i])

		xbytes := X.Bytes()
		ybytes := Y.Bytes()
		copy(serialised_points[i][:], xbytes[:])
		copy(serialised_points[i][sizeCoordinate:], ybytes[:])
	}

	return serialised_points
}

func (p *Element) setBytes(buf []byte, trusted bool) error {
	if len(buf) != SerializedAffinePointSize {
		return fmt.Errorf("invalid serialized element lenght, exp: %d, got: %d", SerializedAffinePointSize, len(buf))
	}

	var x fp.Element
	x.SetBytes(buf[:sizeCoordinate])

	// subgroup check
	if !trusted {
		err := subgroup_check(x)
		if err != nil {
			return err
		}
	}

	var y fp.Element
	y.SetBytes(buf[sizeCoordinate:])

	*p = Element{inner: bandersnatch.PointProj{
		X: x,
		Y: y,
		Z: fp.One(),
	}}

	return nil
}

// Deserialises bytes into a group element
// assuming the input is not trusted
func (p *Element) SetBytes(buf []byte) error {
	return p.setBytes(buf, false)
}

func (p *Element) SetBytesCompressed(buf []byte) error {
	if len(buf) != SerializedAffinePointCompressedSize {
		return fmt.Errorf("invalid serialized element lenght, exp: %d, got: %d", SerializedAffinePointCompressedSize, len(buf))
	}
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
	var y fp.Element
	y.SetBytes(buf[sizeCoordinate:])

	*p = Element{inner: bandersnatch.PointProj{
		X: point.X,
		Y: point.Y,
		Z: fp.One(),
	}}

	return nil
}

// Deserialises bytes into a group element
// assuming the input is trusted
func (p *Element) SetBytesTrusted(buf []byte) error {
	return p.setBytes(buf, true)
}

// computes X/Y
func (p Element) mapToBaseField() fp.Element {
	var res fp.Element
	res.Div(&p.inner.X, &p.inner.Y)
	return res
}

func (p Element) MapToScalarField(res *fr.Element) {
	basefield := p.mapToBaseField()
	baseFieldBytes := basefield.BytesLE()

	res.SetBytesLE(baseFieldBytes[:])
}

// Maps each point to a field element in the scalar field
func MultiMapToScalarField(result []*fr.Element, elements []*Element) {
	if len(result) != len(elements) {
		panic("MultiMapToScalarField expects the result slice to be the same length of elements")
	}

	// Collect all y co-ordinates
	ys := make([]fp.Element, len(elements))
	for i := 0; i < int(len(elements)); i++ {
		ys[i] = elements[i].inner.Y
	}

	// Invert y co-ordinates
	yInvs := fp.BatchInvert(ys)

	// Multiply x by yInv
	for i := 0; i < int(len(elements)); i++ {
		var mappedElement fp.Element

		mappedElement.Mul(&elements[i].inner.X, &yInvs[i])
		byts := mappedElement.BytesLE()
		result[i].SetBytesLE(byts[:])
	}
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
	A := bandersnatch.GetEdwardsCurve().A

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

func (p *Element) AddMixed(p1 *Element, p2 bandersnatch.PointAffine) *Element {
	p.inner.MixedAdd(&p1.inner, &p2)
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

func (p *Element) Normalise() {
	var point_aff bandersnatch.PointAffine
	point_aff.FromProj(&p.inner)

	p.inner.X.Set(&point_aff.X)
	p.inner.Y.Set(&point_aff.Y)
	p.inner.Z.SetOne()
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
