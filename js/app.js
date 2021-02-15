// Variables
const screenWidth = screen.width;
const $nav = document.querySelector('#nav');
const $iconHamburger = document.querySelector('#iconHamburger');
const $iconClose = document.querySelector('#iconClose');
const $navLinks = document.querySelector('#navLinks');
const $navLink = document.querySelectorAll('.nav__links .container .nav__link');


// Functions
const closeMenu = ()=> {
    $navLinks.style.setProperty('transform', `translateX(-${screenWidth}px)`);
    $iconHamburger.classList.remove('d-none');
    $iconClose.classList.add('d-none');
}

const showMenu = ()=> {
    $navLinks.style.setProperty('transform', `translateX(0)`);
    $iconHamburger.classList.add('d-none');
    $iconClose.classList.remove('d-none');
}



// App
closeMenu();

$iconHamburger.addEventListener('click', showMenu);

$iconClose.addEventListener('click', closeMenu);

$navLink.forEach(link => {
    link.addEventListener('click', closeMenu);
});

window.onscroll = ()=> {
    if ($iconHamburger.classList.contains('d-none')) {
        closeMenu();
    }
}