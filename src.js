const menuButton = document.getElementById("vertical-menu-button");
const darkModeToggle = document.getElementById("toggle-dark-mode");
const header = document.querySelector("header");
const body = document.body;
const form = document.querySelector("form");

let isMenuOpen = false;
let lastScrollTop = 0;

// Funkce pro mobilní menu
function toggleMobileMenu() {
    body.classList.toggle("m-menu");
    isMenuOpen = !isMenuOpen;
}

// Funkce pro dark mode
function toggleDarkMode() {
    body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", body.classList.contains("dark-mode") ? "enabled" : "disabled");
}

// Kontrola LocalStorage při načtení stránky (zapnutí dark mode)
if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
}

// Funkce pro schování/zobrazení headeru při scrollování
function handleScroll() {
    let scrollTop = window.scrollY;

    if (scrollTop > lastScrollTop) {
        // Posun dolů → schovat header
        header.classList.add("hidden");
        if (isMenuOpen) {
            toggleMobileMenu(); // Zavře menu, pokud je otevřené
        }
    } else {
        // Posun nahoru → zobrazit header
        header.classList.remove("hidden");
    }

    lastScrollTop = scrollTop;
}

// Event listenery
menuButton.addEventListener("click", toggleMobileMenu);
darkModeToggle.addEventListener("click", toggleDarkMode);
window.addEventListener("scroll", handleScroll);
