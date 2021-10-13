package ipa

import (
	"fmt"

	"github.com/crate-crypto/go-ipa/bls"
	"github.com/crate-crypto/go-ipa/common"
)

// The domain size will always equal 256, which is the same
// as the degree of the polynomial, we are committing to.
// This constant is defined here for semantic reasons.
const DOMAIN_SIZE = common.POLY_DEGREE

type PrecomputedWeights struct {
	// This stores A'(x_i) and 1/A'(x_i)
	barycentricWeights []bls.Fr
	// This stores 1/k and -1/k for k \in [0, 255]
	invertedDomain []bls.Fr
}

func NewPrecomputedWeights() *PrecomputedWeights {
	// Imagine we have two arrays of the same length and we concatenate them together
	// This is how we will store the A'(x_i) and 1/A'(x_i)
	// This midpoint variable is used to compute the offset that we need
	// to place 1/A'(x_i)
	midpoint := uint64(DOMAIN_SIZE)

	// Note there are DOMAIN_SIZE number of weights, but we are also storing their inverses
	// so we need double the amount of space
	barycentricWeights := make([]bls.Fr, midpoint*2)
	for i := uint64(0); i < midpoint; i++ {
		weight := computeBarycentricWeightForElement(i)

		invWeight := bls.Fr{}
		bls.InvModFr(&invWeight, &weight)

		barycentricWeights[i] = weight
		barycentricWeights[i+midpoint] = invWeight
	}

	// Computing 1/k and -1/k for k \in [0, 255]
	// Note that since we cannot do 1/0, we have one less element
	midpoint = DOMAIN_SIZE - 1
	invertedDomain := make([]bls.Fr, midpoint*2)
	for i := uint64(1); i < DOMAIN_SIZE; i++ {
		k := bls.Fr{}
		bls.AsFr(&k, i)
		bls.InvModFr(&k, &k)

		negative_k := bls.Fr{}
		bls.SubModFr(&negative_k, &bls.ZERO, &k)

		invertedDomain[i-1] = k
		invertedDomain[(i-1)+midpoint] = negative_k
	}

	return &PrecomputedWeights{
		barycentricWeights: barycentricWeights,
		invertedDomain:     invertedDomain,
	}

}

// computes A'(x_j) where x_j must be an element in the domain
// This is computed as the product of x_j - x_i where x_i is an element in the domain
// and x_i is not equal to x_j
func computeBarycentricWeightForElement(element uint64) bls.Fr {
	// let domain_element_fr = Fr::from(domain_element as u128);
	if element > DOMAIN_SIZE {
		panic(fmt.Sprintf("the domain is [0,255], %d is not in the domain", element))
	}

	domain_element_fr := bls.Fr{}
	bls.AsFr(&domain_element_fr, element)

	total := bls.ONE

	for i := uint64(0); i < DOMAIN_SIZE; i++ {
		if i == element {
			continue
		}

		i_fr := bls.Fr{}
		bls.AsFr(&i_fr, i)

		tmp := bls.Fr{}
		bls.SubModFr(&tmp, &domain_element_fr, &i_fr)

		bls.MulModFr(&total, &total, &tmp)
	}

	return total
}

// Computes the coefficients `bary_coeffs` for a point `z` such that
// when we have a polynomial `p` in lagrange basis, the inner product of `p` and `bary_coeffs`
// is equal to p(z)
// Note that `z` should not be in the domain
// This can also be seen as the lagrange coefficients L_i(point)
func (preComp *PrecomputedWeights) ComputeBarycentricCoefficients(point bls.Fr) []bls.Fr {

	// Compute A(x_i) * point - x_i
	lagrangeEvals := make([]bls.Fr, DOMAIN_SIZE)
	for i := uint64(0); i < DOMAIN_SIZE; i++ {
		weight := preComp.barycentricWeights[i]

		i_fr := bls.Fr{}
		bls.AsFr(&i_fr, i)
		bls.SubModFr(&lagrangeEvals[i], &point, &i_fr)

		bls.MulModFr(&lagrangeEvals[i], &lagrangeEvals[i], &weight)
	}

	totalProd := bls.ONE
	for i := uint64(0); i < DOMAIN_SIZE; i++ {
		i_fr := bls.Fr{}
		bls.AsFr(&i_fr, i)

		tmp := bls.Fr{}
		bls.SubModFr(&tmp, &point, &i_fr)
		bls.MulModFr(&totalProd, &totalProd, &tmp)
	}

	for i := uint64(0); i < DOMAIN_SIZE; i++ {
		// XXX: there is no batch inversion API
		bls.InvModFr(&lagrangeEvals[i], &lagrangeEvals[i])
		bls.MulModFr(&lagrangeEvals[i], &lagrangeEvals[i], &totalProd)
	}

	return lagrangeEvals
}

// XXX: we allocate each time we call, I think the golang thing to do would be to pass a
// pointer and clear the buffer each time
// computes f(x) - f(x_i) / x - x_i where x_i is an element in the domain
func (preComp *PrecomputedWeights) DivideOnDomain(index uint8, f []bls.Fr) []bls.Fr {
	quotient := make([]bls.Fr, DOMAIN_SIZE)

	y := f[index]

	for i := 0; i < DOMAIN_SIZE; i++ {
		if i != int(index) {
			den := i - int(index)
			absDen, is_neg := absInt(den)

			denInv := preComp.getInvertedElement(absDen, is_neg)

			// compute q_i
			bls.SubModFr(&quotient[i], &f[i], &y)
			bls.MulModFr(&quotient[i], &quotient[i], &denInv)

			weightRatio := preComp.getRatioOfWeights(int(index), i)
			tmp := bls.Fr{}
			bls.MulModFr(&tmp, &weightRatio, &quotient[i])
			bls.SubModFr(&quotient[index], &quotient[index], &tmp)

		}
	}

	return quotient
}

func (preComp *PrecomputedWeights) getInvertedElement(element int, is_neg bool) bls.Fr {
	index := element - 1

	if is_neg {
		midpoint := len(preComp.invertedDomain) / 2
		index += midpoint
	}

	return preComp.invertedDomain[index]
}

func (preComp *PrecomputedWeights) getRatioOfWeights(numerator int, denominator int) bls.Fr {

	a := preComp.barycentricWeights[numerator]
	midpoint := len(preComp.barycentricWeights) / 2
	b := preComp.barycentricWeights[denominator+midpoint]

	result := bls.Fr{}
	bls.MulModFr(&result, &a, &b)
	return result
}

func (preComp *PrecomputedWeights) getInverseBarycentricWeight(i int) bls.Fr {

	midpoint := len(preComp.barycentricWeights) / 2
	return preComp.barycentricWeights[i+midpoint]
}

// Returns the absolute value and true if
// the value was negative
func absInt(x int) (int, bool) {
	is_negative := x < 0

	if is_negative {
		return -x, is_negative
	}

	return x, is_negative
}
