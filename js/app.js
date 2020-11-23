// NAVIGATION
let burger = document.querySelector('.burger');
let nav = document.querySelector('.nav-items');

function toggleNav() {
    nav.classList.toggle('open-nav');
    burger.classList.toggle('open-burger');
}

burger.addEventListener('click', toggleNav);

// CARD EXPAND
// let cards = document.querySelectorAll('.offer-card');
// let cardInfo = document.querySelectorAll('.offer-card p');

// function expandCard() {
//     // cardInfo.style = 'block';
//     cardInfo.forEach(info => info.style.display = 'block')
// }

// function shrinkCard() {
//     // cardInfo.style = 'block';
//     cardInfo.forEach(info => info.style.display = 'none')
// }

// cards.forEach(card => card.addEventListener('mouseenter', expandCard));
// cards.forEach(card => card.addEventListener('mouseleave', shrinkCard));

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