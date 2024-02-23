package banderwagon

import (
	"bytes"
	"encoding/hex"
	"testing"

	"github.com/crate-crypto/go-ipa/bandersnatch"
	"github.com/crate-crypto/go-ipa/bandersnatch/fp"
	"github.com/crate-crypto/go-ipa/bandersnatch/fr"
)

func TestEncodingFixedVectors(t *testing.T) {
	t.Parallel()

	expected_bit_strings := [16]string{
		"4a2c7486fd924882bf02c6908de395122843e3e05264d7991e18e7985dad51e9",
		"43aa74ef706605705989e8fd38df46873b7eae5921fbed115ac9d937399ce4d5",
		"5e5f550494159f38aa54d2ed7f11a7e93e4968617990445cc93ac8e59808c126",
		"0e7e3748db7c5c999a7bcd93d71d671f1f40090423792266f94cb27ca43fce5c",
		"14ddaa48820cb6523b9ae5fe9fe257cbbd1f3d598a28e670a40da5d1159d864a",
		"6989d1c82b2d05c74b62fb0fbdf8843adae62ff720d370e209a7b84e14548a7d",
		"26b8df6fa414bf348a3dc780ea53b70303ce49f3369212dec6fbe4b349b832bf",
		"37e46072db18f038f2cc7d3d5b5d1374c0eb86ca46f869d6a95fc2fb092c0d35",
		"2c1ce64f26e1c772282a6633fac7ca73067ae820637ce348bb2c8477d228dc7d",
		"297ab0f5a8336a7a4e2657ad7a33a66e360fb6e50812d4be3326fab73d6cee07",
		"5b285811efa7a965bd6ef5632151ebf399115fcc8f5b9b8083415ce533cc39ce",
		"1f939fa2fd457b3effb82b25d3fe8ab965f54015f108f8c09d67e696294ab626",
		"3088dcb4d3f4bacd706487648b239e0be3072ed2059d981fe04ce6525af6f1b8",
		"35fbc386a16d0227ff8673bc3760ad6b11009f749bb82d4facaea67f58fc60ed",
		"00f29b4f3255e318438f0a31e058e4c081085426adb0479f14c64985d0b956e0",
		"3fa4384b2fa0ecc3c0582223602921daaa893a97b64bdf94dcaa504e8b7b9e5f",
	}
	var points []Element
	point := Generator
	// Check encoding is as expected
	for i := 0; i < 16; i++ {
		byts := point.Bytes()
		if expected_bit_strings[i] != hex.EncodeToString(byts[:]) {
			t.Fatal("bit string does not match expected")
		}
		points = append(points, point)
		point.Double(&point)
	}

	// Decode each bit string
	for i, bit_string := range expected_bit_strings {
		bytes, err := hex.DecodeString(bit_string)
		if err != nil {
			t.Fatal("could not decode bit string")
		}

		var element Element
		err = element.SetBytes(bytes)
		if err != nil {
			t.Fatal("could not decode bit string")
		}

		if !element.Equal(&points[i]) {
			t.Fatal("decoded element is different to expected element")
		}
	}
}

func TestTwoTorsionEqual(t *testing.T) {
	t.Parallel()

	// Points that differ by a two torsion point
	// are equal, where the two torsion point is not the point at infinity
	two_torsion := Element{
		inner: bandersnatch.PointProj{
			X: fp.Zero(),
			Y: fp.MinusOne(),
			Z: fp.One(),
		},
	}
	point := Generator
	for i := 0; i < 1000; i++ {

		var point_plus_torsion Element
		point_plus_torsion.Add(&point, &two_torsion)

		if !point.Equal(&point_plus_torsion) {
			t.Fatal("points that differ by an order-2 point should be equal")
		}

		expected_bit_string := point.Bytes()
		got_bit_string := point_plus_torsion.Bytes()
		if expected_bit_string != got_bit_string {
			t.Fatal("points that differ by an order-2 point should produce the same bit string")
		}

		point.Double(&point)
	}
}

