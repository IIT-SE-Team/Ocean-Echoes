// Back to top button functionality
document.addEventListener('DOMContentLoaded', function() {
    
    // Enhance screenshot viewing (optional)
    const screenshots = document.querySelectorAll('.validation-screenshot img');
    
    screenshots.forEach(screenshot => {
        screenshot.addEventListener('click', () => {
            screenshot.classList.toggle('expanded');
            
            // If expanded class is added, apply styles for better viewing
            if (screenshot.classList.contains('expanded')) {
                screenshot.style.cursor = 'zoom-out';
                screenshot.style.maxWidth = '100%';
                screenshot.style.transform = 'scale(1.1)';
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