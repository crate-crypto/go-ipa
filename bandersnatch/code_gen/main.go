package main

// import (
// 	"fmt"
// 	"os"

// 	"github.com/consensys/gnark-crypto/field/generator"
// 	"github.com/consensys/gnark-crypto/internal/field"
// )

// go run ./field/goff -m 52435875175126190479447740508185965837690552500527637822603658699938581184513 -o go-ipa-bls -p fr -e Element

// // export PATH=${PATH}:`go env GOPATH`/bin
// func main() {
// 	// p is the basefield of bandersnatch/ jubjub
// 	fp, _ := field.NewField("fp", "Element", "52435875175126190479447740508185965837690552500527637822603658699938581184513")
// 	err := generator.GenerateFF(fp, "./fp")
// 	if err != nil {
// 		fmt.Printf("\n%s\n", err.Error())
// 		os.Exit(-1)
// 	}
// 	// r is the scalar field of bandersnatch/ jubjub
// 	fr, _ := field.NewField("fr", "Element", "13108968793781547619861935127046491459309155893440570251786403306729687672801")
// 	err = generator.GenerateFF(fr, "./fr")
// 	if err != nil {
// 		fmt.Printf("\n%s\n", err.Error())
// 		os.Exit(-1)
// 	}

// }
