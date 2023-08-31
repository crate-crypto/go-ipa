package fp

import (
	"testing"
)

func TestCustomSqrt(t *testing.T) {
	for i := 0; i < 10_000; i++ {
		// Take a random fp.
		var a Element
		a.SetUint64(uint64(i))

		// Calculate the square root with thew optimized algorithm.
		sqrtNew := SqrtPrecomp(&a)
		if sqrtNew == nil {
			continue // Doesn't exist? Skip.
		}

		// Recalculate the original element using the calculated sqrt.
		var regenNew Element
		regenNew.Mul(sqrtNew, sqrtNew)

		// Check the obvious: regenNew should be equal to the original element.
		if !regenNew.Equal(&a) {
			t.Fatalf("regenNew != a for %d", i)
		}

		// Calculate the sqrt with the original gnark code.
		var sqrtOld Element
		sqrtOld.Sqrt(&a)
		var regenOld Element
		regenOld.Mul(&sqrtOld, &sqrtOld)
		if !regenOld.Equal(&a) { // Somewhat obvious, but still.
			t.Fatalf("regenOld != a for %d", i)
		}

		// Check that both sqrt's are equal, *considering* the case that they have opposite signs.
		// We need to do that since both algorithm can return either the positive or negative sqrt,
		// which is fine.
		if !sqrtNew.Equal(&sqrtOld) && !sqrtNew.Neg(sqrtNew).Equal(&sqrtOld) {
			t.Fatalf("sqrtNew != sqrtOld for %d", i)
		}
	}
}
