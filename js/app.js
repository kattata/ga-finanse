// NAVIGATION
let burger = document.querySelector('.burger');
let nav = document.querySelector('.nav-items');

function toggleNav() {
    nav.classList.toggle('open-nav');
    burger.classList.toggle('open-burger');
}

burger.addEventListener('click', toggleNav);