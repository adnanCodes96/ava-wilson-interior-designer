import animations from './animations.js';

//Page transition
window.addEventListener('load', () => {
    let loader = document.querySelector('.loader');
})

//Scale Header on scrroll
const header = document.querySelector('.header');
const logo = document.querySelector('.logo');

if(window.matchMedia("(min-width: 1024px)")) {
    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset;

        if(scrollTop > 0) {
            header.classList.add('header--scrolled');
        } else {
            header.classList.remove('header--scrolled');
        }
    })
}

// Open and Close Navigation
const navOverlay = document.querySelector('.navigation__overlay');
const closeNavEl = document.querySelector('.close');
const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');
const body = document.body;

menu.addEventListener('click', () => {
    navOverlay.classList.remove('navigation__overlay--hidden');
    nav.classList.remove('nav--hidden');
    body.style.marginLeft = '-70%';
    header.style.marginLeft = '-70%';
    body.style.transition = 'all .5s ease-in-out';
    header.style.transition = 'all .5s ease-in-out';

    if(window.matchMedia("(min-width: 768px)")) {
        body.style.marginLeft = '-40%';
        header.style.marginLeft = '-40%';
    }
});

function closeNav() {
    navOverlay.classList.add('navigation__overlay--hidden');
    nav.classList.add('nav--hidden');
    body.style.marginLeft = '0%';
    header.style.marginLeft = '0%';
};

navOverlay.addEventListener('click', closeNav);
closeNavEl.addEventListener('click', closeNav);

if(window.matchMedia("(min-width: 1024px)")) {
    nav.classList.add('nav--hidden');
} else {
    nav.classList.remove('nav--hidden');
}

//Paralax scrolling
window.addEventListener('scroll', () => {
    let wScroll = window.pageYOffset / 5;
    const heroBg = document.getElementById('heroBg');

    heroBg.style.backgroundPositionY = `${wScroll}px`;
})

// Accordion
let accordionItem = document.querySelectorAll('.accordion__item');
let accordionTop = document.querySelectorAll('.accordion__top');
let accordionBottom = document.querySelectorAll('.accordion__bottom');
let plusVertical = document.querySelectorAll('.vertical');

for(let i = 0; i < accordionTop.length; i++) {
    accordionTop[i].addEventListener('click', function() {

        let panel = this.nextElementSibling;
        
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            plusVertical[i].style.clipPath = 'polygon(0 100%, 100% 100%, 100% 0, 0 0)';
            accordionItem[i].style.paddingBottom = '0px';
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            plusVertical[i].style.clipPath = 'polygon(0 50%, 100% 50%, 100% 50%, 0 50%)';
            accordionItem[i].style.paddingBottom = '35px';
        }
    });
};