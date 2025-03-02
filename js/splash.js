document.addEventListener('DOMContentLoaded', () => {
    const splash = document.querySelector('.splash-container');

    setTimeout(() => {
        splash.classList.add('display-hide'); // Start the animation
    }, 4000);

    splash.addEventListener('animationend', () => {
        setTimeout(() => {
            splash.style.display = 'none'; 
            window.location.href="home.html";
        }, 7000); // Small delay to guarantee animation completion
    });
})