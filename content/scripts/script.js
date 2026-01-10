const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("mobileNav");

toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    nav.classList.toggle("active");
});