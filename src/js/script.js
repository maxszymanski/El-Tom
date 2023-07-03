let logo,
	navbar,
	burgerBtn,
	menu,
	menuItems,
	navLinks,
	sections,
	footerDate,
	cookieBox,
	cookieBtn

const prepareDOMElements = () => {
	logo = document.querySelector('.navbar__logo')
	navbar = document.querySelector('.navbar')
	burgerBtn = document.querySelector('.navbar__burger-btn')
	menu = document.querySelector('.navbar__list')
	menuItems = document.querySelectorAll('.navbar__item')
	navLinks = document.querySelectorAll('.navbar__item a')
	sections = document.querySelectorAll('.section')
	footerDate = document.querySelector('.footer__date')
	cookieBox = document.querySelector('.cookie-box')
	cookieBtn = document.querySelector('.cookie-btn')
}

const prepareDOMEvents = () => {
	burgerBtn.addEventListener('click', showMenu)
	logo.addEventListener('click', closeMenu)
	menuItems.forEach(item => item.addEventListener('click', closeMenu))
	navLinks.forEach(link => link.addEventListener('click', handleActiveClass))
	window.addEventListener('scroll',scrollSpy)
	cookieBtn.addEventListener('click', closeCookieBox)
}
const showMenu = () => {
	menu.classList.toggle('show-menu')
	burgerBtn.classList.toggle('is-active')
	document.body.classList.toggle('fixed-body')
}

const closeMenu = () => {
	burgerBtn.classList.remove('is-active')
	menu.classList.remove('show-menu')
	document.body.classList.remove('fixed-body')
}

const handleActiveClass = e => {
	menuItems.forEach(item => item.classList.remove('navbar__item--active'))
	e.target.parentElement.classList.add('navbar__item--active')
}
const scrollSpy = () => {
	sections.forEach(section => {
        let top = window.scrollY
        let offset = section.offsetTop - 90;
        let height = section.offsetHeight ;
        let id = section.getAttribute('id')
        if(top >= offset && top < offset + height) {
            menuItems.forEach(link => {
                link.classList.remove('navbar__item--active')
                document.querySelector('a[href*=' + id + ']').parentElement.classList.add('navbar__item--active')
            })
        }
    })
}
const currentDate = () => {
    let date = new Date().getFullYear();
	footerDate.textContent = date
}
const cookieCheck = () => {
	if (localStorage.getItem("cookie")) {
		cookieBox.classList.add("cookie-hidden");
	  }
}
const closeCookieBox = (params) => {
	localStorage.setItem("cookie", "true");
  cookieBox.classList.add("cookie-hidden")
}
prepareDOMElements()
prepareDOMEvents()
currentDate()
cookieCheck()