func TestPointAtInfinityComponent(t *testing.T) {
	t.Parallel()

	// These are all points which will be shown to be on the curve
	// but are not in the correct subgroup
	bad_byte_strings := [16]string{
		"280e608d5bbbe84b16aac62aa450e8921840ea563f1c9c266e0240d89cbe6a78",
		"1b6989e2393c65bbad7567929cdbd72bbf0218521d975b0fb209fba0ee493c32",
		"31468782818807366dbbcd20b9f10f0d5b93f22e33fe49b450dfbddaf3ba6a9b",
		"6bfc4097e4874cdddebe74e041fcd329d8455278cd42b6dd4f40b042d4fc466b",
		"65dc0a9730cce485d82b230ce32c7c21688967c8943b4a51ba468f927e2e28ef",
		"0fd3536157199b46617c3fba4bae1c2ffab5409dfea1de62161bc10748651671",
		"5bdc73f43e90ae5c2956320ce2ef2b17809b11d6b9758c7861793b41f39b7c01",
		"23a89c778ee10b9925ad3df5dc1f7ab244c1daf305669bc6b03d1aaa100037a4",
		"67505814852867356aaa8387896efa1d1b9a72aad95549e53e69c15eb36a642c",
		"301bc9b1129a727c2a65b96f55a5bcd642a3d37e0834196863c4430e4281dc3a",
		"45d08715ac67ebb088bcfa3d04bcce76510edeb9e23f12ed512894ba1e6518fc",
		"0b3b6e1f8ec72e63c6aa7ae87628071df3d82ea2bea6516d1948dac2edc12179",
		"72430a05f507747aa5a42481b4f93522aa682b1d56e5285f089aa1b5fb09c67a",
		"5eb4d3e5ce8107c6dd7c6398f2a903a0df75ce655939c29a3e309f43fe5bcd1f",
		"6671109a7a15f4852ead3298318595a36010930fddbd3c8f667c6390e7ac3c66",
		"120faa1df94d5d831bbb69fc44816e25afd27288a333299ac3c94518fd0e016f",
	}

	for _, bad_byte_string := range bad_byte_strings {
		var element Element
		byts, err := hex.DecodeString(bad_byte_string)
		if err != nil {
			t.Fatal("could not decode bit string")
		}

		err = element.SetBytes(byts)
		if err == nil {
			t.Fatal("point should not be in the correct subgroup as it has an infinity component")
		}
	}
}

func TestAddSubDouble(t *testing.T) {
	t.Parallel()

	var A, B Element

	A.Add(&Generator, &Generator)
	B.Double(&Generator)

	if A.Equal(&Generator) {
		t.Fatal("The generator should not have order < 2")
	}

	if !A.Equal(&B) {
		t.Fatal("Add and Double formulae do not match")
	}

	A.Sub(&A, &B)
	if !A.Equal(&Identity) {
		t.Fatal("Sub formula is incorrect; any point minus itself should give the identity point")
	}
}

func TestSerde(t *testing.T) {
	t.Parallel()

	var point Element
	var point_aff bandersnatch.PointAffine

	point.Add(&Generator, &Generator)
	point_aff.FromProj(&point.inner)

	var buf bytes.Buffer

	if _, err := bandersnatch.WriteUncompressedPoint(&buf, &point_aff); err != nil {
		t.Fatalf("could not write uncompressed point: %s", err)
	}
	got, err := bandersnatch.ReadUncompressedPoint(&buf)
	if err != nil {
		t.Fatal("could not read uncompressed point")
	}

	if !point_aff.Equal(&got) {
		t.Fatal("deserialised point does not equal serialised point ")
	}
}

func TestBatchElementsToBytes(t *testing.T) {
	t.Parallel()

	var A, B Element

	A.Add(&Generator, &Generator)
	B.Double(&Generator)

	expected_serialised_a := A.Bytes()
	expected_serialised_b := B.Bytes()

	serialised_points := ElementsToBytes(&A, &B)

	got_serialised_a := serialised_points[0]
	got_serialised_b := serialised_points[1]
	if expected_serialised_a != got_serialised_a {
		t.Fatal("expected serialised point of A is incorrect ")
	}
	if expected_serialised_b != got_serialised_b {
		t.Fatal("expected serialised point of B is incorrect ")
	}
}

func TestMultiMapToBaseField(t *testing.T) {
	t.Parallel()

	var A, B Element

	A.Add(&Generator, &Generator)
	B.Double(&Generator)
	B.Double(&B)

	var expected_a, expected_b fr.Element
	A.MapToScalarField(&expected_a)
	B.MapToScalarField(&expected_b)

	var ARes, BRes fr.Element
	scalars := []*fr.Element{&ARes, &BRes}
	if err := BatchMapToScalarField(scalars, []*Element{&A, &B}); err != nil {
		t.Fatalf("could not batch map to scalar field: %s", err)
	}

	got_a := scalars[0]
	got_b := scalars[1]
	if !expected_a.Equal(got_a) {
		t.Fatal("expected scalar for point `A` is incorrect ")
	}

	if !expected_b.Equal(got_b) {
		t.Fatal("expected scalar for point `A` is incorrect ")
	}
}

