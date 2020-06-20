const href = window.location.href

console.log(href)

if (href === 'http://127.0.0.1:5500/DOM%20para%20Iniciantes/index.html') {
  console.log('É igual')
} else {
  console.log('Nada haver')
}

const h1Selecionado = document.querySelector('h1')
console.log(h1Selecionado)