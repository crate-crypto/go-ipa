package ipa

import (
	"bytes"
	"encoding/binary"

	"github.com/crate-crypto/go-ipa/bandersnatch"
)

// Stores the SRS and the precomputed SRS points too
type SRSPrecompPoints struct {
	// Points to commit to the input vector
	// We could try to find these points in the precomputed points
	// but for now, we just store the SRS too
	SRS []bandersnatch.PointAffine
	// Point to commit to the inner product of the two vectors in the inner product argument
	Q bandersnatch.PointAffine
	// Precomputed SRS points
	PrecompLag *bandersnatch.PrecomputeLagrange
}

func NewSRSPrecomp(num_points uint) *SRSPrecompPoints {
	srs := GenerateRandomPoints(uint64(num_points))
	var Q bandersnatch.PointAffine = bandersnatch.GetEdwardsCurve().Base

	return &SRSPrecompPoints{
		SRS:        srs,
		Q:          Q,
		PrecompLag: bandersnatch.NewPrecomputeLagrange(srs),
	}
}

func (spc *SRSPrecompPoints) SerializeSRSPrecomp() ([]byte, error) {
	var buf bytes.Buffer

	err := binary.Write(&buf, binary.LittleEndian, int64(len(spc.SRS)))
	if err != nil {
		return nil, err
	}

	for _, p := range spc.SRS {
		p.WriteUncompressedPoint(&buf)
	}

	err = spc.PrecompLag.SerializePrecomputedLagrange(&buf)
	if err != nil {
		return nil, err
	}
	return buf.Bytes(), nil
}
func DeserializeSRSPrecomp(serialized []byte) (*SRSPrecompPoints, error) {
	var spc SRSPrecompPoints
	reader := bytes.NewReader(serialized)

	var lenSRS int64
	err := binary.Read(reader, binary.LittleEndian, &lenSRS)
	if err != nil {
		return nil, err
	}
	spc.SRS = make([]bandersnatch.PointAffine, lenSRS)

	for i := 0; i < int(lenSRS); i++ {
		spc.SRS[i] = *bandersnatch.ReadUncompressedPoint(reader)
	}

	pcl, err := bandersnatch.DeserializePrecomputedLagrange(reader)
	if err != nil {
		return nil, err
	}
	spc.PrecompLag = pcl
	spc.Q = bandersnatch.GetEdwardsCurve().Base

	return &spc, nil
}