func TestBatchNormalize(t *testing.T) {
	t.Parallel()

	t.Run("three points", func(t *testing.T) {
		t.Parallel()

		var A, B, C Element

		// Generate some projective points.
		A.Add(&Generator, &Generator)
		B.Double(&A)
		C.Double(&B)

		// Get expected result by normalizing them independently (i.e: usual FromProj(..) method under the hood).
		var expectedA, expectedB, expectedC Element
		if err := expectedA.Set(&A).Normalize(); err != nil {
			t.Fatalf("could not normalize point A: %s", err)
		}
		if err := expectedB.Set(&B).Normalize(); err != nil {
			t.Fatalf("could not normalize point A: %s", err)
		}
		if err := expectedC.Set(&C).Normalize(); err != nil {
			t.Fatalf("could not normalize point A: %s", err)
		}
		if err := BatchNormalize([]*Element{&A, &B, &C}); err != nil {
			t.Fatalf("could not batch normalize: %s", err)
		}

		if !A.Equal(&expectedA) {
			t.Fatal("expected point `A` is incorrect ")
		}

		if !B.Equal(&expectedB) {
			t.Fatal("expected point `B` is incorrect ")
		}

		if !C.Equal(&expectedC) {
			t.Fatal("expected point `C` is incorrect ")
		}
	})

	t.Run("duplicated elements", func(t *testing.T) {
		t.Parallel()

		var A, B Element
		A.Add(&Generator, &Generator)
		B.Double(&A)

		var expectedA, expectedB Element
		if err := expectedA.Set(&A).Normalize(); err != nil {
			t.Fatalf("could not normalize point A: %s", err)
		}
		if err := expectedB.Set(&B).Normalize(); err != nil {
			t.Fatalf("could not normalize point A: %s", err)
		}

		if err := BatchNormalize([]*Element{&A, &A, &B, &A}); err != nil {
			t.Fatalf("could not batch normalize: %s", err)
		}

		if !A.Equal(&expectedA) {
			t.Fatal("expected point `A` is incorrect ")
		}
		if !B.Equal(&expectedB) {
			t.Fatal("expected point `B` is incorrect ")
		}
	})

	t.Run("point at infinity", func(t *testing.T) {
		t.Parallel()

		var A, B Element

		A.Add(&Generator, &Generator)
		B = Element{
			inner: bandersnatch.PointProj{
				X: fp.Zero(),
				Y: fp.One(),
				Z: fp.Zero(),
			},
		}

		var expectedA, expectedB Element
		if err := expectedA.Set(&A).Normalize(); err != nil {
			t.Fatalf("could not normalize point A: %s", err)
		}
		if err := expectedB.Set(&B).Normalize(); err == nil {
			t.Fatal("points at infinity can't be normalized")
		}

		if err := BatchNormalize([]*Element{&A, &B}); err == nil {
			t.Fatal("points at infinity can't be normalized")
		}
	})
}

func TestBytesUncompressSerializeDeserialize(t *testing.T) {
	t.Parallel()

	var point Element
	point.Add(&Generator, &Generator)
	point.Double(&Generator)

	bytesUncompressed := point.BytesUncompressedTrusted()

	var point2 Element

	// Trying to deserialize the from an untrusted source would mean that the Y coordinate would be checked from
	// the EC formula. This would reject the point since BytesUncompressedTrusted() doesn't consider the Y coordinate sign.
	if err := point2.SetBytesUncompressed(bytesUncompressed[:], false); err == nil {
		t.Fatalf("the point must be rejected since the serialized bytes didn't consider the Y coordinate sign")
	}

	// Deserializing with the trusted flag, must succeed since it's simply deserializing the x and y coordinate directly
	// without subgroup or lexicographic checks.
	if err := point2.SetBytesUncompressed(bytesUncompressed[:], true); err != nil {
		t.Fatalf("could not deserialize point: %s", err)
	}
	if !point.Equal(&point2) {
		t.Fatalf("deserialized point does not match original point")
	}
}

func TestSetUncompressedFail(t *testing.T) {
	t.Parallel()
	one := fp.One()

	t.Run("X not in curve", func(t *testing.T) {
		startX := one
		// Find in startX a point that isn't in the curve
		for {
			point := bandersnatch.GetPointFromX(&startX, true)
			if point == nil {
				break
			}
			startX.Add(&startX, &one)
			continue
		}
		var serializedPoint [UncompressedSize]byte
		xBytes := startX.Bytes()
		yBytes := Generator.inner.Y.Bytes() // Use some valid-ish Y, but this shouldn't matter much.
		copy(serializedPoint[:], xBytes[:])
		copy(serializedPoint[CompressedSize:], yBytes[:])

		var point2 Element
		if err := point2.SetBytesUncompressed(serializedPoint[:], false); err == nil {
			t.Fatalf("the point must be rejected")
		}
	})

	t.Run("wrong Y", func(t *testing.T) {
		gen := Generator
		// Despite X would lead to a point in the curve,
		// we modify Y+1 to check the provided (serialized) Y
		// coordinate isn't trusted blindly.
		gen.inner.Y.Add(&gen.inner.Y, &one)

		pointBytes := gen.BytesUncompressedTrusted()
		var point2 Element
		if err := point2.SetBytesUncompressed(pointBytes[:], false); err == nil {
			t.Fatalf("the point must be rejected")
		}
	})
}

func FuzzDeserializationCompressed(f *testing.F) {
	f.Fuzz(func(t *testing.T, serializedpoint []byte) {
		var point Element
		err := point.SetBytes(serializedpoint)
		if err != nil {
			return
		}
		reserialized := point.Bytes()
		if !bytes.Equal(serializedpoint, reserialized[:]) {
			t.Fatalf("reserialized point does not match original point")
		}
	})
}

func FuzzDeserializationUncompressed(f *testing.F) {
	f.Fuzz(func(t *testing.T, serializedpoint []byte) {
		var point Element
		_ = point.SetBytes(serializedpoint)
	})
}
