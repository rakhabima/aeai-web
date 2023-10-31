
// hamburger button navbar
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

const alert = document.querySelector("#alert");
const exitAlert = document.querySelector("#exitAlert");
const download = document.querySelector("#download");

download.addEventListener("click", () => {
  alert.classList.toggle("hidden");
})

exitAlert.addEventListener("click", () => {
  alert.classList.toggle("hidden");
})

