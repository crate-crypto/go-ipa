gen-fr:
	go run github.com/consensys/gnark-crypto/field/goff@v0.11.0 -m 13108968793781547619861935127046491459309155893440570251786403306729687672801 -o bandersnatch/fr -p fr -e Element
.PHONY: gen-bandersnatch-fr