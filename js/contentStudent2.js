document.addEventListener('DOMContentLoaded', function () {
    

    // Smooth scroll for navigation
    document.querySelectorAll('.side-nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 20,
                behavior: 'smooth'
            });

            // Update active link
            document.querySelectorAll('.side-nav a').forEach(a => a.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Active navigation based on scroll position
    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;

        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                document.querySelectorAll('.side-nav a').forEach(a => {
                    a.classList.remove('active');
                    if (a.getAttribute('href') === '#' + sectionId) {
                        a.classList.add('active');
                    }
                });
            }
        });
    });
});
