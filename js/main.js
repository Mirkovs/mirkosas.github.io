// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNavLink() {
    const scrollPosition = window.pageYOffset + 150;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// Scroll to top button
const scrollTopBtn = document.getElementById('scrollTopBtn');

if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Observe all sections for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('section');
    animateElements.forEach(el => {
        el.classList.add('scroll-animate');
        observer.observe(el);
    });
});

// Parallax effect removed for better mobile performance and cleaner scroll behavior


// Add hover effect to project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.zIndex = '10';
    });

    card.addEventListener('mouseleave', function () {
        this.style.zIndex = '1';
    });
});

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.remove('loading');
                    observer.unobserve(img);
                }
            }
        });
    });

    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => imageObserver.observe(img));
}

// Add animation delay to project cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});

// Mobile menu close on outside click
document.addEventListener('click', (e) => {
    const navbar = document.querySelector('.navbar');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navbarToggler = document.querySelector('.navbar-toggler');

    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        if (!navbar.contains(e.target)) {
            navbarCollapse.classList.remove('show');
        }
    }
});

// Prevent body scroll when mobile menu is open
const navbarToggler = document.querySelector('.navbar-toggler');
if (navbarToggler) {
    navbarToggler.addEventListener('click', () => {
        setTimeout(() => {
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        }, 350);
    });
}

// Fix viewport height on mobile browsers
function setVH() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

setVH();
window.addEventListener('resize', setVH);
window.addEventListener('orientationchange', setVH);

// Add smooth reveal animation on page load
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Optimize scroll performance on mobile
let ticking = false;
const scrollHandlers = [];

function optimizedScroll(callback) {
    scrollHandlers.push(callback);
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            scrollHandlers.forEach(handler => handler());
            ticking = false;
        });
        ticking = true;
    }
});

// Disable animations on low-end devices
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.scroll-animate').forEach(el => {
        el.classList.add('active');
    });
}

// Console message
console.log('%c🚁 Kosas de MirKo - FPV Drones', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%cCreado por Mirko Verderese', 'color: #764ba2; font-size: 14px;');
console.log('%c📱 Mobile optimized', 'color: #10b981; font-size: 12px;');

// Video Modal Functionality
const videoModal = document.getElementById('videoModal');
const videoIframe = document.getElementById('videoIframe');
const videoPlayBtns = document.querySelectorAll('.video-play-btn');

// Detect if user is on mobile device
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
}

// Add click event to all video play buttons
videoPlayBtns.forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        const projectCard = this.closest('.project-card');
        const videoId = projectCard.getAttribute('data-video-id');

        if (videoId) {
            // On mobile, open YouTube directly (app or browser)
            if (isMobileDevice()) {
                window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
            } else {
                // On desktop, use modal with iframe
                // Use regular YouTube embed (not nocookie) to avoid Error 153
                videoIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

                // Show modal using Bootstrap
                const modal = new bootstrap.Modal(videoModal);
                modal.show();
            }
        }
    });
});

// Clear iframe src when modal is closed to stop video
if (videoModal) {
    videoModal.addEventListener('hidden.bs.modal', function () {
        videoIframe.src = '';
    });
}


// Cookie Consent Functionality
const cookieConsent = document.getElementById('cookieConsent');
const acceptCookiesBtn = document.getElementById('acceptCookies');
const declineCookiesBtn = document.getElementById('declineCookies');

// Check if user has already made a choice
function checkCookieConsent() {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
        // Show banner after a short delay for better UX
        setTimeout(() => {
            cookieConsent.style.display = 'block';
        }, 1000);
    }
}

// Handle accept cookies
acceptCookiesBtn.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'accepted');
    hideCookieBanner();
    // Here you can enable analytics or other tracking
    console.log('Cookies accepted');
});

// Handle decline cookies
declineCookiesBtn.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'declined');
    hideCookieBanner();
    // Here you can disable analytics or other tracking
    console.log('Cookies declined');
});

// Hide cookie banner with animation
function hideCookieBanner() {
    cookieConsent.style.animation = 'slideDown 0.5s ease-out';
    setTimeout(() => {
        cookieConsent.style.display = 'none';
    }, 500);
}

