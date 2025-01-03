document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.getElementById('nav-links');

    // Toggle the navigation menu when the hamburger button is clicked
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
});