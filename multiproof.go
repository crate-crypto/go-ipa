package multiproof

import (
	"fmt"

	"github.com/crate-crypto/go-ipa/bandersnatch"
	"github.com/crate-crypto/go-ipa/bandersnatch/fr"
	"github.com/crate-crypto/go-ipa/common"
	"github.com/crate-crypto/go-ipa/ipa"
)

type MultiProof struct {
	IPA ipa.IPAProof
	D   bandersnatch.PointAffine
}

func CreateMultiProof(transcript *common.Transcript, ipaConf *ipa.IPAConfig, Cs []*bandersnatch.PointAffine, fs [][]fr.Element, zs []uint8) MultiProof {

	if len(Cs) != len(fs) {
		panic(fmt.Sprintf("number of commitments = %d, while number of functions = %d", len(Cs), len(fs)))
	}
	if len(Cs) != len(zs) {
		panic(fmt.Sprintf("number of commitments = %d, while number of points = %d", len(Cs), len(zs)))
	}

	num_queries := len(Cs)
	if num_queries == 0 {
		// XXX does this need to be a panic?
		panic("cannot create a multiproof with 0 queries")
	}

	for i := 0; i < num_queries; i++ {
		transcript.AppendPoint(Cs[i])
		var z = domainToFr(zs[i])
		transcript.AppendScalar(&z)

		// get the `y` value

		f := fs[i]
		y := f[zs[i]]
		transcript.AppendScalar(&y)
	}
	r := transcript.ChallengeScalar()
	powers_of_r := common.PowersOf(r, num_queries)

	// Compute g
	g_x := make([]fr.Element, common.POLY_DEGREE)

	for i := 0; i < num_queries; i++ {
		f := fs[i]
		index := zs[i]
		r := powers_of_r[i]

		quotient := ipaConf.PrecomputedWeights.DivideOnDomain(index, f)

		for j := 0; j < common.POLY_DEGREE; j++ {
			var tmp fr.Element

			tmp.Mul(&r, &quotient[j])
			g_x[j].Add(&g_x[j], &tmp)
		}
	}

	D := ipaConf.Commit(g_x)

	transcript.AppendScalar(&r)
	transcript.AppendPoint(&D)
	t := transcript.ChallengeScalar()

	// Compute h
	h_x := make([]fr.Element, common.POLY_DEGREE)

	for i := 0; i < num_queries; i++ {
		r := powers_of_r[i]
		f := fs[i]

		var den_inv fr.Element
		var z = domainToFr(zs[i])
		den_inv.Sub(&t, &z)
		den_inv.Inverse(&den_inv)

		for k := 0; k < common.POLY_DEGREE; k++ {
			f_k := f[k]

			var tmp fr.Element
			tmp.Mul(&r, &f_k)
			tmp.Mul(&tmp, &den_inv)
			h_x[k].Add(&h_x[k], &tmp)
		}
	}

	h_minus_g := make([]fr.Element, common.POLY_DEGREE)
	for i := 0; i < common.POLY_DEGREE; i++ {
		h_minus_g[i].Sub(&h_x[i], &g_x[i])
	}

	E := ipaConf.Commit(h_x)

	var E_minus_D bandersnatch.PointAffine

	E_minus_D.Sub(&E, &D)

	ipa_proof := ipa.CreateIPAProof(transcript, ipaConf, E_minus_D, h_minus_g, t)

	return MultiProof{
		IPA: ipa_proof,
		D:   D,
	}
}

func CheckMultiProof(transcript *common.Transcript, ipaConf *ipa.IPAConfig, proof *MultiProof, Cs []*bandersnatch.PointAffine, ys []*fr.Element, zs []uint8) bool {

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
		panic("cannot create a multiproof with no data")
	}

	for i := 0; i < num_queries; i++ {
		transcript.AppendPoint(Cs[i])
		var z = domainToFr(zs[i])
		transcript.AppendScalar(&z)
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
	helper_scalars := make([]fr.Element, num_queries)
	for i := 0; i < num_queries; i++ {
		r := powers_of_r[i]

		// r^i / (t - z_i)
		var z = domainToFr(zs[i])
		helper_scalars[i].Sub(&t, &z)
		helper_scalars[i].Inverse(&helper_scalars[i])
		helper_scalars[i].Mul(&helper_scalars[i], &r)
	}

	// Compute g_2(t) = SUM y_i * (r^i / t - z_i) = SUM y_i * helper_scalars
	g_2_t := fr.Zero()
	for i := 0; i < num_queries; i++ {
		var tmp fr.Element
		tmp.Mul(ys[i], &helper_scalars[i])
		g_2_t.Add(&g_2_t, &tmp)
	}

	// Compute E = SUM C_i * (r^i / t - z_i) = SUM C_i * helper_scalars
	var E bandersnatch.PointAffine
	E.Identity()
	for i := 0; i < num_queries; i++ {
		var tmp bandersnatch.PointAffine
		tmp.ScalarMul(Cs[i], &helper_scalars[i])
		E.Add(&E, &tmp)
	}

	var E_minus_D bandersnatch.PointAffine
	E_minus_D.Sub(&E, &proof.D)

	return ipa.CheckIPAProof(transcript, ipaConf, E_minus_D, proof.IPA, t, g_2_t)
}

func domainToFr(in uint8) fr.Element {
	var x fr.Element
	x.SetUint64(uint64(in))
	return x
}
