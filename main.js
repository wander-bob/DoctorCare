window.addEventListener('scroll', onScroll)
onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}
function activateMenuAtCurrentSection(section) {
  // Obter posição do scroll
  // innerheight - Obter o View port divido por 2
  // Somar ambos para identificar o posicionamento da tela
  const targetLine = scrollY + innerHeight / 2

  // Verificar se a seção passou da linha
  // Quais dados vou precisar?
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight

  // Se a sessão passar da linha
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
  const sectionEndsAt = sectionTop + sectionHeight

  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  const sectionBoudaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoudaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  const navId = document.getElementById('navigation')
  navId.classList.remove('scroll')
  if (scrollY > 0) {
    navId.classList.add('scroll')
  } else {
    navId.classList.remove('scroll')
  }
}
function showBackToTopButtonOnScroll() {
  backToTopButton.classList.remove('show')
  if (scrollY > 450) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}
function openMenu() {
  document.body.classList.add('menu-expanded')
}
function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({ origin: 'top', distance: '0px', duration: 800 }).reveal(`
#home, 
#home img, 
#home .itens, 
#services,
#services .card,
#about,
#about header,
#about content`)
