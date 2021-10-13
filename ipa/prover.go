package ipa

import (
	"math"

	"github.com/crate-crypto/go-ipa/bls"
	"github.com/crate-crypto/go-ipa/common"
)

type IPAProof struct {
	L []bls.G1Point
	R []bls.G1Point
	a bls.Fr
	b bls.Fr
}

// TODO: currently we assume `a` is in monomial basis
func CreateIPAProof(ic *IPAConfig, commitment bls.G1Point, a []bls.Fr, eval_point bls.Fr) IPAProof {

	transcript := common.NewTranscript("prover")

	b := ic.PrecomputedWeights.ComputeBarycentricCoefficients(eval_point)
	inner_prod := InnerProd(a, b)

	transcript.AppendPoint(&commitment)
	transcript.AppendScalars(&eval_point, &inner_prod)
	z := transcript.ChallengeScalar()

	q := bls.G1Point{}
	bls.MulG1(&q, &ic.Q, &z)

	num_rounds := math.Log2(POLY_DEGREE)

	current_basis := ic.SRS

	var L []bls.G1Point
	var R []bls.G1Point

	for _i := 0; _i < int(num_rounds); _i++ {

		a_L, a_R := splitFrHalf(a)

		b_L, b_R := splitFrHalf(b)

		G_L, G_R := splitG1Half(current_basis)

		z_L := InnerProd(a_R, b_L)
		z_R := InnerProd(a_L, b_R)

		C_L_1 := Commit(G_L, a_R)
		C_L := Commit([]bls.G1Point{C_L_1, q}, []bls.Fr{bls.ONE, z_L})

		C_R_1 := Commit(G_R, a_L)
		C_R := Commit([]bls.G1Point{C_R_1, q}, []bls.Fr{bls.ONE, z_R})

		L = append(L, C_L)
		R = append(R, C_R)

		transcript.AppendPoints(&C_L, &C_R)
		x := transcript.ChallengeScalar()

		xInv := bls.Fr{}
		bls.InvModFr(&xInv, &x)

		a = fold_scalars(a_L, a_R, x)
		b = fold_scalars(b_L, b_R, xInv)

		current_basis = fold_points(G_L, G_R, xInv)

	}

	if len(a) != 1 {
		panic("length of `a` should be 1 at the end of the reduction")
	}

	return IPAProof{
		L: L,
		R: R,
		a: a[0],
	}
}

func splitFrHalf(x []bls.Fr) ([]bls.Fr, []bls.Fr) {
	mid := len(x) / 2
	return x[:mid], x[mid:]
}
func splitG1Half(x []bls.G1Point) ([]bls.G1Point, []bls.G1Point) {
	mid := len(x) / 2
	return x[:mid], x[mid:]
}
