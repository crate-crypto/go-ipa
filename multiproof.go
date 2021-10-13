package multiproof

import (
	"fmt"

	"github.com/crate-crypto/go-ipa/bls"
	"github.com/crate-crypto/go-ipa/common"
	"github.com/crate-crypto/go-ipa/ipa"
)

type MultiProof struct {
	ipa ipa.IPAProof
	D   bls.G1Point
}

func CreateMultiProof(transcript *common.Transcript, ipaConf *ipa.IPAConfig, Cs []*bls.G1Point, fs [][]bls.Fr, zs []*bls.Fr) MultiProof {

	if len(Cs) != len(fs) {
		panic(fmt.Sprintf("number of commitments = %d, while number of functions = %d", len(Cs), len(fs)))
	}
	if len(Cs) != len(zs) {
		panic(fmt.Sprintf("number of commitments = %d, while number of points = %d", len(Cs), len(zs)))
	}

	num_queries := len(Cs)
	if num_queries == 0 {
		// XXX does this need to be a panic?
		panic(fmt.Sprintf("cannot create a multiproof with 0 queries"))
	}

	for i := 0; i < num_queries; i++ {
		transcript.AppendPoint(Cs[i])
		transcript.AppendScalar(zs[i])

		// get the `y` value
		z_as_u8 := frToDomain(zs[i])
		f := fs[i]
		y := f[z_as_u8]
		transcript.AppendScalar(&y)
	}
	r := transcript.ChallengeScalar()
	powers_of_r := common.PowersOf(r, num_queries)

	// Compute g
	g_x := make([]bls.Fr, common.POLY_DEGREE)

	for i := 0; i < num_queries; i++ {
		f := fs[i]
		index := frToDomain(zs[i])
		r := powers_of_r[i]

		quotient := ipaConf.PrecomputedWeights.DivideOnDomain(index, f)

		for j := 0; j < common.POLY_DEGREE; j++ {
			tmp := bls.Fr{}
			bls.MulModFr(&tmp, &r, &quotient[j])
			bls.AddModFr(&g_x[j], &g_x[j], &tmp)
		}
	}

	D := ipa.Commit(ipaConf.SRS, g_x)

	transcript.AppendScalar(&r)
	transcript.AppendPoint(&D)
	t := transcript.ChallengeScalar()

	// Compute h
	h_x := make([]bls.Fr, common.POLY_DEGREE)

	for i := 0; i < num_queries; i++ {
		r := powers_of_r[i]
		f := fs[i]

		den_inv := bls.Fr{}
		bls.SubModFr(&den_inv, &t, zs[i])
		bls.InvModFr(&den_inv, &den_inv)

		for k := 0; k < common.POLY_DEGREE; k++ {
			f_k := f[k]

			tmp := bls.Fr{}
			bls.MulModFr(&tmp, &r, &f_k)
			bls.MulModFr(&tmp, &tmp, &den_inv)

			bls.AddModFr(&h_x[k], &h_x[k], &tmp)
		}
	}

	h_minus_g := make([]bls.Fr, common.POLY_DEGREE)
	for i := 0; i < common.POLY_DEGREE; i++ {
		bls.SubModFr(&h_minus_g[i], &h_x[i], &g_x[i])
	}

	E := ipa.Commit(ipaConf.SRS, h_x)

	E_minus_D := bls.ZERO_G1
	bls.SubG1(&E_minus_D, &E, &D)

	ipa_proof := ipa.CreateIPAProof(transcript, ipaConf, E_minus_D, h_minus_g, t)

	return MultiProof{
		ipa: ipa_proof,
		D:   D,
	}
}

func CheckMultiProof(transcript *common.Transcript, ipaConf *ipa.IPAConfig, proof MultiProof, Cs []*bls.G1Point, ys []*bls.Fr, zs []*bls.Fr) bool {

	if len(Cs) != len(ys) {
		panic(fmt.Sprintf("number of commitments = %d, while number of output points = %d", len(Cs), len(ys)))
	}
	if len(Cs) != len(zs) {
		panic(fmt.Sprintf("number of commitments = %d, while number of input points = %d", len(Cs), len(zs)))
	}

	num_queries := len(Cs)
	if num_queries == 0 {
		// XXX does this need to be a panic?
		// XXX: this comment is also in CreateMultiProof
		panic(fmt.Sprintf("cannot create a multiproof with no data"))
	}

	for i := 0; i < num_queries; i++ {
		transcript.AppendPoint(Cs[i])
		transcript.AppendScalar(zs[i])
		transcript.AppendScalar(ys[i])
	}
	r := transcript.ChallengeScalar()
	powers_of_r := common.PowersOf(r, num_queries)

	transcript.AppendScalar(&r)
	transcript.AppendPoint(&proof.D)
	t := transcript.ChallengeScalar()

	// Compute helper_scalars. This is r^i / t - z_i
	//
	// There are more optimal ways to do this, but
	// this is more readable, so will leave for now
	helper_scalars := make([]bls.Fr, num_queries)
	for i := 0; i < num_queries; i++ {
		r := powers_of_r[i]

		// r^i / (t - z_i)
		bls.SubModFr(&helper_scalars[i], &t, zs[i])
		bls.InvModFr(&helper_scalars[i], &helper_scalars[i])
		bls.MulModFr(&helper_scalars[i], &helper_scalars[i], &r)
	}

	// Compute g_2(t) = SUM y_i * (r^i / t - z_i) = SUM y_i * helper_scalars
	g_2_t := bls.ZERO
	for i := 0; i < num_queries; i++ {
		tmp := bls.Fr{}
		bls.MulModFr(&tmp, ys[i], &helper_scalars[i])

		bls.AddModFr(&g_2_t, &g_2_t, &tmp)
	}

	// Compute E = SUM C_i * (r^i / t - z_i) = SUM C_i * helper_scalars
	E := bls.ZERO_G1
	for i := 0; i < num_queries; i++ {
		tmp := bls.G1Point{}
		bls.MulG1(&tmp, Cs[i], &helper_scalars[i])

		bls.AddG1(&E, &E, &tmp)
	}

	E_minus_D := bls.ZERO_G1
	bls.SubG1(&E_minus_D, &E, &proof.D)

	return ipa.CheckIPAProof(transcript, ipaConf, E_minus_D, proof.ipa, t, g_2_t)
}

// Converts a field element to u8
// panics if field element is > 255
func frToDomain(in *bls.Fr) uint8 {
	arr := bls.FrTo32(in)

	// Since we know the domain is [0,255]
	// and the encoding is little endian
	// We just need to take the first element and
	// check that all other bytes are zero
	for i := 1; i < len(arr); i++ {
		if arr[i] != 0 {
			panic(fmt.Sprintf("expected an array with the lowest byte set, got %v", arr))
		}
	}
	result := arr[0]

	return result
}
