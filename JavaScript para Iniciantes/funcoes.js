function areaQuadrado(lado) {
  return lado * lado
}
console.log(areaQuadrado(2))

function pi() {
  return 3.14
}
var total = (5 * pi()).toFixed(2)
console.log(total)

function imc(peso, altura) {
  const imc = (peso / (altura ** 2)).toFixed(2)
  return imc
}
console.log(imc(120, 1.76))
console.log(imc(85, 1.66))

function corFavorita(cor) {
  if (cor === 'azul') {
    return 'Eu gosto do céu'
  } else if (cor === 'verde') {
    return 'Eu gosto de mato'
  } else {
    return 'Não gosto de cores'
  }
}
console.log(corFavorita(''))

function terceiraIdade(idade) {
  if (typeof idade !== 'number') {
    return 'Por favor preencha um número'
  } else if (idade >= 60) {
    return true
  } else {
    return false
  }
}
console.log(terceiraIdade(60))