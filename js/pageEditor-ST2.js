// page-editor.js

document.addEventListener('DOMContentLoaded', function() {   
    // Highlight the current navigation item
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (currentPath.includes(linkPath) && linkPath !== 'index.html') {
            link.setAttribute('aria-current', 'page');
            link.classList.add('active');
        }
    });
    
    // Add target="_blank" to external links
    const externalLinks = document.querySelectorAll('a[href^="https://"]');
    externalLinks.forEach(link => {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    });
});