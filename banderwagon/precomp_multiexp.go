package banderwagon

import (
	"encoding/binary"
	"io"
	"sync"

	"github.com/crate-crypto/go-ipa/bandersnatch"
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
			p.WriteUncompressedPoint(w)
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
		pcl.inner[i].matrix = make([]bandersnatch.PointAffine, rowLen)
		for j := int64(0); j < rowLen; j++ {
			pcl.inner[i].matrix[j] = bandersnatch.ReadUncompressedPoint(reader)
		}
	}

	return &pcl, nil
}

func (p *PrecomputeLagrange) Commit(evaluations []fr.Element) Element {
	return p.commit(evaluations, 0)
}

func (p *PrecomputeLagrange) CommitParallel(evaluations []fr.Element) Element {
	const batchSize = 4
	numBatches := (len(evaluations) + batchSize - 1) / batchSize

	resultsContainer := [256 / batchSize]Element{}
	results := resultsContainer[:numBatches]
	for i := 0; i < len(results); i++ {
		results[i].Identity()
	}

	var wg sync.WaitGroup
	wg.Add(numBatches)
	for i := 0; i < numBatches; i++ {
		i := i
		start := i * batchSize
		end := (i + 1) * batchSize
		if end > len(evaluations) {
			end = len(evaluations)
		}
		go func() {
			results[i] = p.commit(evaluations[start:end], start)
			wg.Done()
		}()
	}
	wg.Wait()

	for i := 1; i < numBatches; i++ {
		results[0].Add(&results[0], &results[i])
	}
	return results[0]
}

func (p *PrecomputeLagrange) commit(evaluations []fr.Element, start int) Element {
	var result Element
	result.Identity()

	for i := 0; i < len(evaluations); i++ {
		scalar := &evaluations[i]

		if scalar.IsZero() {
			continue
		}

		table := p.inner[i+start]
		scalar_bytes_le := scalar.BytesLE()

		for row, byte := range scalar_bytes_le {
			if byte == 0 {
				continue
			}
			tp := table.point(row, byte)
			result.AddMixed(&result, *tp)
		}
	}
	return result
}

type LagrangeTablePoints struct {
	identity bandersnatch.PointAffine // TODO We can save memory by removing this
	matrix   []bandersnatch.PointAffine
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

	scale := base
	// TODO: we can do this in parallel
	for i := 1; i < num_rows; i++ {

		scaled_row := scale_row(base_row, scale)
		rows = append(rows, scaled_row...)
		scale.Mul(&scale, &base)
	}
	rows_affine := elements_to_affine(rows)
	var identity bandersnatch.PointAffine
	identity.Identity()
	return &LagrangeTablePoints{
		identity: identity,
		matrix:   rows_affine,
	}
}

func (ltp *LagrangeTablePoints) point(index int, value uint8) *bandersnatch.PointAffine {
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
		scaled_points[i].Normalise()
	}
	return scaled_points
}

func elements_to_affine(points []Element) []bandersnatch.PointAffine {
	affine_points := make([]bandersnatch.PointAffine, len(points))

	for index, point := range points {
		var affine bandersnatch.PointAffine
		affine.FromProj(&point.inner)
		affine_points[index] = affine
	}

	return affine_points
}
