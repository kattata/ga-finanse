// NAVIGATION
let burger = document.querySelector('.fa-bars');
let nav = document.querySelector('.nav-items');



function toggleNav() {
    nav.classList.toggle('open-nav');
}

burger.addEventListener('click', toggleNav);