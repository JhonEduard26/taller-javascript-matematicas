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
const ladoTrianguloBase = 7

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase

function calcularAlturaTriangulo(lados, base) {
  if (lados === base) {
    console.warn('No es un triangulo isósceles')
  } else {
    // h = raizCuadrada(lado ** 2 - (lado ** 2 / 4)
    return Math.sqrt((lados ** 2) - ((base ** 2) / 4))
  }
}

function calcularAlturaTrianguloEscaleno(base, ladoUno, ladoDos) {
  const semiperimetro = (base + ladoUno + ladoDos) / 2
  const altura = (2 / base) * Math.sqrt(semiperimetro * ((semiperimetro - base) * (semiperimetro - ladoUno) * (semiperimetro - ladoDos)))
  return altura
}

function calcularAreaTriangulo(ladoBase, alturaTriangulo) {
  return (ladoBase * alturaTriangulo) / 2
}

const alturaTriangulo = calcularAlturaTriangulo(ladoTriangulo1, ladoTrianguloBase)
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

console.group('circulo')

const radioCirculo = 3
const diametroCirculo = radioCirculo * 2

const circunferencia = diametroCirculo * Math.PI
const areaCirculo = (radioCirculo ** 2) * Math.PI
console.log({
  radioCirculo,
  diametroCirculo,
  circunferencia,
  areaCirculo,
})
console.groupEnd()