package fr

func Zero() Element {
	return Element{}
}

func SetBytesLE(e *Element, b []byte) *Element {
	for i, j := 0, len(b)-1; i < j; i, j = i+1, j-1 {
		b[i], b[j] = b[j], b[i]
	}
	return e.SetBytes(b)
}

func BytesLE(e Element) [Bytes]byte {
	var res [Bytes]byte
	LittleEndian.PutElement(&res, e)
	return res
}

func MinusOne() Element {
	mOne := One()
	mOne.Neg(&mOne)
	return mOne
}
