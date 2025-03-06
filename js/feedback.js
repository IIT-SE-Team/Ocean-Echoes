
const form = document.getElementById("feedbackForm");
const submitButton = document.getElementById("submit-btn");

    document.addEventListener("DOMContentLoaded", function () {
      
        submitButton.addEventListener("click", function (event) {
            // Select all required input fields
            form.querySelectorAll("input[required], textarea[required], select[required]").forEach(input => {
                if (!input.value.trim()) {
                    input.style.border = "2px solid red"; // Apply red border if empty
                    input.style.background = "#ffe6e6"; // Light red background
                } else {
                    input.style.border = "1px solid #ccc"; // Reset border for filled fields
                    input.style.background = "none";
                }
            });
    
          
        });
    });
    document.addEventListener("DOMContentLoaded", function () {
        const messageInput = document.getElementById("message");
        const charCountDisplay = document.getElementById("charCount");
        const maxChars = 500;
    
        messageInput.addEventListener("input", function () {
            let charCount = messageInput.value.length;
    
            // Update character counter display
            charCountDisplay.textContent = `${charCount} / ${maxChars} characters`;
    
            // Prevent exceeding the limit
            if (charCount > maxChars) {
                messageInput.value = messageInput.value.substring(0, maxChars);
                charCountDisplay.textContent = `${maxChars} / ${maxChars} characters`;
            }
        });
    });
    
    