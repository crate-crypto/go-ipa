package ipa

import (
	"math"

	"github.com/crate-crypto/go-ipa/bandersnatch"
	"github.com/crate-crypto/go-ipa/bandersnatch/fr"
	"github.com/crate-crypto/go-ipa/common"
)

type IPAProof struct {
	L []bandersnatch.PointAffine
	R []bandersnatch.PointAffine
	a fr.Element
}

func CreateIPAProof(transcript *common.Transcript, ic *IPAConfig, commitment bandersnatch.PointAffine, a []fr.Element, eval_point fr.Element) IPAProof {

	b := ic.PrecomputedWeights.ComputeBarycentricCoefficients(eval_point)
	inner_prod := InnerProd(a, b)

	transcript.AppendPoint(&commitment)
	transcript.AppendScalars(&eval_point, &inner_prod)
	z := transcript.ChallengeScalar()

	var q bandersnatch.PointAffine
	q.ScalarMul(&ic.Q, &z)

	num_rounds := math.Log2(common.POLY_DEGREE)

	current_basis := ic.SRS

	var L []bandersnatch.PointAffine
	var R []bandersnatch.PointAffine

	for _i := 0; _i < int(num_rounds); _i++ {

		a_L, a_R := splitFrHalf(a)

		b_L, b_R := splitFrHalf(b)

		G_L, G_R := splitG1Half(current_basis)

		z_L := InnerProd(a_R, b_L)
		z_R := InnerProd(a_L, b_R)

		C_L_1 := Commit(G_L, a_R)
		C_L := Commit([]bandersnatch.PointAffine{C_L_1, q}, []fr.Element{fr.One(), z_L})

		C_R_1 := Commit(G_R, a_L)
		C_R := Commit([]bandersnatch.PointAffine{C_R_1, q}, []fr.Element{fr.One(), z_R})

		L = append(L, C_L)
		R = append(R, C_R)

		transcript.AppendPoints(&C_L, &C_R)
		x := transcript.ChallengeScalar()

		var xInv fr.Element
		xInv.Inverse(&x)

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

func splitFrHalf(x []fr.Element) ([]fr.Element, []fr.Element) {
	mid := len(x) / 2
	return x[:mid], x[mid:]
}
func splitG1Half(x []bandersnatch.PointAffine) ([]bandersnatch.PointAffine, []bandersnatch.PointAffine) {
	mid := len(x) / 2
	return x[:mid], x[mid:]
}
