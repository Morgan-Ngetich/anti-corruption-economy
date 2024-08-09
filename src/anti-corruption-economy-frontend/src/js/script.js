document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');

        if (hamburger.classList.contains('active')) {
            hamburger.innerHTML = '&times;';
        } else {
            hamburger.innerHTML = '<span></span><span></span><span></span>';
        }
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
            hamburger.innerHTML = '<span></span><span></span><span></span>';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
            hamburger.innerHTML = '<span></span><span></span><span></span>';
        }
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
            hamburger.innerHTML = '<span></span><span></span><span></span>';
        }
    });
});document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const title = item.querySelector('.faq-title');
        const content = item.querySelector('.faq-content');
        const plusIcon = item.querySelector('.plus-icon');

        title.addEventListener('click', () => {
            item.classList.toggle('active');
            if (item.classList.contains('active')) {
                content.style.display = 'block';
                plusIcon.textContent = '-';
            } else {
                content.style.display = 'none';
                plusIcon.textContent = '+';
            }
        });
    });
});

