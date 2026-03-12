document.addEventListener('DOMContentLoaded', () => {

    // Generate hero particle dots
    const particleContainer = document.getElementById('hero-particles');
    if (particleContainer) {
        for (let i = 0; i < 60; i++) {
            const dot = document.createElement('div');
            dot.classList.add('particle');
            const size = Math.random() * 3 + 1;
            dot.style.cssText = `width:${size}px;height:${size}px;top:${Math.random() * 100}%;left:${Math.random() * 100}%;animation-delay:${(Math.random() * 5).toFixed(1)}s;animation-duration:${(3 + Math.random() * 4).toFixed(1)}s;`;
            particleContainer.appendChild(dot);
        }
    }

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('nav-active');
        mobileMenuBtn.classList.toggle('is-active');
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    // FAQ accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        item.querySelector('.faq-question').addEventListener('click', () => {
            const isOpen = item.classList.contains('faq-active');
            faqItems.forEach(i => {
                i.classList.remove('faq-active');
                i.querySelector('.faq-answer').style.maxHeight = null;
            });
            if (!isOpen) {
                item.classList.add('faq-active');
                item.querySelector('.faq-answer').style.maxHeight = item.querySelector('.faq-answer').scrollHeight + 'px';
            }
        });
    });

    // Hero 3D Tilt Effect
    const heroVisual = document.querySelector('.hero-image-wrapper');
    const heroSection = document.querySelector('.hero');

    if (heroVisual && heroSection) {
        heroSection.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;

            // Calculate rotation based on mouse position
            const xRotation = ((clientY / innerHeight) - 0.5) * -15; // Max 7.5 deg
            const yRotation = ((clientX / innerWidth) - 0.5) * 15;  // Max 7.5 deg

            heroVisual.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg) translateY(-5px)`;
        });

        heroSection.addEventListener('mouseleave', () => {
            heroVisual.style.transform = `rotateX(0) rotateY(0) translateY(0)`;
        });
    }

    // Unified Scroll Reveal System
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px' // Trigges slightly before becoming visible
    });

    document.querySelectorAll('.reveal').forEach(el => {
        revealObserver.observe(el);
    });

});
