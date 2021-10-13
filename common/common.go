package common

import "github.com/crate-crypto/go-ipa/bls"

// Returns powers of x from 0 to degree-1
// <1, x, x^2, x^3, x^4,...,x^(degree-1)>
// TODO This method is used in two places; one is to evaluate a polynomial (test), and the other is to
// TODO compute powers of challenges.
// TODO the first one we can use the bls package for
// TODO The second we _could_ just multiply on each iteration, (depends on how readable it is)
func PowersOf(x bls.Fr, degree int) []bls.Fr {
	result := make([]bls.Fr, degree)
	result[0] = bls.ONE

	for i := 1; i < degree; i++ {
		bls.MulModFr(&result[i], &result[i-1], &x)
	}

	return result
}
