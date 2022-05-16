package banderwagon

import (
	"encoding/binary"
	"io"

	"github.com/crate-crypto/go-ipa/bandersnatch/fr"
	"github.com/crate-crypto/go-ipa/common/parallel"
)

type PrecomputeLagrange struct {
	inner      []*LagrangeTablePoints
	num_points int
}

func (pcl PrecomputeLagrange) Equal(other PrecomputeLagrange) bool {

	if pcl.num_points != other.num_points {
		return false
	}

	if len(pcl.inner) != len(other.inner) {
		return false
	}

	for i := 0; i < len(pcl.inner); i++ {
		if !pcl.inner[i].Equal(*other.inner[i]) {
			return false
		}
	}

	return true
}

func NewPrecomputeLagrange(points []Element) *PrecomputeLagrange {

	table := make([]*LagrangeTablePoints, len(points))
	parallel.Execute(len(points), func(start, end int) {

		for i := start; i < end; i++ {
			point := points[i]
			table[i] = newLagrangeTablePoints(point)
		}

	})

	return &PrecomputeLagrange{
		inner:      table,
		num_points: len(points),
	}
}

func (pcl *PrecomputeLagrange) SerializePrecomputedLagrange(w io.Writer) error {

	err := binary.Write(w, binary.LittleEndian, int64(pcl.num_points))
	if err != nil {
		return err
	}

	err = binary.Write(w, binary.LittleEndian, int64(len(pcl.inner[0].matrix)))
	if err != nil {
		return err
	}

	for _, ltp := range pcl.inner {
		for _, p := range ltp.matrix {
			p.UnsafeWriteUncompressedPoint(w)
		}
	}

	return nil
}

func DeserializePrecomputedLagrange(reader io.Reader) (*PrecomputeLagrange, error) {
	var pcl PrecomputeLagrange

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

		pcl.inner[i] = new(LagrangeTablePoints)

		pcl.inner[i].identity.Identity()

		// Deserialize the matrix
		pcl.inner[i].matrix = make([]Element, rowLen)
		for j := int64(0); j < rowLen; j++ {

			pcl.inner[i].matrix[j] = *UnsafeReadUncompressedPoint(reader)
		}
	}

	return &pcl, nil
}

func (p *PrecomputeLagrange) Commit(evaluations []fr.Element) *Element {
	var result Element
	result.Identity()

	for i := 0; i < len(evaluations); i++ {
		scalar := &evaluations[i]

		if scalar.IsZero() {
			continue
		}

		table := p.inner[i]
		scalar_bytes_le := scalar.BytesLE()

		for row, byte := range scalar_bytes_le {
			var tp = table.point(row, byte)
			result.Add(&result, tp)
		}
	}
	return &result
}

type LagrangeTablePoints struct {
	identity Element // TODO We can save memory by removing this
	matrix   []Element
}

func (ltp LagrangeTablePoints) Equal(other LagrangeTablePoints) bool {
	if len(ltp.matrix) != len(other.matrix) {
		return false
	}

	if ltp.identity != other.identity {
		return false
	}

	for i := 0; i < len(ltp.matrix); i++ {
		if !ltp.matrix[i].Equal(&other.matrix[i]) {
			return false
		}
	}
	return true
}

func newLagrangeTablePoints(point Element) *LagrangeTablePoints {
	num_rows := 32
	// We use base 256
	base_int := 256

	var base fr.Element
	base.SetUint64(256)

	base_row := compute_base_row(point, (base_int - 1))

	var rows []Element
	rows = append(rows, base_row...)

	var scale = base
	// TODO: we can do this in parallel
	for i := 1; i < num_rows; i++ {

		scaled_row := scale_row(base_row, scale)
		rows = append(rows, scaled_row...)
		scale.Mul(&scale, &base)
	}

	var identity Element
	identity.Identity()
	return &LagrangeTablePoints{
		identity: identity,
		matrix:   rows,
	}
}

func (ltp *LagrangeTablePoints) point(index int, value uint8) *Element {
	if value == 0 {
		return &ltp.identity
	}
	return &ltp.matrix[uint(index*255)+uint(value-1)]
}

func compute_base_row(point Element, num_points int) []Element {

	row := make([]Element, num_points)
	row[0] = point

	for i := 1; i < num_points; i++ {
		var row_i Element
		row_i.Add(&row[i-1], &point)
		row[i] = row_i
	}
	return row
}

func scale_row(points []Element, scale fr.Element) []Element {
	scaled_points := make([]Element, len(points))
	for i := 0; i < len(points); i++ {

		scaled_points[i].ScalarMul(&points[i], &scale)
	}
	return scaled_points
}
