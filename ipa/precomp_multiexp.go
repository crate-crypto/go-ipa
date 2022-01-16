package ipa

import (
	"runtime"

	"github.com/crate-crypto/go-ipa/bandersnatch/fr"
	"github.com/crate-crypto/go-ipa/banderwagon"
	"github.com/crate-crypto/go-ipa/common/parallel"
)

type PrecomputeLagrange struct {
	inner      []*LagrangeTablePoints
	num_points int
}

func NewPrecomputeLagrange(points []banderwagon.Element) *PrecomputeLagrange {
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

func (p *PrecomputeLagrange) Commit(evaluations []fr.Element) *banderwagon.Element {

	nbTasks := runtime.NumCPU()
	chPartialResults := make(chan banderwagon.Element, nbTasks)
	parallel.Execute(len(evaluations), func(start, end int) {
		var partial_result banderwagon.Element
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
				partial_result.Add(&partial_result, tp)
			}
		}

		chPartialResults <- partial_result

	}, nbTasks)

	// Aggregate Parallel Results

	close(chPartialResults)
	var result banderwagon.Element
	result.Identity()
	for partial := range chPartialResults {
		result.Add(&result, &partial)
	}

	return &result
}

type LagrangeTablePoints struct {
	identity banderwagon.Element
	matrix   []banderwagon.Element
}

func newLagrangeTablePoints(point banderwagon.Element) *LagrangeTablePoints {
	num_rows := 32
	// We use base 256
	base_int := 256

	var base fr.Element
	base.SetUint64(256)

	base_row := compute_base_row(point, (base_int - 1))

	var rows []banderwagon.Element
	rows = append(rows, base_row...)

	var scale = base
	for i := 1; i < num_rows; i++ {

		scaled_row := scale_row(base_row, scale)
		rows = append(rows, scaled_row...)
		scale.Mul(&scale, &base)
	}

	var identity banderwagon.Element
	identity.Identity()
	return &LagrangeTablePoints{
		identity: identity,
		matrix:   rows,
	}
}

// TODO: double check if index is needed
func (ltp *LagrangeTablePoints) point(index int, value uint8) *banderwagon.Element {
	if value == 0 {
		return &ltp.identity
	}
	return &ltp.matrix[uint(index*255)+uint(value-1)]
}

func compute_base_row(point banderwagon.Element, num_points int) []banderwagon.Element {

	row := make([]banderwagon.Element, num_points)
	row[0] = point

	for i := 1; i < num_points; i++ {
		var row_i banderwagon.Element
		row_i.Add(&row[i-1], &point)
		row[i] = row_i
	}
	return row
}

func scale_row(points []banderwagon.Element, scale fr.Element) []banderwagon.Element {
	scaled_points := make([]banderwagon.Element, len(points))
	for i := 0; i < len(points); i++ {

		scaled_points[i].ScalarMul(&points[i], &scale)
	}
	return scaled_points
}
