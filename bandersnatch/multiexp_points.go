package bandersnatch

type G1Affine struct {
	inner PointAffine
}

func (p *G1Affine) setInfinity() {
	panic("TODO")
}

func (p *G1Affine) IsInfinity() bool {
	panic("TODO")
}

func (p *G1Affine) Set(a *G1Affine) {
	panic("TODO")
}

func (p *G1Affine) Neg(a *G1Affine) {
	panic("TODO")
}

type G1Jac struct {
	inner PointProj
}

func (p *G1Jac) AddAssign(a *G1Jac) {
	p.inner.Add(&p.inner, &a.inner)
}

func (p *G1Jac) unsafeFromJacExtended(a *g1JacExtended) *G1Jac {
	panic("TODO")
}

type g1JacExtended struct {
}

func (je g1JacExtended) Set(a *g1JacExtended) {
	panic("TODO")
}

func (je g1JacExtended) double(a *g1JacExtended) {
	panic("TODO")
}

func (je *g1JacExtended) setInfinity() {
	panic("TODO")
}

func (je *g1JacExtended) addMixed(a *G1Affine) {
	panic("TODO")
}

func (je *g1JacExtended) subMixed(a *G1Affine) {
	panic("TODO")
}

func (je *g1JacExtended) add(a *g1JacExtended) {
	panic("TODO")
}
