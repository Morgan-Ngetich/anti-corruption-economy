// JavaScript for Transparify - Fight Against Corruption

document.addEventListener("DOMContentLoaded", function () {

    // FAQ Section Toggle
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            item.classList.toggle('active');

            // Close other FAQ items when one is opened
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
        });
    });

    // Smooth Scrolling for Links
    const navLinks = document.querySelectorAll('header .nav-links a, .cta-buttons a, .report-buttons a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 60, // Adjusting for the header height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile Navigation Menu Toggle
    const nav = document.querySelector('header nav');
    const navToggle = document.createElement('div');
    navToggle.className = 'nav-toggle';
    navToggle.innerHTML = '&#9776;'; // Hamburger menu icon

    nav.prepend(navToggle);

    navToggle.addEventListener('click', () => {
        nav.classList.toggle('nav-open');
    });

    // Close the mobile menu when a link is clicked
    const navLinksMobile = document.querySelectorAll('header .nav-links a');

    navLinksMobile.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('nav-open')) {
                nav.classList.remove('nav-open');
            }
        });
    });

    // Adding the scroll effect to the header
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});
