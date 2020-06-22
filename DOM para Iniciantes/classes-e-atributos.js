const menu = document.querySelector('.menu')
const animais = document.querySelector('.animais')
const img = document.querySelectorAll('img')
const linkMenu = document.querySelectorAll('a[href^="https://"]')


// EXERCÍCIOS
// Adicione a classe ativo a todos os itens do menu
menu.classList.add('ativo')

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

// Verifique se as imagens possuem o atributo alt
img.forEach((item) => {
  console.log(item.hasAttribute('alt'))
})

// Modifique o href do link externo no menu
linkMenu.forEach((item) => {
  item.setAttribute('href', 'https://google.com.br')
})