

function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
    if (localStorageTheme !== null) {
        return localStorageTheme;
    }

    if (systemSettingDark.matches) {
        return "dark";
    }

    return "light";
}

const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });

const button = document.querySelector("[data-theme-toggle]");

button.addEventListener("click", () => {
    const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

    const newCta = newTheme === "dark" ? "Change to light theme" : "Change to dark theme";
    button.innerText = newTheme;


    button.setAttribute("aria-label", newCta);

    document.querySelector("html").setAttribute("data-theme", newTheme);

    localStorage.setItem("theme", newTheme);

    currentThemeSetting = newTheme;
});

window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('#navbar a'); 
  
    if (window.scrollY > 700) {
      navbar.style.background = ''; // Change background when scrolled past 700px
      navLinks.forEach(link => {
        link.style.color = ''; // Change font color to black
      });
    } else {
      navbar.style.background = 'transparent'; // Revert to default background (from stylesheet)
      navLinks.forEach(link => {
        link.style.color = '#FBFFF4'; // Revert to default font color (from stylesheet)
      });
    }
  });

  window.addEventListener('DOMContentLoaded', () =>{
    document.querySelectorAll('#navbar a').forEach(link => {link.style.color = '#FBFFF4';}); 
  document.getElementById('navbar').style.background ='transparent';
    
  })



