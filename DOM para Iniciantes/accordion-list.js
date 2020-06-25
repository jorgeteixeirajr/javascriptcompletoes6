function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt')
  const classeAtiva = 'ativo'
  if (accordionList.length) {
    accordionList[0].classList.add(classeAtiva)
    accordionList[0].nextElementSibling.classList.add(classeAtiva)

    function activeAccordion() {
      this.classList.toggle(classeAtiva)
      this.nextElementSibling.classList.toggle(classeAtiva)
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion)
    })
  }
}
initAccordion()