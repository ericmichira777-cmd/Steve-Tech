const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");
const social = document.getElementById("social-icon")

menuIcon.addEventListener("click", function () {
    navLinks.classList.toggle("show-menu");
    social.classList.toggle("show-icons")
});
