const mobileMenu = document.querySelector(".js-menu-container");
const openMenuBtn = document.querySelector(".js-open-menu");
const closeMenuBtn = document.querySelector(".js-close-menu");
const toggleMenu = () => {
  // document.body.classList.toggle("no-scroll");
  mobileMenu.classList.toggle("is-open");
};
openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);
// Close the mobile menu on wider screens if the device orientation changes
window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
  if (!e.matches) return;
  mobileMenu.classList.remove("is-open");
  // document.body.classList.remove("no-scroll");
});

var menuToggle = document.getElementById('menu-toggle');
var menu = document.getElementById('menu');
var menuLinks = menu.getElementsByTagName('a');

menuToggle.addEventListener('click', function() {
  menu.classList.toggle('is-open');
});

for (var i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener('click', function() {
    menu.classList.remove('is-open');
  });
}