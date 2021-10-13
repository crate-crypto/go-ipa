package ipa

import (
	"fmt"
	"testing"

	"github.com/crate-crypto/go-ipa/bls"
	"github.com/crate-crypto/go-ipa/common"
	"github.com/crate-crypto/go-ipa/test_helper"
)

func TestAbsInt(testing *testing.T) {
	abs, is_neg := absInt(-100)
	if abs != 100 {
		panic("absolute value should be 100")
	}
	if !is_neg {
		panic("input value was negative")
	}

	abs, is_neg = absInt(250)
	if abs != 250 {
		panic("absolute value should be 250")
	}
	if is_neg {
		panic("input value was positive")
	}

}

// The interpolation is only needed for tests,
// but we need to make sure it is correct.
// abstractly, you can think of it as getting the
// associated polynomial in coefficient form
// for a bunch of points
func TestBasicInterpolate(testing *testing.T) {

	// These two points define the polynomial y = X
	// Once we interpolate the polynomial, any point
	// we evalate the polynomial at, should return the point
	point_a := Point{
		x: bls.ZERO,
		y: bls.ZERO,
	}
	point_b := Point{
		x: bls.ONE,
		y: bls.ONE,
	}
	points := Points{point_a, point_b}
	poly := points.interpolate()

	rand_fr := bls.RandomFr()
	result := poly.evaluate(*rand_fr)
	if !bls.EqualFr(&result, rand_fr) {
		panic("result should be rand_fr, because the polynomial should be the identity polynomial")
	}
}

func TestPolyDiv(testing *testing.T) {

	minus_one := bls.MODULUS_MINUS1

	minus_two := bls.Fr{}
	bls.SubModFr(&minus_two, &minus_one, &bls.ONE)

	minus_three := bls.Fr{}
	bls.SubModFr(&minus_three, &minus_two, &bls.ONE)

	// (X-1)(X-2) =  2 - 3X + X^2
	poly_coeff_numerator := []bls.Fr{bls.TWO, minus_three, bls.ONE}

	// - 1 + X
	poly_coeff_denominator := []bls.Fr{minus_one, bls.ONE}
	quotient, rem, ok := pld(poly_coeff_numerator, poly_coeff_denominator)
	if !ok {
		panic("poly div failed")
	}

	for _, x := range rem {
		if !bls.EqualZero(&x) {
			panic("remainder should be zero")
		}
	}

	// The quotient should be X - 2, lets evaluate it and check this is correct
	rand_fr := bls.RandomFr()
	got := Poly(quotient).evaluate(*rand_fr)

	expected := bls.Fr{}
	bls.AddModFr(&expected, rand_fr, &minus_two)
	if !bls.EqualFr(&expected, &got) {
		panic("quotient is not correct")
	}
}

