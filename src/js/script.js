let logo,
	navbar,
	burgerBtn,
	menu,
	menuItems,
	menuLinks

const prepareDOMElements = () => {
	logo = document.querySelector('.navbar__logo')
	navbar = document.querySelector('.navbar')
	burgerBtn = document.querySelector('.navbar__burger-btn')
	menu = document.querySelector('.navbar__list')
	menuItems = document.querySelectorAll('.navbar__item')
	menuLinks = document.querySelectorAll('.navbar__item a')
}

const prepareDOMEvents = () => {
	burgerBtn.addEventListener('click', showMenu)
	logo.addEventListener('click', closeMenu)
	menuItems.forEach(item => item.addEventListener('click', closeMenu))
	menuLinks.forEach(link => link.addEventListener('click', handleActiveClass))
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
prepareDOMElements()
prepareDOMEvents()