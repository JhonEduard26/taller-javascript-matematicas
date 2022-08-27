const ladoCuadrado = 5
const perimetroCuadrado = ladoCuadrado * 4
const areaCuadrado = ladoCuadrado * ladoCuadrado

console.group('cuadrado')
console.log({
  ladoCuadrado,
  perimetroCuadrado,
  areaCuadrado,
})
console.groupEnd()


const ladoTriangulo1 = 7
const ladoTriangulo2 = 7
const ladoTrianguloBase = 9

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase

function calcularAlturaTriangulo(ladoA, laboB, ladoBase) {
  let alturaTriangulo = 0
  let baseMitad = ladoBase / 2

  if (ladoA === laboB) {
    alturaTriangulo = ((ladoTriangulo1 ** 2) - baseMitad ** 2) ** 0.5
  }
  return alturaTriangulo
}

function calcularAreaTriangulo(ladoBase, alturaTriangulo) {
  return (ladoBase * alturaTriangulo) / 2
}

const alturaTriangulo = calcularAlturaTriangulo(ladoTriangulo1, ladoTriangulo2, ladoTrianguloBase)
const areaTriangulo = calcularAreaTriangulo(ladoTrianguloBase, alturaTriangulo)

console.group('triangulo')
console.log({
  ladoTriangulo1,
  ladoTriangulo2,
  ladoTrianguloBase,
  perimetroTriangulo,
  alturaTriangulo,
  areaTriangulo,
})
console.groupEnd()