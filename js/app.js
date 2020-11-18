// NAVIGATION
let burger = document.querySelector('.burger');
let nav = document.querySelector('.nav-items');

function toggleNav() {
    nav.classList.toggle('open-nav');
    burger.classList.toggle('open-burger');
}

burger.addEventListener('click', toggleNav);

// GLIDE CAROUSEL
const config = {
    type: 'carousel',
    startAt: 0,
    perView: 5,
    gap: 20,
    breakpoints: {
        1400: {
            perView: 4
        },
        1150: {
            perView: 3
        },
        980: {
            perView: 4
        },
        790: {
            perView: 3
        }
    }
}

new Glide('.trusted-container', config).mount();