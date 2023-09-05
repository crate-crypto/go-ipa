package ipa

import (
	"fmt"
	"testing"

	"github.com/crate-crypto/go-ipa/bandersnatch/fr"
	"github.com/crate-crypto/go-ipa/common"
	"github.com/crate-crypto/go-ipa/test_helper"
)

func TestAbsInt(t *testing.T) {
	t.Parallel()

	abs, is_neg := absInt(-100)
	if abs != 100 {
		t.Fatal("absolute value should be 100")
	}
	if !is_neg {
		t.Fatal("input value was negative")
	}

	abs, is_neg = absInt(250)
	if abs != 250 {
		t.Fatal("absolute value should be 250")
	}
	if is_neg {
		t.Fatal("input value was positive")
	}

}

// The interpolation is only needed for tests,
// but we need to make sure it is correct.
// abstractly, you can think of it as getting the
// associated polynomial in coefficient form
// for a bunch of points
func TestBasicInterpolate(t *testing.T) {
	t.Parallel()

	// These two points define the polynomial y = X
	// Once we interpolate the polynomial, any point
	// we evalate the polynomial at, should return the point
	point_a := Point{
		x: fr.Zero(),
		y: fr.Zero(),
	}
	point_b := Point{
		x: fr.One(),
		y: fr.One(),
	}
	points := Points{point_a, point_b}
	poly := points.interpolate(t)

	var rand_fr fr.Element
	_, err := rand_fr.SetRandom()
	if err != nil {
		t.Fatal("could not generate a random element")
	}
	result := poly.evaluate(rand_fr)

	if !result.Equal(&rand_fr) {
		t.Fatal("result should be rand_fr, because the polynomial should be the identity polynomial")
	}
}

func TestPolyDiv(t *testing.T) {
	t.Parallel()

	one := fr.One()
	minus_one := fr.MinusOne()

	var minus_two fr.Element
	minus_two.Sub(&minus_one, &one)

	var minus_three fr.Element
	minus_three.Sub(&minus_two, &one)

	var two fr.Element
	two.SetUint64(2)

	// (X-1)(X-2) =  2 - 3X + X^2
	poly_coeff_numerator := []fr.Element{two, minus_three, one}

	// - 1 + X
	poly_coeff_denominator := []fr.Element{minus_one, one}
	quotient, rem, ok := pld(poly_coeff_numerator, poly_coeff_denominator)
	if !ok {
		t.Fatal("poly div failed")
	}

	for _, x := range rem {
		if !x.IsZero() {
			fmt.Printf("%v", x)
			t.Fatal("remainder should be zero")
		}
	}

	// The quotient should be X - 2, lets evaluate it and check this is correct
	var rand_fr fr.Element
	_, err := rand_fr.SetRandom()
	if err != nil {
		t.Fatal("could not get randomness")
	}
	got := Poly(quotient).evaluate(rand_fr)

	var expected fr.Element
	expected.Add(&rand_fr, &minus_two)

	if !expected.Equal(&got) {
		t.Fatal("quotient is not correct")
	}
}

