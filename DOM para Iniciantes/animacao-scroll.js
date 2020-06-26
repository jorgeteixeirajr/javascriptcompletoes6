function scrollAnimation() {
  const sections = document.querySelectorAll('.js-scroll')
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top
        const sectionVisible = (sectionTop - windowMetade) < 0
        if (sectionVisible) {
          section.classList.add('ativo')
        }
      })
    }
    animaScroll()
  }

  window.addEventListener('scroll', animaScroll)
}
scrollAnimation()