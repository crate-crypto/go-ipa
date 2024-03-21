package banderwagon

import "fmt"

// https://hackmd.io/@jsign/vkt-another-iteration-of-vkt-msms
type MSM struct {
	table1_8    MSMPrecomp
	table9_32   PrecompMSM2
	table33_256 PrecompMSM2
}

func NewMSM(basis []Element) (MSM, error) {
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
