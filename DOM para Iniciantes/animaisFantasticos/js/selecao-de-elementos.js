// EXERCÍCIO
// Retorne no console todas as imagens do site
const imagensSite = document.querySelectorAll('.grid-section img')
console.log(imagensSite)

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagem = document.querySelectorAll('img[src^="assets/imagem"]')
console.log(imagem)

// Selecione todos os links internos (onde o href começa com #)
const linkInterno = document.querySelectorAll('[href^="#"')
console.log(linkInterno)

// Selecione o primeiro h2 dentro de .animais-descricao
const segundoTitulo = document.querySelector('.animais-descricao h2')
console.log(segundoTitulo)

// Selecione o último p do site
const ultimoParagrafo = document.querySelectorAll('p')
console.log(ultimoParagrafo[ultimoParagrafo.length - 1])