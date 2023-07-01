const { setTimeout } = require("timers")

let logo,
	navbar,
	burgerBtn,
	menu,
	menuItems,
	menuLinks,
	cardFrame,
	cardBtn

const prepareDOMElements = () => {
	logo = document.querySelector('.navbar__logo')
	navbar = document.querySelector('.navbar')
	burgerBtn = document.querySelector('.navbar__burger-btn')
	menu = document.querySelector('.navbar__list')
	menuItems = document.querySelectorAll('.navbar__item')
	menuLinks = document.querySelectorAll('.navbar__item a')
	cardFrame = document.querySelector('.card__frame')
	cardBtn = document.querySelector('.card__overlay')
}

const prepareDOMEvents = () => {
	burgerBtn.addEventListener('click', showMenu)
	logo.addEventListener('click', closeMenu)
	menuItems.forEach(item => item.addEventListener('click', closeMenu))
	menuLinks.forEach(link => link.addEventListener('click', handleActiveClass))
	cardBtn.addEventListener('mouseover', hideCardInfo)
	cardBtn.addEventListener('mouseout', showCardInfo)
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
const hideCardInfo = () => {
	cardFrame.style.visibility = 'hidden'
}
const showCardInfo = () => {
	cardFrame.style.visibility = 'visible'
}
prepareDOMElements()
prepareDOMEvents()