package bandersnatch

import (
	"bytes"
	"encoding/binary"
	"runtime"

	"github.com/crate-crypto/go-ipa/bandersnatch/fr"
	"github.com/crate-crypto/go-ipa/bandersnatch/parallel"
)

type PrecomputeLagrange struct {
	inner      []*LagrangeTablePoints
	num_points int
}

func NewPrecomputeLagrange(points []PointAffine) *PrecomputeLagrange {
	table := make([]*LagrangeTablePoints, len(points))
	for i := 0; i < len(points); i++ {
		point := points[i]
		table[i] = newLagrangeTablePoints(point)
	}

	return &PrecomputeLagrange{
		inner:      table,
		num_points: len(points),
	}
}

func (pcl *PrecomputeLagrange) SerializePrecomputedLagrange() ([]byte, error) {
	var buf bytes.Buffer

	err := binary.Write(&buf, binary.LittleEndian, int64(pcl.num_points))
	if err != nil {
		return nil, err
	}

	err = binary.Write(&buf, binary.LittleEndian, int64(len(pcl.inner[0].matrix)))
	if err != nil {
		return nil, err
	}

	for _, ltp := range pcl.inner {
		buf.Write(ltp.identity.Marshal())

		for _, p := range ltp.matrix {
			buf.Write(p.Marshal())
		}
	}

	return buf.Bytes(), nil
}

func DeserializePrecomputedLagrange(serialized []byte) (*PrecomputeLagrange, error) {
	var pcl PrecomputeLagrange
	reader := bytes.NewReader(serialized)

	var numPoints int64
	err := binary.Read(reader, binary.LittleEndian, &numPoints)
	if err != nil {
		return nil, err
	}
	pcl.num_points = int(numPoints)
	pcl.inner = make([]*LagrangeTablePoints, pcl.num_points)

	var rowLen int64
	err = binary.Read(reader, binary.LittleEndian, &rowLen)
	if err != nil {
		return nil, err
	}

	for i := 0; i < pcl.num_points; i++ {
		var tmp [32]byte
		pcl.inner[i] = new(LagrangeTablePoints)

		// Deserialize the identity
		reader.Read(tmp[:])
		pcl.inner[i].identity.Unmarshal(tmp[:])

		// Deserialize the matrix
		pcl.inner[i].matrix = make([]PointAffine, rowLen)
		for j := int64(0); j < rowLen; j++ {
			reader.Read(tmp[:])
			pcl.inner[i].matrix[j].Unmarshal(tmp[:32])
		}
	}

	return &pcl, nil
}

func (p *PrecomputeLagrange) Commit(evaluations []fr.Element) *PointAffine {

	nbTasks := runtime.NumCPU()
	chPartialResults := make(chan PointProj, nbTasks)
	parallel.Execute(len(evaluations), func(start, end int) {
		var partial_result PointProj
		partial_result.Identity()

		for i := start; i < end; i++ {
			scalar := &evaluations[i]

			if scalar.IsZero() {
				continue
			}

			table := p.inner[i]
			scalar_bytes_le := scalar.BytesLE()

			for row, byte := range scalar_bytes_le {
				var tp = table.point(row, byte)
				var tp_proj PointProj
				tp_proj.FromAffine(tp)
				partial_result.Add(&partial_result, &tp_proj)
			}
		}

		chPartialResults <- partial_result

	}, nbTasks)

	// Aggregate Parallel Results

	close(chPartialResults)
	var result PointProj
	result.Identity()
	for partial := range chPartialResults {
		result.Add(&result, &partial)
	}

	var res_affine PointAffine
	res_affine.FromProj(&result)
	return &res_affine
}

type LagrangeTablePoints struct {
	identity PointAffine
	matrix   []PointAffine
}

func newLagrangeTablePoints(point PointAffine) *LagrangeTablePoints {
	num_rows := 32
	// We use base 256
	base_int := 256

	var base fr.Element
	base.SetUint64(256)

	base_row := compute_base_row(point, (base_int - 1))

	var rows []PointAffine
	rows = append(rows, base_row...)

	var scale = base
	for i := 1; i < num_rows; i++ {

		scaled_row := scale_row(base_row, scale)
		rows = append(rows, scaled_row...)
		scale.Mul(&scale, &base)
	}

	var identity PointAffine
	identity.Identity()
	return &LagrangeTablePoints{
		identity: identity,
		matrix:   rows,
	}
}

// TODO: double check if index is needed
func (ltp *LagrangeTablePoints) point(index int, value uint8) *PointAffine {
	if value == 0 {
		return &ltp.identity
	}
	return &ltp.matrix[uint(index*255)+uint(value-1)]
}

func compute_base_row(point PointAffine, num_points int) []PointAffine {

	row := make([]PointAffine, num_points)
	row[0] = point

	for i := 1; i < num_points; i++ {
		var row_i PointAffine
		row_i.Add(&row[i-1], &point)
		row[i] = row_i
	}
	return row
}

func scale_row(points []PointAffine, scale fr.Element) []PointAffine {
	scaled_points := make([]PointAffine, len(points))
	for i := 0; i < len(points); i++ {

		scaled_points[i].ScalarMul(&points[i], &scale)
	}
	return scaled_points
}
