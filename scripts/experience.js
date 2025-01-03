document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.5
    });

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        observer.observe(card);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    // Function to check if the card is in the viewport
    function checkInView() {
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const cardBottom = card.getBoundingClientRect().bottom;

            // Check if the card is within the viewport (visible)
            if (cardTop < window.innerHeight && cardBottom >= 0) {
                card.classList.add('in-view');
            }
        });
    }

    // Trigger on page load and on scroll
    checkInView();
    window.addEventListener('scroll', checkInView);
});
