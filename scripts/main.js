document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('nav');
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.getElementById('nav-links');
    const navItems = document.querySelectorAll('nav ul li a');

    // Toggle the navigation menu on hamburger icon click
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    // Close the menu when any link is clicked
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('show');
        });
    });

    // Optional: Close the menu if the user clicks outside the nav (good UX practice)
    document.addEventListener('click', function (event) {
        if (!nav.contains(event.target) && navLinks.classList.contains('show')) {
            navLinks.classList.remove('show');
        }
    });
});
