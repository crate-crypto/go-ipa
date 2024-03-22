package banderwagon

import (
	"crypto/sha256"
	"encoding/binary"
	"fmt"

	"github.com/crate-crypto/go-ipa/bandersnatch/fp"
)

// The following MSM algorithm is based on an anlaysis that
// be found in the following doc: https://hackmd.io/@jsign/vkt-another-iteration-of-vkt-msms
type MSM struct {
	table1_8    MSMPrecomp
	table9_32   PrecompMSM2
	table33_256 PrecompMSM2
}

// NewMSMCalculator creates a new MSM calculator for a fixed basis.
func NewMSMCalculator(basis []Element) (MSM, error) {
	if len(basis) != supportedMSMLength {
		return MSM{}, fmt.Errorf("the basis have length %d", supportedMSMLength)
	}
	table1_8, err := NewPrecompMSM(basis)
	if err != nil {
		return MSM{}, err
	}
	return MSM{
		table1_8:    table1_8,
		table9_32:   NewPrecompMSM2(basis, 16, 12),
		table33_256: NewPrecompMSM2(basis, 128, 12),
	}, nil
}

// MSM calculates the multi-scalar multiplication of the given scalars.
func (msm *MSM) MSM(scalars []Fr) (Element, error) {
	var nonZeroScalars int
	for i := range scalars {
		if !scalars[i].IsZero() {
			nonZeroScalars++
		}
	}
	if nonZeroScalars <= 8 {
		return msm.table1_8.MSM(scalars), nil
	}
	if nonZeroScalars <= 32 {
		res, _, err := msm.table9_32.MSM(scalars)
		return res, err
	}
	res, _, err := msm.table33_256.MSM(scalars)
	return res, err
}

// GenerateVKTBasis generates numPoints random points on the curve using
// hardcoded seed.
func GenerateVKTBasis(numPoints uint64) []Element {
	seed := "eth_verkle_oct_2021"

	points := []Element{}

	var increment uint64 = 0

	for uint64(len(points)) != numPoints {

		digest := sha256.New()
		digest.Write([]byte(seed))

		b := make([]byte, 8)
		binary.BigEndian.PutUint64(b, increment)
		digest.Write(b)

		hash := digest.Sum(nil)

		var x fp.Element
		x.SetBytes(hash)

		increment++

		x_as_bytes := x.Bytes()
		var point_found Element
		err := point_found.SetBytes(x_as_bytes[:])
		if err != nil {
			// This point is not in the correct subgroup or on the curve
			continue
		}
		points = append(points, point_found)

	}

	return points
}
