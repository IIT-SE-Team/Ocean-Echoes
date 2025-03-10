// Intersection Observer for animations
const sections = document.querySelectorAll('.section');
const animatedElements = document.querySelectorAll('.animate');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    observer.observe(section);
});

animatedElements.forEach(element => {
    observer.observe(element);
});

// Image Comparison Slider
const slider = document.querySelector('.slider-handle');
const beforeImage = document.querySelector('.img-top');
let isDown = false;

if (slider && beforeImage) {
    slider.addEventListener('mousedown', () => {
        isDown = true;
    });

    window.addEventListener('mouseup', () => {
        isDown = false;
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        const container = document.querySelector('.img-comparison-container');
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const containerWidth = container.offsetWidth;
        const position = (x / containerWidth) * 100;
        
        if (position > 0 && position < 100) {
            beforeImage.style.width = `${position}%`;
            slider.style.left = `${position}%`;
        }
    });

    // Touch events for mobile
    slider.addEventListener('touchstart', () => {
        isDown = true;
    });

    window.addEventListener('touchend', () => {
        isDown = false;
    });

    window.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        const container = document.querySelector('.img-comparison-container');
        const rect = container.getBoundingClientRect();
        const x = e.touches[0].clientX - rect.left;
        const containerWidth = container.offsetWidth;
        const position = (x / containerWidth) * 100;
        
        if (position > 0 && position < 100) {
            beforeImage.style.width = `${position}%`;
            slider.style.left = `${position}%`;
        }
    });
}

// Back to top button
const backToTopButton = document.getElementById('backToTop');

if (backToTopButton) {
    backToTopButton.style.opacity = '0';
    backToTopButton.style.transform = 'translateY(20px)';
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.style.opacity = '1';
            backToTopButton.style.transform = 'translateY(0)';
        } else {
            backToTopButton.style.opacity = '0';
            backToTopButton.style.transform = 'translateY(20px)';
        }
    });
    
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            
            // Also manually update active link when clicking
            document.querySelectorAll('.side-nav a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});

// Improved side navigation highlighting
function updateActiveSection() {
    // Get all sections with IDs
    const allSections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.side-nav a');
    
    // We need to determine which section is currently most visible in the viewport
    let mostVisibleSection = null;
    let maxVisibility = 0;
    
    // Get viewport height for visibility calculations
    const viewportHeight = window.innerHeight;
    
    // Check each section for visibility
    allSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        
        // Calculate how much of the section is visible in the viewport (in pixels)
        const visibleTop = Math.max(0, rect.top);
        const visibleBottom = Math.min(viewportHeight, rect.bottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        
        // Only consider sections that are at least 20% visible and have entered from the top
        if (visibleHeight > maxVisibility && rect.top < viewportHeight * 0.25) {
            maxVisibility = visibleHeight;
            mostVisibleSection = section;
        }
    });
    
    // Update navigation if we found a visible section
    if (mostVisibleSection) {
        const currentId = mostVisibleSection.getAttribute('id');
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${currentId}`) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Update the side navigation to match available sections
    const sideNav = document.querySelector('.side-nav ul');
    if (sideNav) {
        // Check for data visualization link and remove it if the section doesn't exist
        const dataVizLink = sideNav.querySelector('a[href="#data-visualization"]');
        const dataVizSection = document.getElementById('data-visualization');
        
        if (dataVizLink && !dataVizSection) {
            dataVizLink.parentElement.remove();
        }
    }
    
    // Set initial active section
    updateActiveSection();
    
    // Set active link based on URL hash if present
    const hash = window.location.hash;
    if (hash) {
        const activeLink = document.querySelector(`.side-nav a[href="${hash}"]`);
        if (activeLink) {
            document.querySelectorAll('.side-nav a').forEach(link => {
                link.classList.remove('active');
            });
            activeLink.classList.add('active');
        }
    }
});

// Update active section when scrolling 
let scrollTimer;
window.addEventListener('scroll', function() {
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(updateActiveSection, 50);
});

// Also update on resize \
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(updateActiveSection, 100);
});