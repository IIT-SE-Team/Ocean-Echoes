// Back to top button functionality
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('backToTop');
    
    // Initially hide the button
    backToTopButton.style.opacity = '0';
    backToTopButton.style.transform = 'translateY(20px)';
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.opacity = '1';
            backToTopButton.style.transform = 'translateY(0)';
        } else {
            backToTopButton.style.opacity = '0';
            backToTopButton.style.transform = 'translateY(20px)';
        }
    });
    
    // Scroll to top when button is clicked
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Enhance screenshot viewing (optional)
    const screenshots = document.querySelectorAll('.validation-screenshot img');
    
    screenshots.forEach(screenshot => {
        screenshot.addEventListener('click', () => {
            screenshot.classList.toggle('expanded');
            
            // If expanded class is added, apply styles for better viewing
            if (screenshot.classList.contains('expanded')) {
                screenshot.style.cursor = 'zoom-out';
                screenshot.style.maxWidth = '100%';
                screenshot.style.transform = 'scale(1.05)';
                screenshot.style.transition = 'transform 0.3s ease';
                screenshot.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
            } else {
                screenshot.style.cursor = 'zoom-in';
                screenshot.style.transform = 'scale(1)';
                screenshot.style.boxShadow = 'none';
            }
        });
        
        // Set initial cursor style
        screenshot.style.cursor = 'zoom-in';
    });
});