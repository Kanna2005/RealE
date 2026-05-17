// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

if(localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
}

if(themeToggle) {
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark' : 'light');
    });
}

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if(window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if(hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Project Filter (for index.html)
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

if(filterBtns.length > 0) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if(filter === 'all' || card.getAttribute('data-category').includes(filter)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Animation on scroll
const animateElements = document.querySelectorAll('.project-card, .amenity-card, .testimonial-card, .blog-card, .offering-item');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Search functionality
const searchBtn = document.querySelector('.search-btn');
if(searchBtn) {
    searchBtn.addEventListener('click', () => {
        const searchTerm = document.querySelector('.search-bar input')?.value;
        if(searchTerm) {
            window.location.href = `projects.html?search=${encodeURIComponent(searchTerm)}`;
        } else {
            window.location.href = 'projects.html';
        }
    });
}

// Newsletter subscription
const newsletterBtn = document.querySelector('.newsletter-form-large button');
if(newsletterBtn) {
    newsletterBtn.addEventListener('click', () => {
        const email = document.querySelector('.newsletter-form-large input')?.value;
        if(email && email.includes('@')) {
            alert(`Thank you for subscribing! You'll receive updates at ${email}`);
            document.querySelector('.newsletter-form-large input').value = '';
        } else {
            alert('Please enter a valid email address');
        }
    });
}
