// Theme Switcher
document.addEventListener('DOMContentLoaded', function() {
    const themeButtons = document.querySelectorAll('.theme-btn');
    const body = document.body;
    
    // Set initial theme
    const savedTheme = localStorage.getItem('theme') || 'default-theme';
    body.className = savedTheme;
    updateActiveThemeButton(savedTheme);
    
    // Theme button click event
    themeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const theme = this.getAttribute('data-theme');
            body.className = theme;
            localStorage.setItem('theme', theme);
            updateActiveThemeButton(theme);
        });
    });
    
    function updateActiveThemeButton(theme) {
        themeButtons.forEach(button => {
            if (button.getAttribute('data-theme') === theme) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }
    
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.innerHTML = navLinks.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
    
    // Form submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
});