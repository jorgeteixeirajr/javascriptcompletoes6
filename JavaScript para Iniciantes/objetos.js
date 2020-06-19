var pessoa = {
  nome: 'Jorge',
  idade: 25,
  cidade: 'Curitiba'
}

var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado
  },
  perimetro(lado) {
    return this.lados * lado
  }
}
console.log(quadrado.area(5))
console.log(quadrado.perimetro(5))

// EXERCÍCIO

// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome
var dadosPessoais = {
  nome: 'Jorge',
  sobrenome: 'Teixeira',
  idade: 25,
}

// Crie um método no objeto anterior, que mostre o seu nome completo
console.log(dadosPessoais.nome, dadosPessoais.sobrenome)

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}
carro.preco = 3000
console.log(carro)

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
  raca: 'Labrador',
  cor: 'Preto',
  idade: 10,
  lateAoVerHomem: true,
}
console.log(cachorro)