document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)';
            navbar.style.padding = '1rem 5%';
        } else {
            navbar.style.background = 'rgba(13, 13, 13, 0.9)';
            navbar.style.boxShadow = 'none';
            navbar.style.padding = '2rem 5%';
        }
    });

    // Add to cart buttons interactions
    const addButtons = document.querySelectorAll('.add-btn, .cta-button');
    addButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const originalText = button.innerText;
            button.innerText = 'Added!';
            button.style.backgroundColor = '#27ae60';
            button.style.color = '#fff';
            button.style.borderColor = '#27ae60';
            
            setTimeout(() => {
                button.innerText = originalText;
                button.style.backgroundColor = '';
                button.style.color = '';
                button.style.borderColor = '';
            }, 2000);
        });
    });
});