// Add slideDown animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(100%);
        }
    }
`;
document.head.appendChild(style);

// Check cookie consent on page load
checkCookieConsent();

// Image Lightbox Functionality
const lightboxModal = document.getElementById('lightboxModal');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');
const lightboxCounter = document.getElementById('lightboxCounter');

// Gallery data
const galleries = {
    drones: [
        { src: 'images/1.jpg', alt: 'Drone FPV 1' },
        { src: 'images/2.jpg', alt: 'Drone FPV 2' },
        { src: 'images/3.jpg', alt: 'Drone FPV 3' },
        { src: 'images/4.jpg', alt: 'Drone FPV 4' }
    ],
    environment: [
        { src: 'images/enviroment/1-1.jpg', alt: 'Entorno 1' },
        { src: 'images/enviroment/1-2.jpg', alt: 'Entorno 2' },
        { src: 'images/enviroment/1-3.jpg', alt: 'Entorno 3' },
        { src: 'images/enviroment/1-4.jpg', alt: 'Entorno 4' },
        { src: 'images/enviroment/1-5.jpg', alt: 'Entorno 5' },
        { src: 'images/enviroment/1-6.jpg', alt: 'Entorno 6' },
        { src: 'images/enviroment/1-7.jpg', alt: 'Entorno 7' },
        { src: 'images/enviroment/1-8.jpg', alt: 'Entorno 8' },
        { src: 'images/enviroment/1-9.jpg', alt: 'Entorno 9' }
    ]
};

let currentGallery = [];
let currentIndex = 0;

// Open lightbox
function openLightbox(gallery, index) {
    currentGallery = galleries[gallery];
    currentIndex = index;
    updateLightboxImage();
    lightboxModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    // Show swipe hint on mobile
    if (isMobileDevice()) {
        showSwipeHint();
    }
}

// Show swipe hint for mobile users
function showSwipeHint() {
    // Remove existing hint if any
    const existingHint = document.querySelector('.swipe-hint');
    if (existingHint) {
        existingHint.remove();
    }

    // Create hint element
    const hint = document.createElement('div');
    hint.className = 'swipe-hint';
    hint.textContent = 'Desliza para navegar';
    lightboxModal.appendChild(hint);

    // Fade out and remove after 3 seconds
    setTimeout(() => {
        hint.style.opacity = '0';
        setTimeout(() => {
            hint.remove();
        }, 500);
    }, 3000);
}


// Close lightbox
function closeLightbox() {
    lightboxModal.style.display = 'none';
    document.body.style.overflow = '';
}

// Update lightbox image
function updateLightboxImage() {
    const image = currentGallery[currentIndex];
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightboxCounter.textContent = `${currentIndex + 1} / ${currentGallery.length}`;
}

// Navigate to previous image
function showPrevImage() {
    currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
    updateLightboxImage();
}

// Navigate to next image
function showNextImage() {
    currentIndex = (currentIndex + 1) % currentGallery.length;
    updateLightboxImage();
}

// Add click events to gallery items
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function () {
        const gallery = this.getAttribute('data-gallery');
        const index = parseInt(this.getAttribute('data-index'));
        openLightbox(gallery, index);
    });
});

// Lightbox controls
lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', showPrevImage);
lightboxNext.addEventListener('click', showNextImage);

// Close on background click
lightboxModal.addEventListener('click', function (e) {
    if (e.target === lightboxModal) {
        closeLightbox();
    }
});

// Keyboard navigation
document.addEventListener('keydown', function (e) {
    if (lightboxModal.style.display === 'flex') {
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            showPrevImage();
        } else if (e.key === 'ArrowRight') {
            showNextImage();
        }
    }
});

// Touch/swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

lightboxModal.addEventListener('touchstart', function (e) {
    touchStartX = e.changedTouches[0].screenX;
}, false);

lightboxModal.addEventListener('touchend', function (e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, false);

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - next image
            showNextImage();
        } else {
            // Swipe right - previous image
            showPrevImage();
        }
    }
}
