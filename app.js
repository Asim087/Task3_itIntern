document.addEventListener('DOMContentLoaded', () => {
    // Get all navbar buttons
    const buttons = document.querySelectorAll('.tabs a');

    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior

            // Get the target section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            // Scroll to the target section smoothly
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
