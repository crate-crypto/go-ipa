package ipa

import (
	"github.com/crate-crypto/go-ipa/bls"
	"github.com/crate-crypto/go-ipa/common"
)

func CheckIPAProof(ic *IPAConfig, commitment bls.G1Point, proof IPAProof, eval_point bls.Fr, inner_prod bls.Fr) bool {

	b := ic.PrecomputedWeights.ComputeBarycentricCoefficients(eval_point)

	transcript := common.NewTranscript("prover")

	transcript.AppendPoint(&commitment)
	transcript.AppendScalars(&eval_point, &inner_prod)
	z := transcript.ChallengeScalar()

	q := bls.G1Point{}
	bls.MulG1(&q, &ic.Q, &z)

	qy := bls.G1Point{}
	bls.MulG1(&qy, &q, &inner_prod)
	bls.AddG1(&commitment, &commitment, &qy)

	challenges := generateChallenges(transcript, &proof)
	challenges_inv := make([]bls.Fr, len(challenges))

	// Compute expected commitment
	for i := 0; i < len(challenges); i++ {
		x := challenges[i]
		L := proof.L[i]
		R := proof.R[i]

		xInv := bls.Fr{}
		bls.InvModFr(&xInv, &x)

		challenges_inv[i] = xInv

		commitment = Commit([]bls.G1Point{commitment, L, R}, []bls.Fr{bls.ONE, x, xInv})
	}

	current_basis := ic.SRS

	for i := 0; i < len(challenges); i++ {

		G_L, G_R := splitG1Half(current_basis)

		b_L, b_R := splitFrHalf(b)

		xInv := challenges_inv[i]

		b = fold_scalars(b_L, b_R, xInv)
		current_basis = fold_points(G_L, G_R, xInv)
	}

	if len(b) != len(current_basis) {
		panic("reduction was not correct")
	}

	if len(b) != 1 {
		panic("`b` and `G` should be 1")
	}

	b0 := b[0]

	got := bls.G1Point{}
	//  G[0] * a + (a * b) * Q;
	part_1 := bls.G1Point{}
	bls.MulG1(&part_1, &current_basis[0], &proof.a)

	part_2 := bls.G1Point{}
	part_2a := bls.Fr{}
	bls.MulModFr(&part_2a, &b0, &proof.a)
	bls.MulG1(&part_2, &q, &part_2a)

	bls.AddG1(&got, &part_1, &part_2)

	return bls.EqualG1(&got, &commitment)
}

func generate_b0(points []bls.Fr, challenges_inv []bls.Fr) bls.Fr {
	if len(points) != POLY_DEGREE {
		// TODO we can remove this check, if we use [256]bls.Fr
		panic("The IPA parameters have been fixed for a degree 256 polynomial")
	}

	n := POLY_DEGREE
	for i := 0; i < len(challenges_inv); i++ {
		n = n / 2
		b_L := points[:n]
		b_R := points[n:]
		xInv := challenges_inv[i]

		points = fold_scalars(b_L, b_R, xInv)

	}

	if len(points) != 1 {
		panic("points should only have one point")
	}

	return points[0]
}

func generateChallenges(transcript *common.Transcript, proof *IPAProof) []bls.Fr {
	if len(proof.L) != len(proof.R) {
		panic("L and R should be the same size")
	}
	challenges := make([]bls.Fr, len(proof.L))
	for i := 0; i < len(proof.L); i++ {
		transcript.AppendPoints(&proof.L[i], &proof.R[i])
		challenges[i] = transcript.ChallengeScalar()
	}
	return challenges
}
