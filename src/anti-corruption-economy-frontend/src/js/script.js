
const faqItems = document.querySelectorAll('.faq-item');


        faqItems.forEach(item => {

            const title = item.querySelector('.faq-title');

            const content = item.querySelector('.faq-content');


            title.addEventListener('click', () => {

                item.classList.toggle('active');

                content.style.display = content.style.display === 'none' ? 'block' : 'none';

            });

        });

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal Popup for Service Cards
const serviceCards = document.querySelectorAll('.service-card a');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const closeBtn = document.querySelector('.close-btn');

serviceCards.forEach(card => {
    card.addEventListener('click', function(e) {
        e.preventDefault();
        const content = `
            <h2>${this.parentElement.querySelector('h3').textContent}</h2>
            <p>${this.parentElement.querySelector('p').textContent}</p>
            <a href="${this.getAttribute('href')}" target="_blank">Read More</a>
        `;
        modalContent.innerHTML = content;
        modal.style.display = 'block';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});

// Toggle Navigation Menu on Mobile
const toggleMenu = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggleMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Scroll to Top Button
const scrollToTopBtn = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
