package common_test

import (
	"bytes"
	"encoding/hex"
	"testing"

	"github.com/crate-crypto/go-ipa/common"
)

func TestJavaRegressionOneEndian(t *testing.T) {
	hexStr := "f6e31f7a565a390b48fdd24569ac10d43562d19de37ea951c7f9f250a339d059"
	byteArray := hexStrToBytes(hexStr)
	_scalar, err := common.ReadScalar(bytes.NewReader(byteArray))
	if err != nil {
		t.Fatalf(err.Error())
	}
	_ = _scalar
}
func TestJavaRegressionOtherEndian(t *testing.T) {
	hexStr := "f6e31f7a565a390b48fdd24569ac10d43562d19de37ea951c7f9f250a339d059"
	byteArray := hexStrToBytes(hexStr)
	reverse(byteArray)
	_scalar, err := common.ReadScalar(bytes.NewReader(byteArray))
	if err != nil {
		t.Fatalf(err.Error())
	}
	_ = _scalar
}

func reverse(data []byte) {
	for i, j := 0, len(data)-1; i < j; i, j = i+1, j-1 {
		data[i], data[j] = data[j], data[i]
	}
}

func hexStrToBytes(numStr string) []byte {

	// Use Hex package
	byteArray, err := hex.DecodeString(numStr)
	if err != nil {
		panic(err)
	}
	return byteArray
}
