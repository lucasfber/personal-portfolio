let btnMenu = document.querySelector(".btn-menu")
let menu = document.querySelector(".menu")
let navLink = document.querySelector(".nav-links__link")

btnMenu.addEventListener("click", function() {
  toggleMenu(this, menu)
})

function toggleMenu(btnMenu, menu) {
  btnMenu.classList.toggle("close")
  menu.classList.toggle("open")
}

navLink.addEventListener("click", function() {
  toggleMenu(btnMenu, menu)
})

//function disposeMenu() {}
