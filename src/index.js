import animations from '../src/animations.js';

//Page transition
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    const link = document.querySelectorAll('.anchor');

    setTimeout(() => {
        loader.classList.remove('loader--active');
    }, 500);

    for(let i = 0; i < link.length; i++) {
        const links = link[i];

        links.addEventListener('click', (e) => {
            e.preventDefault();
            let target = e.target.href;

            loader.classList.add('loader--active');

            setTimeout(() => {
                window.location.href = target;
            }, 500);
        })
    }
});

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
let page = document.body.id;

switch (page) {
    case 'home':
        window.addEventListener('scroll', () => {
            let wScroll = window.pageYOffset;
            const heroBg = document.getElementById('heroBg');
            const implementedProjectsImages = document.querySelectorAll('.image img');
        
            heroBg.style.backgroundPositionY = `${wScroll / 5}px`;
        
            for(let i = 0; i < implementedProjectsImages.length; i++) {
                implementedProjectsImages[i].style.transform = `translateY(${-wScroll / 45}px)`;
            }
        })
        break;

    default:
        break;
}

//Defer offscreen images
const images = document.querySelectorAll('[data-src]');

function preLoadImage(img) {
    const src = img.getAttribute('data-src');

    if(!src) {
        return;
    }

    img.src = src;
}

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 300px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        } else {
            preLoadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
});

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