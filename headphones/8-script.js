// Select the hamburger icon and the nav menu
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

// Toggle the "show" class on the nav menu when hamburger is clicked
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
