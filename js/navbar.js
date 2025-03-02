// navbar.js

function calculateSettingAsThemeString({ localStorageTheme }) {
  if (localStorageTheme !== null) {
    return localStorageTheme;
  }
  
  return "light";
}

const localStorageTheme = localStorage.getItem("theme");

const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme});

const button = document.querySelector("[data-theme-toggle]");

button.addEventListener("click", () => {
  const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

  console.log({newTheme});
  
  button.innerText = newTheme;


  button.setAttribute("aria-label", newTheme);

  document.querySelector("html").setAttribute("data-theme", newTheme);
  
  localStorage.setItem("theme", newTheme);
  
  currentThemeSetting = newTheme;
});

window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('#navbar a');
  
  if (window.scrollY > 700) {
    navbar.style.background = ''; 
    navLinks.forEach(link => {
      link.style.color = ''; 
    });
  } else {
    navbar.style.background = 'transparent'; 
    navLinks.forEach(link => {
      link.style.color = '#FBFFF4'; 
    });
  }
});

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('#navbar a').forEach(link => { link.style.color = '#FBFFF4'; });
  document.getElementById('navbar').style.background = 'transparent';
  document.querySelector("html").setAttribute("data-theme", localStorageTheme);
})


const openButton = document.getElementById('open-sidebar-button')
const navbar = document.getElementById('navbar')

const media = window.matchMedia("(width < 700px)")

media.addEventListener('change', (e) => updateNavbar(e))

function updateNavbar(e) {
    const isMobile = e.matches
    console.log(isMobile)
    if (isMobile) {
        navbar.setAttribute('inert', '')
    }
    else {
        // desktop device
        navbar.removeAttribute('inert')
    }
}

function openSidebar() {
    navbar.classList.add('show')
    openButton.setAttribute('aria-expanded', 'true')
    navbar.removeAttribute('inert')
}

function closeSidebar() {
    navbar.classList.remove('show')
    openButton.setAttribute('aria-expanded', 'false')
    navbar.setAttribute('inert', '')
}


updateNavbar(media)

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("#navbar ul li a");
    const currentUrl = window.location.pathname.split("/").pop(); // Get current page filename

    navLinks.forEach(link => {
      if (link.getAttribute("href") === currentUrl) {
        link.classList.add("selected");
      } else {
        link.classList.remove("selected");
      }
    });
  });
