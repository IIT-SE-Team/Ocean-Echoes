// navbar.js

const currentUrl = window.location.pathname.split("/").pop(); 


window.addEventListener('scroll', () => {
  const header = document.getElementById('main-header');
  const navLinks = document.querySelectorAll('#navbar a');
  
  if (window.scrollY > 700) {
    header.style.background = '#005f92'; 
    navLinks.forEach(link => {
      link.style.color = ''; 
    });
  } else {
    header.style.background = 'transparent'; 
    navLinks.forEach(link => {
      link.style.color = '#FBFFF4'; 
    });
  }
});

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('#navbar a').forEach(link => { link.style.color = '#FBFFF4'; });
  document.getElementById('main-header').style.background = 'transparent';
})



document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("#navbar ul li a");

    navLinks.forEach(link => {
      if (link.getAttribute("href") === currentUrl) {
        link.classList.add("selected");
      } else {
        link.classList.remove("selected");
      }
    });
  });
