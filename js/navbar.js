// navbar.js


window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  const navLinks = document.querySelectorAll('#navbar a');
  
  if (window.scrollY > 700) {
    header.style.background = '#b3d6e9'; 
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
  // document.querySelectorAll('#navbar a').forEach(link => { link.style.color = '#FBFFF4'; });
  document.getElementById('header').style.background = 'transparent';
})



document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("#navbar ul li a");
    const currentUrl = window.location.pathname.split("/").pop(); 

    navLinks.forEach(link => {
      if (link.getAttribute("href") === currentUrl) {
        link.classList.add("selected");
      } else {
        link.classList.remove("selected");
      }
    });
  });
