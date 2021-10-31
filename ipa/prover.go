package ipa

import (
	"github.com/crate-crypto/go-ipa/bandersnatch"
	"github.com/crate-crypto/go-ipa/bandersnatch/fr"
	"github.com/crate-crypto/go-ipa/common"
)

type IPAProof struct {
	L        []bandersnatch.PointAffine
	R        []bandersnatch.PointAffine
	A_scalar fr.Element
}

func CreateIPAProof(transcript *common.Transcript, ic *IPAConfig, commitment bandersnatch.PointAffine, a []fr.Element, eval_point fr.Element) IPAProof {

	b := ic.PrecomputedWeights.ComputeBarycentricCoefficients(eval_point)
	inner_prod := InnerProd(a, b)

	transcript.AppendPoint(&commitment)
	transcript.AppendScalars(&eval_point, &inner_prod)
	z := transcript.ChallengeScalar()

	var q bandersnatch.PointAffine
	q.ScalarMul(&ic.Q, &z)

	num_rounds := ic.num_ipa_rounds

	current_basis := ic.SRS

	L := make([]bandersnatch.PointAffine, num_rounds)
	R := make([]bandersnatch.PointAffine, num_rounds)

	for i := 0; i < int(num_rounds); i++ {

		a_L, a_R := splitScalars(a)

		b_L, b_R := splitScalars(b)

		G_L, G_R := splitPoints(current_basis)

		z_L := InnerProd(a_R, b_L)
		z_R := InnerProd(a_L, b_R)

		C_L_1 := commit(G_L, a_R)
		C_L := commit([]bandersnatch.PointAffine{C_L_1, q}, []fr.Element{fr.One(), z_L})

		C_R_1 := commit(G_R, a_L)
		C_R := commit([]bandersnatch.PointAffine{C_R_1, q}, []fr.Element{fr.One(), z_R})

		L[i] = C_L
		R[i] = C_R

		transcript.AppendPoints(&C_L, &C_R)
		x := transcript.ChallengeScalar()

		var xInv fr.Element
		xInv.Inverse(&x)

		// TODO: We could use a for loop here like in the Rust code
		a = foldScalars(a_L, a_R, x)
		b = foldScalars(b_L, b_R, xInv)

		current_basis = foldPoints(G_L, G_R, xInv)

	}

	if len(a) != 1 {
		panic("length of `a` should be 1 at the end of the reduction")
	}

	return IPAProof{
		L:        L,
		R:        R,
		A_scalar: a[0],
	}
}
