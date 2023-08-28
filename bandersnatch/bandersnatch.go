package bandersnatch

import (
	"io"

	gnarkbandersnatch "github.com/consensys/gnark-crypto/ecc/bls12-381/bandersnatch"
	"github.com/crate-crypto/go-ipa/bandersnatch/fp"
)

var CurveParams = gnarkbandersnatch.GetEdwardsCurve()

type PointAffine = gnarkbandersnatch.PointAffine
type PointProj = gnarkbandersnatch.PointProj

// Reads an uncompressed affine point
// Point is not guaranteed to be in the prime subgroup
func ReadUncompressedPoint(r io.Reader) PointAffine {
	var xy = make([]byte, 64)
	n, err := r.Read(xy[:32])
	if err != nil {
		panic("error reading bytes")
	}
	if n != 32 {
		panic("did not read enough bytes")
	}
	n, err = r.Read(xy[32:])
	if err != nil {
		panic("error reading bytes")
	}
	if n != 32 {
		panic("did not read enough bytes")
	}

	var x_fp = fp.Element{}
	x_fp.SetBytes(xy[:32])
	var y_fp = fp.Element{}
	y_fp.SetBytes(xy[32:])

	return PointAffine{
		X: x_fp,
		Y: y_fp,
	}
}

// Writes an uncompressed affine point to an io.Writer
func WriteUncompressedPoint(w io.Writer, p *PointAffine) (int, error) {
	x_bytes := p.X.Bytes()
	y_bytes := p.Y.Bytes()
	n1, err := w.Write(x_bytes[:])
	if err != nil {
		return n1, err
	}
	n2, err := w.Write(y_bytes[:])
	total_bytes_written := n1 + n2
	if err != nil {
		return total_bytes_written, err
	}
	return total_bytes_written, nil
}

func GetPointFromX(x *fp.Element, choose_largest bool) *PointAffine {
	y := computeY(x, choose_largest)
	if y == nil { // not a square
		return nil
	}
	return &PointAffine{X: *x, Y: *y}
}

// ax^2 + y^2 = 1 + dx^2y^2
// ax^2 -1 = dx^2y^2 - y^2
// ax^2 -1 = y^2(dx^2 -1)
// ax^2 - 1 / (dx^2 - 1) = y^2
func computeY(x *fp.Element, choose_largest bool) *fp.Element {
	var one, num, den, y fp.Element
	one.SetOne()
	num.Square(x)                 // x^2
	den.Mul(&num, &CurveParams.D) //dx^2
	den.Sub(&den, &one)           //dx^2 - 1

	num.Mul(&num, &CurveParams.A) // ax^2
	num.Sub(&num, &one)           // ax^2 - 1
	y.Div(&num, &den)
	sqrtY := fp.SqrtPrecomp(&y)

	// If the square root does not exist, then the Sqrt method returns nil
	// and leaves the receiver unchanged.
	// Note the fact that it leaves the receiver unchanged, means we do not return &y
	if sqrtY == nil {
		return nil
	}

	// Choose between `y` and it's negation
	is_largest := sqrtY.LexicographicallyLargest()
	if choose_largest == is_largest {
		return sqrtY
	} else {
		return sqrtY.Neg(sqrtY)
	}
}

func GetIdentityProj() PointProj {
	return PointProj{
		X: fp.Zero(),
		Y: fp.One(),
		Z: fp.One(),
	}
}
