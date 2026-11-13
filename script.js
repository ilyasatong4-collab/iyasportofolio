// =========================
// MOBILE MENU
// =========================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }
});
}


// =========================
// CLOSE MENU AFTER CLICK
// =========================

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        if (navMenu && menuToggle) {
            navMenu.classList.remove("active");
            menuToggle.textContent = "☰";
        }

    });

});


// =========================
// FOOTER YEAR
// =========================

const year = document.getElementById("year");

if (year) year.textContent = new Date().getFullYear();


// =========================
// SCROLL EFFECT
// =========================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 30) {
        navbar.style.boxShadow =
            "0 5px 30px rgba(0, 0, 0, 0.25)";
    } else {
        navbar.style.boxShadow = "none";
    }

});