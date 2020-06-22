const titulos = document.getElementsByClassName('titulo')
const titulosArray = Array.from(titulos)
titulosArray.forEach(function (item) {
  console.log(item)
})

// EXERCÍCIOS

// Mostre no console cada parágrafo do site
const paragrafo = document.querySelectorAll('p')
console.log(paragrafo)

// Mostre o texto dos parágrafos no console


// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);