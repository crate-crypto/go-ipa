package ipa

import (
	"encoding/hex"
	"fmt"
	"testing"
	"time"

	"github.com/crate-crypto/go-ipa/bandersnatch"
	"github.com/crate-crypto/go-ipa/bandersnatch/fr"
	"github.com/crate-crypto/go-ipa/banderwagon"
)

var resultSink bandersnatch.PointExtended

func TestAttack(t *testing.T) {
	ethAddr, err := hex.DecodeString("71562b71999873DB5b286dF957af199Ec94617f7")
	if err != nil {
		t.Fatalf("decoding hex: %s", err)
	}

	var prefix [31]byte // 0x00...00 prefix
	for i := 1; i <= 6; i++ {
		start := time.Now()
		treeIndex, err := Attack(ethAddr, prefix[:i])
		if err != nil {
			t.Fatalf("attack: %s", err)
		}
		fmt.Printf("Attack for prefix length %d took %s (treeIndex=%s)\n", i, time.Since(start), treeIndex.String())
	}
}

func BenchmarLinearPrecompScalarMul(b *testing.B) {
	pointsWagon := GenerateRandomPoints(256)

	pointA, err := banderwagon.NewPrecompPoint(pointsWagon[3], 16)
	if err != nil {
		b.Fatal(err)
	}

	b.ResetTimer()
	one := fr.One()
	var scalar banderwagon.Fr
	for i := 0; i < b.N; i++ {
		scalar.Add(&scalar, &one)
		pointA.ScalarMul(scalar, &resultSink)
	}
}
