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
    focusAt: 'center',
    breakpoints: {
        980: {
            perView: 4,
            focusAt: 0
        },
        830: {
            perView: 3
        },
        500: {
            perView: 2,
            focusAt: 0
        }
    }
}

new Glide('.trusted-container', config).mount();