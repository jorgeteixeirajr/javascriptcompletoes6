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

// EXERCÍCIO

// Crie uma função para verificar se um valor é Truthy
function verdadeiro(teste) {
  if (teste === 'teste') {
    return true
  } else {
    return false
  }
}
console.log(verdadeiro('teste'))

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado) {
  return lado * 4
}
console.log(perimetroQuadrado(10))

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`
}
console.log(nomeCompleto('Jorge', 'Teixeira'))

// Crie uma função que verifica se um número é par
function ePar(numero) {
  var modulo = numero % 2
  if (modulo === 0) {
    return true
  } else {
    return false
  }
}
console.log(ePar(2))

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function argumento(origamid) {
  return (typeof origamid)
}
console.log(argumento('origamid'))

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.
addEventListener('click', function () {
  console.log(`Jorge Teixeira`)
})


// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);