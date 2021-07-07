const navOverlay = document.querySelector('.navigation__overlay');
const closeNavEl = document.querySelector('.close');
const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
const body = document.body;

menu.addEventListener('click', () => {
    navOverlay.classList.remove('navigation__overlay--hidden');
    nav.classList.remove('nav--hidden');
    body.style.marginLeft = '-70%';
    header.style.marginLeft = '-70%';
    body.style.transition = 'all .5s ease-in-out';
    header.style.transition = 'all .5s ease-in-out';
});

function closeNav() {
    navOverlay.classList.add('navigation__overlay--hidden');
    nav.classList.add('nav--hidden');
    body.style.marginLeft = '0%';
    header.style.marginLeft = '0%';
};

navOverlay.addEventListener('click', closeNav);
closeNavEl.addEventListener('click', closeNav);