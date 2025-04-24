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
  
});