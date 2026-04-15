document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // ... your existing filter and reveal code ...
});
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.project-card');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and add to clicked one
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            cards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    // Optional: Add a fade-in animation here
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});

// Function to handle scroll animations
function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150; // Pixels before it triggers

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add("active");
        }
    });
}

// Run the function on scroll
window.addEventListener("scroll", reveal);

// Run once on load to show elements already in view
reveal();

const glow = document.querySelector('.cursor-glow');
window.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
});