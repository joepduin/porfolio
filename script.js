const navToggle = document.getElementById('mobile-nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('nav-open');
    navToggle.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('nav-open');
        navToggle.classList.remove('nav-open');
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1 
});

const sections = document.querySelectorAll('.fade-in');
sections.forEach(section => {
    observer.observe(section);
});