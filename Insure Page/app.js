const btnHamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const header = document.querySelector('header');
const mobileIcon = document.querySelector('.hamburger a img');

btnHamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    document.body.classList.toggle('no-scroll');
    header.classList.toggle('hidden');
});

ScrollReveal({ 
    reset: false,
    distance: '60px',
    duration: 700,
    delay: 0
});

ScrollReveal().reveal('.details-row', { delay: 0, origin: 'bottom'});