func TestComputeBarycentricCoefficients(t *testing.T) {
	t.Parallel()

	var point_outside_domain fr.Element
	point_outside_domain.SetUint64(3400)

	lagrange_values := test_helper.TestPoly256(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

	preComp := NewPrecomputedWeights()
	bar_coeffs := preComp.ComputeBarycentricCoefficients(point_outside_domain)
	got, err := InnerProd(lagrange_values, bar_coeffs)
	if err != nil {
		t.Fatalf("inner product failed: %v", err)
	}
	expected := evalOutsideDomain(preComp, lagrange_values, point_outside_domain)

	points := Points{}
	for k := 0; k < 256; k++ {
		var x fr.Element
		x.SetUint64(uint64(k))

		point := Point{
			x: x,
			y: lagrange_values[k],
		}
		points = append(points, point)
	}
	poly_coeff := points.interpolate(t)
	expected2 := poly_coeff.evaluate(point_outside_domain)

	if !expected2.Equal(&expected) {
		t.Fatal("problem with barycentric weights")
	}

	if !expected2.Equal(&got) {
		t.Fatal("problem with inner product")
	}
}

// another way to evaluate a point outside of the domain
// TODO, we can probably remove this and just interpolate and evaluate in tests
func evalOutsideDomain(preComp *PrecomputedWeights, f []fr.Element, point fr.Element) fr.Element {

	pointMinusDomain := make([]fr.Element, domainSize)
	for i := 0; i < domainSize; i++ {

		var i_fr fr.Element
		i_fr.SetUint64(uint64(i))
		pointMinusDomain[i].Sub(&point, &i_fr)
		pointMinusDomain[i].Inverse(&pointMinusDomain[i])
	}

	summand := fr.Zero()
	for x_i := 0; x_i < len(pointMinusDomain); x_i++ {
		weight := preComp.getInverseBarycentricWeight(x_i)
		var term fr.Element
		term.Mul(&weight, &f[x_i])
		term.Mul(&term, &pointMinusDomain[x_i])
		summand.Add(&summand, &term)
	}

	a_z := fr.One()
	for i := 0; i < domainSize; i++ {

		var i_fr fr.Element
		i_fr.SetUint64(uint64(i))

		var tmp fr.Element
		tmp.Sub(&point, &i_fr)
		a_z.Mul(&a_z, &tmp)
	}
	a_z.Mul(&a_z, &summand)

	return a_z
}

func TestDivideOnDomain(t *testing.T) {
	t.Parallel()

	// First lets define the polynomial (X-1)(X+1)(X)^253
	eval_f := func(x fr.Element) fr.Element {
		// f is (X-1)(X+1)(X^253)
		var tmp_a fr.Element
		one := fr.One()
		tmp_a.Sub(&x, &one)

		var tmp_b fr.Element
		tmp_b.Add(&x, &one)

		tmp_c := one
		for i := 0; i < 253; i++ {
			tmp_c.Mul(&tmp_c, &x)
		}

		var res fr.Element
		res.Mul(&tmp_a, &tmp_b)
		res.Mul(&res, &tmp_c)

		return res
	}

	points := Points{}
	for k := 0; k < 256; k++ {
		var x fr.Element
		x.SetUint64(uint64(k))

		point := Point{
			x: x,
			y: eval_f(x),
		}
		points = append(points, point)
	}

	numerator_poly_coeff := points.interpolate(t)

	// X - 1 (This is chosen because we know it divides perfectly into the numerator)
	denom_poly_coeff := Poly{fr.MinusOne(), fr.One()}

	preComp := NewPrecomputedWeights()
	index := uint8(1) // One, because this is the same as dividing by X - 1, note that at x=1, we have a root

	// We need just the `y` values from points (ie just the evaluations)
	evaluations := make([]fr.Element, 256)
	for i, p := range points {
		evaluations[i] = p.y
	}
	if !evaluations[index].IsZero() {
		t.Fatal("dividing on the domain with `index` will not have a remainder of zero")
	}
	quotientLag := preComp.DivideOnDomain(index, evaluations)

	// Note quotientLag is the result of dividing the polynomial by X - 1, but in lagrange form
	// we should get the same result, if we do this is coefficient form

	expected_quotient_coeff, rem, ok := pld(numerator_poly_coeff, denom_poly_coeff)
	if !ok {
		t.Fatal("polynomial division failed")
	}

	// Remainder should be zero
	for _, r := range rem {
		if !r.IsZero() {
			t.Fatal("remainder should be zero")
		}
	}

	// Lets check that the expected value is correct for good measure, we can do this by
	// checking it's roots, since we divided by X - 1, the new polynomial should be:
	// (X+1)(X^253)
	should_be_zero := Poly(expected_quotient_coeff).evaluate(fr.MinusOne())
	if !should_be_zero.IsZero() {
		t.Fatal("-1 is not a root, but it should be")
	}
	should_be_zero = Poly(expected_quotient_coeff).evaluate(fr.One())
	if should_be_zero.IsZero() {
		t.Fatal("1 is a root, but it should not be, because we just divided by X - 1")
	}
	should_be_zero = Poly(expected_quotient_coeff).evaluate(fr.Zero())
	if !should_be_zero.IsZero() {
		t.Fatal("0 is not a root, but it should be")
	}

	// Lets convert quotientLag to coefficient form
	var quotientLagEvaluations Points
	for x, y := range quotientLag {
		var x_fr fr.Element
		x_fr.SetUint64(uint64(x))

		point := Point{
			x: x_fr,
			y: y,
		}
		quotientLagEvaluations = append(quotientLagEvaluations, point)
	}
	got_quotient_coeff := quotientLagEvaluations.interpolate(t)

	var rand_fr fr.Element
	_, err := rand_fr.SetRandom()
	if err != nil {
		t.Fatal("could not get randomness")
	}
	got_res := got_quotient_coeff.evaluate(rand_fr)
	expected_res := Poly(expected_quotient_coeff).evaluate(rand_fr)

	if !expected_res.Equal(&got_res) {
		t.Fatal("polynomials are different")
	}

	top_term := got_quotient_coeff[len(got_quotient_coeff)-1]
	if !top_term.IsZero() {
		t.Fatal("top term is not zero, degree is incorrect")
	}
	got_quotient_coeff = got_quotient_coeff[:len(got_quotient_coeff)-1]

	if len(expected_quotient_coeff) != len(got_quotient_coeff) {
		t.Fatalf("expected quotiend coefficients %d != got quotiend coefficients %d", len(expected_quotient_coeff), len(got_quotient_coeff))
	}

	for i := 0; i < len(expected_quotient_coeff); i++ {

		if !got_quotient_coeff[i].Equal(&expected_quotient_coeff[i]) {
			t.Fatal("polynomials are not the same")
		}
	}
}

type Point struct {
	x fr.Element
	y fr.Element
}

type Points []Point

type Poly []fr.Element

func (poly Poly) evaluate(point fr.Element) fr.Element {
	powers := common.PowersOf(point, len(poly))
	total := fr.Zero()
	for i := 0; i < len(poly); i++ {
		var tmp fr.Element
		tmp.Mul(&powers[i], &poly[i])
		total.Add(&total, &tmp)
	}
	return total
}
func (points Points) interpolate(t *testing.T) Poly {
	one := fr.One()
	zero := fr.Zero()

	max_degree_plus_one := len(points)
	if max_degree_plus_one < 2 {
		t.Fatal("should interpolate for degree >= 1")
	}
	coeffs := make([]fr.Element, max_degree_plus_one)

	for k := 0; k < len(points); k++ {
		point := points[k]
		x_k := point.x
		y_k := point.y

		contribution := make([]fr.Element, max_degree_plus_one)
		denominator := fr.One()
		max_contribution_degree := 0
		for j := 0; j < len(points); j++ {
			point := points[j]
			x_j := point.x
			if j == k {
				continue
			}

			diff := x_k
			diff.Sub(&diff, &x_j)
			denominator.Mul(&denominator, &diff)
			if max_contribution_degree == 0 {

				max_contribution_degree = 1
				contribution[0].Sub(&contribution[0], &x_j)
				contribution[1].Add(&contribution[1], &one)

			} else {
				var mul_by_minus_x_j []fr.Element
				for _, el := range contribution {
					tmp := el
					tmp.Mul(&tmp, &x_j)
					tmp.Sub(&zero, &tmp)
					mul_by_minus_x_j = append(mul_by_minus_x_j, tmp)
				}
				contribution = append([]fr.Element{zero}, contribution...)
				contribution = truncate(contribution, max_degree_plus_one)
				if max_degree_plus_one != len(mul_by_minus_x_j) {
					t.Fatal("malformed mul_by_minus_x_j")
				}
				for i := 0; i < len(contribution); i++ {
					other := mul_by_minus_x_j[i]
					contribution[i].Add(&contribution[i], &other)
				}

			}

		}
		denominator.Inverse(&denominator)
		if denominator.IsZero() {
			t.Fatal("denominator should not be zero")
		}
		for i := 0; i < len(contribution); i++ {
			tmp := contribution[i]
			tmp.Mul(&tmp, &denominator)
			tmp.Mul(&tmp, &y_k)
			coeffs[i].Add(&coeffs[i], &tmp)
		}

	}
	return coeffs
}

func truncate(s []fr.Element, to int) []fr.Element {
	return s[:to]
}

func degree(p []fr.Element) int {
	for d := len(p) - 1; d >= 0; d-- {

		if !p[d].IsZero() {
			return d
		}
	}
	return -1
}

// Taken from https://rosettacode.org/wiki/Polynomial_long_division#Go
func pld(nn, dd []fr.Element) (q, r []fr.Element, ok bool) {
	if degree(dd) < 0 {
		return
	}
	nn = append(r, nn...)
	if degree(nn) >= degree(dd) {
		q = make([]fr.Element, degree(nn)-degree(dd)+1)
		for degree(nn) >= degree(dd) {
			d := make([]fr.Element, degree(nn)+1)
			copy(d[degree(nn)-degree(dd):], dd)
			var tmp fr.Element
			tmp.Div(&nn[degree(nn)], &d[degree(d)])
			q[degree(nn)-degree(dd)] = tmp
			for i := range d {
				d[i].Mul(&d[i], &q[degree(nn)-degree(dd)])
				nn[i].Sub(&nn[i], &d[i])
			}
		}
	}
	return q, nn, true
}