func TestComputeBarycentricCoefficients(testing *testing.T) {
	point_outside_domain := bls.Fr{}
	bls.AsFr(&point_outside_domain, 3400)

	lagrange_values := test_helper.TestPoly256(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

	preComp := NewPrecomputedWeights()
	bar_coeffs := preComp.ComputeBarycentricCoefficients(point_outside_domain)
	got := InnerProd(lagrange_values, bar_coeffs)
	expected := evalOutsideDomain(preComp, lagrange_values, point_outside_domain)

	points := Points{}
	for k := 0; k < 256; k++ {
		x := bls.Fr{}
		bls.AsFr(&x, uint64(k))
		point := Point{
			x: x,
			y: lagrange_values[k],
		}
		points = append(points, point)
	}
	poly_coeff := points.interpolate()
	expected2 := poly_coeff.evaluate(point_outside_domain)

	if !bls.EqualFr(&expected2, &expected) {
		panic("problem with barycentric weights")
	}
	if !bls.EqualFr(&expected2, &got) {
		panic("problem with barycentric weights22")
	}
}

// another way to evaluate a point outside of the domain
// TODO, we can probably remove this and just interpolate and evaluate in tests
func evalOutsideDomain(preComp *PrecomputedWeights, f []bls.Fr, point bls.Fr) bls.Fr {

	pointMinusDomain := make([]bls.Fr, DOMAIN_SIZE)
	for i := 0; i < DOMAIN_SIZE; i++ {

		i_fr := bls.Fr{}
		bls.AsFr(&i_fr, uint64(i))

		bls.SubModFr(&pointMinusDomain[i], &point, &i_fr)
		bls.InvModFr(&pointMinusDomain[i], &pointMinusDomain[i])
	}

	summand := bls.ZERO
	for x_i := 0; x_i < len(pointMinusDomain); x_i++ {
		weight := preComp.getInverseBarycentricWeight(x_i)
		term := bls.Fr{}
		bls.MulModFr(&term, &weight, &f[x_i])
		bls.MulModFr(&term, &term, &pointMinusDomain[x_i])

		bls.AddModFr(&summand, &summand, &term)
	}

	a_z := bls.ONE
	for i := 0; i < DOMAIN_SIZE; i++ {

		i_fr := bls.Fr{}
		bls.AsFr(&i_fr, uint64(i))

		tmp := bls.Fr{}
		bls.SubModFr(&tmp, &point, &i_fr)

		bls.MulModFr(&a_z, &a_z, &tmp)
	}
	bls.MulModFr(&a_z, &a_z, &summand)

	return a_z
}

func TestDivideOnDomain(testing *testing.T) {
	// First lets define the polynomial (X-1)(X+1)(X)^253
	eval_f := func(x bls.Fr) bls.Fr {
		// f is (X-1)(X+1)(X^253)
		tmp_a := bls.Fr{}
		bls.SubModFr(&tmp_a, &x, &bls.ONE)
		tmp_b := bls.Fr{}
		bls.AddModFr(&tmp_b, &x, &bls.ONE)

		tmp_c := bls.ONE
		for i := 0; i < 253; i++ {
			bls.MulModFr(&tmp_c, &tmp_c, &x)
		}

		res := bls.Fr{}
		bls.MulModFr(&res, &tmp_a, &tmp_b)
		bls.MulModFr(&res, &res, &tmp_c)
		return res
	}

	points := Points{}
	for k := 0; k < 256; k++ {
		x := bls.Fr{}
		bls.AsFr(&x, uint64(k))
		point := Point{
			x: x,
			y: eval_f(x),
		}
		points = append(points, point)
	}

	numerator_poly_coeff := points.interpolate()

	// X - 1 (This is chosen because we know it divides perfectly into the numerator)
	denom_poly_coeff := Poly{bls.MODULUS_MINUS1, bls.ONE}

	preComp := NewPrecomputedWeights()
	index := uint8(1) // One, because this is the same as dividing by X - 1, note that at x=1, we have a root

	// We need just the `y` values from points (ie just the evaluations)
	evaluations := make([]bls.Fr, 256)
	for i, p := range points {
		evaluations[i] = p.y
	}
	if !bls.EqualZero(&evaluations[index]) {
		panic("dividing on the domain with `index` will not have a remainder of zero")
	}
	quotientLag := preComp.DivideOnDomain(index, evaluations)

	// Note quotientLag is the result of dividing the polynomial by X - 1, but in lagrange form
	// we should get the same result, if we do this is coefficient form

	expected_quotient_coeff, rem, ok := pld(numerator_poly_coeff, denom_poly_coeff)
	if !ok {
		panic("polynomial division failed")
	}

	// Remainder should be zero
	for _, r := range rem {
		if !bls.EqualZero(&r) {
			panic("remainder should be zero")
		}
	}

	// Lets check that the expected value is correct for good measure, we can do this by
	// checking it's roots, since we divided by X - 1, the new polynomial should be:
	// (X+1)(X^253)
	should_be_zero := Poly(expected_quotient_coeff).evaluate(bls.MODULUS_MINUS1)
	if !bls.EqualZero(&should_be_zero) {
		panic("-1 is not a root, but it should be")
	}
	should_be_zero = Poly(expected_quotient_coeff).evaluate(bls.ONE)
	if bls.EqualZero(&should_be_zero) {
		panic("1 is a root, but it should not be, because we just divided by X - 1")
	}
	should_be_zero = Poly(expected_quotient_coeff).evaluate(bls.ZERO)
	if !bls.EqualZero(&should_be_zero) {
		panic("0 is not a root, but it should be")
	}

	// Lets convert quotientLag to coefficient form
	var quotientLagEvaluations Points
	for x, y := range quotientLag {
		x_fr := bls.Fr{}
		bls.AsFr(&x_fr, uint64(x))

		point := Point{
			x: x_fr,
			y: y,
		}
		quotientLagEvaluations = append(quotientLagEvaluations, point)
	}
	got_quotient_coeff := quotientLagEvaluations.interpolate()

	rand_fr := bls.RandomFr()
	got_res := got_quotient_coeff.evaluate(*rand_fr)
	expected_res := Poly(expected_quotient_coeff).evaluate(*rand_fr)

	if !bls.EqualFr(&got_res, &expected_res) {
		panic("polynomials are different")
	}

	top_term := got_quotient_coeff[len(got_quotient_coeff)-1]
	if !bls.EqualZero(&top_term) {
		panic("top term is not zero, degree is incorrect")
	}
	got_quotient_coeff = got_quotient_coeff[:len(got_quotient_coeff)-1]

	if len(expected_quotient_coeff) != len(got_quotient_coeff) {
		panic(fmt.Sprintf("%d %d", len(expected_quotient_coeff), len(got_quotient_coeff)))
	}

	for i := 0; i < len(expected_quotient_coeff); i++ {
		if !bls.EqualFr(&expected_quotient_coeff[i], &got_quotient_coeff[i]) {
			panic("polynomials are not the same")
		}
	}
}

type Point struct {
	x bls.Fr
	y bls.Fr
}

type Points []Point

type Poly []bls.Fr

func (poly Poly) evaluate(point bls.Fr) bls.Fr {
	powers := common.PowersOf(point, len(poly))
	total := bls.ZERO
	for i := 0; i < len(poly); i++ {
		tmp := bls.Fr{}
		bls.MulModFr(&tmp, &powers[i], &poly[i])
		bls.AddModFr(&total, &total, &tmp)
	}
	return total
}
func (points Points) interpolate() Poly {
	max_degree_plus_one := len(points)
	if max_degree_plus_one < 2 {
		panic("should interpolate for degree >= 1")
	}
	coeffs := make([]bls.Fr, max_degree_plus_one)

	for k := 0; k < len(points); k++ {
		point := points[k]
		x_k := point.x
		y_k := point.y

		contribution := make([]bls.Fr, max_degree_plus_one)
		denominator := bls.ONE
		max_contribution_degree := 0
		for j := 0; j < len(points); j++ {
			point := points[j]
			x_j := point.x
			if j == k {
				continue
			}

			diff := x_k
			bls.SubModFr(&diff, &diff, &x_j)
			bls.MulModFr(&denominator, &denominator, &diff)
			if max_contribution_degree == 0 {

				max_contribution_degree = 1
				bls.SubModFr(&contribution[0], &contribution[0], &x_j)
				bls.AddModFr(&contribution[1], &contribution[1], &bls.ONE)

			} else {
				var mul_by_minus_x_j []bls.Fr
				for _, el := range contribution {
					tmp := el
					bls.MulModFr(&tmp, &tmp, &x_j)
					bls.SubModFr(&tmp, &bls.ZERO, &tmp)
					mul_by_minus_x_j = append(mul_by_minus_x_j, tmp)
				}
				contribution = append([]bls.Fr{bls.ZERO}, contribution...)
				contribution = truncate(contribution, max_degree_plus_one)
				if max_degree_plus_one != len(mul_by_minus_x_j) {
					panic("malformed mul_by_minus_x_j")
				}
				for i := 0; i < len(contribution); i++ {
					other := mul_by_minus_x_j[i]
					bls.AddModFr(&contribution[i], &contribution[i], &other)
				}

			}

		}
		bls.InvModFr(&denominator, &denominator)
		if bls.EqualZero(&denominator) {
			panic("denominator should not be zero")
		}
		for i := 0; i < len(contribution); i++ {
			tmp := contribution[i]
			bls.MulModFr(&tmp, &tmp, &denominator)
			bls.MulModFr(&tmp, &tmp, &y_k)
			bls.AddModFr(&coeffs[i], &coeffs[i], &tmp)

		}

	}
	return coeffs
}

func truncate(s []bls.Fr, to int) []bls.Fr {
	return s[:to]
}

func degree(p []bls.Fr) int {
	for d := len(p) - 1; d >= 0; d-- {
		if !bls.EqualZero(&p[d]) {
			return d
		}
	}
	return -1
}

// Taken from https://rosettacode.org/wiki/Polynomial_long_division#Go
func pld(nn, dd []bls.Fr) (q, r []bls.Fr, ok bool) {
	if degree(dd) < 0 {
		return
	}
	nn = append(r, nn...)
	if degree(nn) >= degree(dd) {
		q = make([]bls.Fr, degree(nn)-degree(dd)+1)
		for degree(nn) >= degree(dd) {
			d := make([]bls.Fr, degree(nn)+1)
			copy(d[degree(nn)-degree(dd):], dd)
			tmp := bls.Fr{}
			bls.DivModFr(&tmp, &nn[degree(nn)], &d[degree(d)])
			q[degree(nn)-degree(dd)] = tmp
			for i := range d {
				bls.MulModFr(&d[i], &d[i], &q[degree(nn)-degree(dd)])
				bls.SubModFr(&nn[i], &nn[i], &d[i])
			}
		}
	}
	return q, nn, true
}
