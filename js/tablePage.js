// JavaScript for the Table page

document.addEventListener('DOMContentLoaded', function() {
    // Add table interactions and enhancements
    
    // 1. Table row highlighting on hover with animation
    const tableRows = document.querySelectorAll('tbody tr');
    
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
    
    // 2. Enhanced tooltips for table headers
    const tableHeaders = document.querySelectorAll('th img[title]');
    
    tableHeaders.forEach(header => {
        header.addEventListener('mouseenter', function() {
            const tooltipText = this.getAttribute('title');
            const tooltip = document.createElement('div');
            tooltip.className = 'custom-tooltip';
            tooltip.textContent = tooltipText;
            
            // Position the tooltip
            const rect = this.getBoundingClientRect();
            tooltip.style.position = 'absolute';
            tooltip.style.top = `${rect.bottom + 5}px`;
            tooltip.style.left = `${rect.left}px`;
            tooltip.style.backgroundColor = '#333';
            tooltip.style.color = 'white';
            tooltip.style.padding = '5px 10px';
            tooltip.style.borderRadius = '4px';
            tooltip.style.fontSize = '0.85rem';
            tooltip.style.zIndex = '100';
            
            document.body.appendChild(tooltip);
            
            // Remove default title tooltip
            this.setAttribute('data-original-title', tooltipText);
            this.removeAttribute('title');
            
            // Store tooltip reference
            this.tooltip = tooltip;
        });
        
        header.addEventListener('mouseleave', function() {
            // Remove custom tooltip
            if (this.tooltip) {
                document.body.removeChild(this.tooltip);
                this.tooltip = null;
            }
            
            // Restore default title
            if (this.hasAttribute('data-original-title')) {
                this.setAttribute('title', this.getAttribute('data-original-title'));
                this.removeAttribute('data-original-title');
            }
        });
    });
    
    // 3. Initiative link effects
    const initiativeLinks = document.querySelectorAll('.initiative-link');
    
    initiativeLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the initiative name
            const initiativeName = this.textContent;
            
            // Create a modal dialog to show more information
            alert(`More information about ${initiativeName} will be available soon!`);
        });
    });
    
    // 4. Accessibility improvements for keyboard navigation
    const interactiveElements = document.querySelectorAll('a, th[title], td[title]');
    
    interactiveElements.forEach(element => {
        if (!element.hasAttribute('tabindex')) {
            element.setAttribute('tabindex', '0');
        }
        
        // Add keyboard event for elements with titles
        if (element.hasAttribute('title')) {
            element.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    // Show tooltip information in an accessible way
                    const tooltipText = this.getAttribute('title');
                    alert(tooltipText);
                }
            });
        }
    });
});