document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed(".text", {
        strings: ["Web Developer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 500,
        loop: true
    });

    const activePage = window.location.pathname;
    const navLinks = document.querySelectorAll('.navbar a');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');

        if (activePage.includes(linkPath)) {
            link.classList.add('active');
        }
    });
});
