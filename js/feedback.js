// Feedback js

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("feedbackForm");
    const submitButton = document.getElementById("submit-btn");

    // Function to show error messages for invalid inputs
    function showError(input, message) {
        let errorElement = document.getElementById(input.id + "Error");

        if (!errorElement) {
            errorElement = document.createElement("small");
            errorElement.classList.add("error-message");
            errorElement.id = input.id + "Error";
            input.parentNode.appendChild(errorElement);
        }

        errorElement.textContent = message;
        errorElement.style.color = "red";
        input.style.border = "2px solid red";
        input.style.background = "#ffe6e6";
    }

    // Function to clear error messages when input is corrected
    function clearError(input) {
        const errorElement = document.getElementById(input.id + "Error");
        if (errorElement) {
            errorElement.textContent = "";
        }
        input.style.border = "1px solid #ccc";
        input.style.background = "none";
    }

    // Event listener for form submission to validate input fields
    submitButton.addEventListener("click", function (event) {
        let valid = true;
        let formData = {}; 

        // Validate required text, email, and textarea fields
        form.querySelectorAll("input[required], textarea[required], select[required]").forEach(input => {
            if (!input.value.trim()) {
                showError(input, `${input.previousElementSibling.textContent} is required`);
                valid = false;
            } else {
                clearError(input);
                formData[input.name] = input.value.trim(); // Store valid input
            }

            // Validate email format
            if (input.type === "email") {
                const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                if (!emailPattern.test(input.value.trim())) {
                    showError(input, "Invalid email format");
                    valid = false;
                }
            }
            
            // Validate phone number (10-15 digits)
            if (input.type === "tel") {
                const phonePattern = /^[0-9]{10,15}$/;
                if (!phonePattern.test(input.value.trim())) {
                    showError(input, "Phone number must be 10-15 digits");
                    valid = false;
                }
            }
        });

        // Collect selected checkboxes (contact method)
        let selectedContactMethods = [];
        document.querySelectorAll("input[name='contactMethod']:checked").forEach(checkbox => {
            selectedContactMethods.push(checkbox.value);
        });
        formData["contactMethod"] = selectedContactMethods.length > 0 ? selectedContactMethods : "null";

        // Collect selected radio button (satisfaction)
        let satisfaction = document.querySelector("input[name='satisfaction']:checked");
        formData["satisfaction"] = satisfaction ? satisfaction.value : "null";

        // Collect file name if uploaded
        let fileInput = document.getElementById("attachment");
        formData["attachment"] = fileInput.files.length > 0 ? fileInput.files[0].name : "null";

        // Prevent form submission if validation fails
        if (!valid) {
            // prevent from removing data 
            event.preventDefault();
        } else {
            event.preventDefault();
            console.log("Form submitted successfully!");
            console.log("Form Data:", formData);
        }
    });

    // Character Counter for Message Field
    const messageInput = document.getElementById("message");
    const charCountDisplay = document.getElementById("charCount");
    const maxChars = 500;

    if (messageInput) {
        function updateCounter() {
            let charCount = messageInput.value.length;
            charCountDisplay.textContent = `${charCount} / ${maxChars}`;
            charCountDisplay.setAttribute("data-short", `${charCount}/${maxChars}`);

            if (charCount === 0) {
                charCountDisplay.style.color = "#777";
            } else if (charCount < 400) {
                charCountDisplay.style.color = "green";
            } else if (charCount < 500) {
                charCountDisplay.style.color = "orange";
            } else {
                charCountDisplay.style.color = "red";
            }
        }

        messageInput.addEventListener("input", updateCounter);
        updateCounter();
    }

    // Handle "Prefer Not to be Contacted" logic 
    const contactOptions = document.querySelectorAll(".contact-option");
    const notInterested = document.getElementById("not-interested");

    contactOptions.forEach(option => {
        option.addEventListener("change", function () {
            if (this.checked) {
                notInterested.checked = false;
            }
        });
    });

    notInterested.addEventListener("change", function () {
        if (this.checked) {
            contactOptions.forEach(option => option.checked = false);
        }
    });

    // Auto-fill and restrict past dates for datetime-local input
    const dateTimeInput = document.getElementById("feedback-date");
    let now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());

    let localDateTime = now.toISOString().slice(0, 16);
    dateTimeInput.value = localDateTime;
    dateTimeInput.min = localDateTime;
});
