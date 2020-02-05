let btnMenu = document.querySelector(".btn-menu")
let menu = document.querySelector(".menu")

btnMenu.addEventListener("click", function() {
  this.classList.toggle("close")
  menu.classList.toggle("open")
})
