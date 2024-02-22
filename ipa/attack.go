package ipa

import (
	"bytes"
	"context"
	"fmt"
	"math/big"
	"runtime"

	"github.com/crate-crypto/go-ipa/bandersnatch"
	"github.com/crate-crypto/go-ipa/bandersnatch/fr"
	"github.com/crate-crypto/go-ipa/banderwagon"
	"golang.org/x/sync/errgroup"
)

func init() {

}

func Attack(ethAddress []byte, wantedPrefix []byte) (big.Int, error) {
	// The first point of the tree key hash MSM can be precomputed.
	var getTreePolyIndex0Point banderwagon.Element
	err := getTreePolyIndex0Point.SetBytes([]byte{34, 25, 109, 242, 193, 5, 144, 224, 76, 52, 189, 92, 197, 126, 9, 145, 27, 152, 199, 130, 165, 3, 210, 27, 193, 131, 142, 28, 110, 26, 16, 191})
	if err != nil {
		panic(err)
	}

	config, err := NewIPASettings()
	if err != nil {
		return big.Int{}, fmt.Errorf("creating IPA settings: %s", err)
	}

	// Calculate the (fixed) scalars corresponding to the SC address, and the sum of the second and third MSM factors.
	var scalars [5]fr.Element

	if len(ethAddress) < 32 {
		var aligned [32]byte
		ethAddress = append(aligned[:32-len(ethAddress)], ethAddress...)
	}
	{
		var aligned [32]byte
		copy(aligned[:], ethAddress[:16])
		scalars[1].SetBytesLE(aligned[:])
		// fmt.Printf("scalar[1] = %x\n", scalars[1].Bytes())
	}
	{
		var aligned [32]byte
		copy(aligned[:], ethAddress[16:])
		scalars[2].SetBytesLE(aligned[:])
		// fmt.Printf("scalar[2] = %x\n", scalars[2].Bytes())
	}
	addrPoint := config.Commit(scalars[:])
	// fmt.Printf("BASE0: %x\n", addrPoint.Bytes())

	// In `baseMSMRes` we have the sum of the first 3 MSM factors. This point is the base
	// point for our attack iterations.
	var baseMSMRes banderwagon.Element
	baseMSMRes.Set(&getTreePolyIndex0Point)
	baseMSMRes.Add(&baseMSMRes, &addrPoint)
	// fmt.Printf("BASE1: %x\n", baseMSMRes.Bytes())

	// Get precomputed points for the fourth and fifth points of the MSM.
	precompTreeIndexLow, err := banderwagon.NewPrecompPoint(config.SRS[3], 16)
	if err != nil {
		return big.Int{}, fmt.Errorf("creating precomputed point for tree index high: %s", err)
	}

	baseMSMResExtended := bandersnatch.PointExtendedFromProj(&baseMSMRes.Inner)
	precompTreeIndexHigh, err := banderwagon.NewPrecompPoint(config.SRS[4], 16)
	if err != nil {
		return big.Int{}, fmt.Errorf("creating precomputed point for tree index high: %s", err)
	}
	bandersnatch.ExtendedAddNormalized(&baseMSMResExtended, &baseMSMResExtended, &precompTreeIndexHigh.Windows[7][0])

	group, ctx := errgroup.WithContext(context.Background())
	group.SetLimit(runtime.NumCPU())

	treeIndexChan := make(chan big.Int, 1)
	for window2Index := range precompTreeIndexLow.Windows[2] {
		window2Index := window2Index

		var basePointWindow2 bandersnatch.PointExtended
		basePointWindow2.Set(&baseMSMResExtended)
		bandersnatch.ExtendedAddNormalized(&basePointWindow2, &basePointWindow2, &precompTreeIndexLow.Windows[2][window2Index])

		group.Go(func() error {
			for window1Index := range precompTreeIndexLow.Windows[1] {
				var basePointWindow1 bandersnatch.PointExtended
				basePointWindow1.Set(&basePointWindow2)
				bandersnatch.ExtendedAddNormalized(&basePointWindow1, &basePointWindow1, &precompTreeIndexLow.Windows[1][window1Index])
				for window0Index := range precompTreeIndexLow.Windows[0] {
					if ctx.Err() != nil {
						return nil
					}

					var basePointWindow0 bandersnatch.PointExtended
					basePointWindow0.Set(&basePointWindow1)
					bandersnatch.ExtendedAddNormalized(&basePointWindow0, &basePointWindow0, &precompTreeIndexLow.Windows[0][window0Index])

					stem := PointToHash(&basePointWindow0)
					if bytes.HasPrefix(stem, wantedPrefix) {
						var treeIndex big.Int
						treeIndex.SetInt64(1)
						treeIndex.Lsh(&treeIndex, 128+5*16)

						treeIndex.Add(&treeIndex, big.NewInt(int64(window2Index+1)))
						treeIndex.Lsh(&treeIndex, 16)

						treeIndex.Add(&treeIndex, big.NewInt(int64(window1Index+1)))
						treeIndex.Lsh(&treeIndex, 16)

						treeIndex.Add(&treeIndex, big.NewInt(int64(window0Index+1)))

						select {
						case treeIndexChan <- treeIndex:
						default:
						}

						return fmt.Errorf("found match")
					}
				}
			}
			return nil
		})
	}

	if err := group.Wait(); err != nil {
		return <-treeIndexChan, nil
	}

	return big.Int{}, fmt.Errorf("no match found")

}

func PointToHash(evaluated *bandersnatch.PointExtended) []byte {
	pp := banderwagon.Element{
		Inner: bandersnatch.PointProj{
			X: evaluated.X,
			Y: evaluated.Y,
			Z: evaluated.Z,
		},
	}

	retb := pp.Bytes()
	for i := 0; i < 16; i++ {
		retb[31-i], retb[i] = retb[i], retb[31-i]
	}
	return retb[:]
}
