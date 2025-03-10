// pageEditor-ST3.js

document.addEventListener("DOMContentLoaded", function() {
    const loaderWrapper = document.querySelector('.loader-wrapper');
    
    if (loaderWrapper) {
        setTimeout(() => {
            loaderWrapper.classList.add('fade-out');
            setTimeout(() => {
                loaderWrapper.style.display = 'none';
                // Start section animations after loader is gone
                animateSections();
            }, 500);
        }, 1500);
    } else {
        
        animateSections();
    }
    
    // Handle section animations on scroll
    function animateSections() {
        const sections = document.querySelectorAll('.section, .editor-section');
        const subsections = document.querySelectorAll('.subsection');
        
        checkSections();
        
        window.addEventListener('scroll', throttle(checkSections, 200));
        
        function checkSections() {
            sections.forEach(section => {
                if (isElementInViewport(section)) {
                    section.classList.add('active');
                }
            });
            
            subsections.forEach(subsection => {
                if (isElementInViewport(subsection)) {
                    subsection.classList.add('active');
                }
            });
        }
    }
    
    // Throttle function to limit how often a function runs
    function throttle(callback, limit) {
        let waiting = false;
        return function() {
            if (!waiting) {
                callback();
                waiting = true;
                setTimeout(function() {
                    waiting = false;
                }, limit);
            }
        };
    }
    
    // Check if element is in viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }
    
    // Back to top button functionality
    const backToTopButton = document.getElementById('backToTop');
    
    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });
        
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    
    addPrintButton();
    
    // Add smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});