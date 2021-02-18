document.addEventListener('DOMContentLoaded', () => {
    // Variables
    const screenWidth = screen.width * 2;
    const $nav = document.querySelector('#nav');
    const $iconHamburger = document.querySelector('#iconHamburger');
    const $iconClose = document.querySelector('#iconClose');
    const $navLinks = document.querySelector('#navLinks');
    const $lazyLoadImages = document.querySelectorAll('.lazy');


    // Functions
    const observeElement = $lazyLoadImages => {
        $lazyLoadImages.forEach(element => {
            if (element.isIntersecting) {
                element.target.classList.remove('lazy');
            }
        });
    };

    const observer = new IntersectionObserver(observeElement);

    const closeMenu = () => {
        $navLinks.style.setProperty('transform', `translateX(-${screenWidth}px)`);
        $iconHamburger.classList.remove('d-none');
        $iconClose.classList.add('d-none');
    }

    const showMenu = () => {
        $navLinks.style.setProperty('transform', `translateX(0)`);
        $iconHamburger.classList.add('d-none');
        $iconClose.classList.remove('d-none');
    }



    // App
    $lazyLoadImages.forEach(element => {
        observer.observe(element);
    });

    if (screenWidth < 1200) {
        closeMenu();
    }

    $iconHamburger.addEventListener('click', showMenu);

    $iconClose.addEventListener('click', closeMenu);

    $navLinks.addEventListener('click', closeMenu);

    window.addEventListener('scroll', () => {
        let windowPosition = window.scrollY > 0;
        $nav.classList.toggle('scrolling-active', windowPosition);
        if (screenWidth < 1200) {
            if ($iconHamburger.classList.contains('d-none')) {
                closeMenu();
            }
        }
    });
})