const href = window.location.href

console.log(href)

if (href === 'http://127.0.0.1:5500/DOM%20para%20Iniciantes/index.html') {
  console.log('É igual')
} else {
  console.log('Nada haver')
}

const h1Selecionado = document.querySelector('h1')
console.log(h1Selecionado)

const h1Classes = h1Selecionado.innerText
console.log(h1Classes)

function callbackh1() {
  console.log('Clicou e ficou dahora')
}

h1Selecionado.addEventListener('click', callbackh1)

// EXERCÍCIO
// Retorne o url da página atual utilizando o objeto window
const url = window.location.href
console.log(url)

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const ativo = document.querySelector('.ativo')
console.log(ativo.innerText)

// Retorne a linguagem do navegador
const linguagem = navigator.language
console.log(linguagem)

// Retorne a largura da janela 
const largura = window.innerWidth
console.log(largura)