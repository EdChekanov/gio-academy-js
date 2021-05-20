const menuEl = document.querySelector('.menu');
const humburgerMenuEl = document.querySelector('.humburger-menu');
const closeLinks = document.querySelectorAll('.menu-list__link');
const closeMenuSquare = document.querySelector('.main');

humburgerMenuEl.addEventListener('click', toggleMenu);
menuEl.addEventListener('click', (e) => {
    console.log(e.target);
})
closeMenuSquare.addEventListener('click', closeMenu);
closeLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
})

function toggleMenu() {
    menuEl.classList.toggle('menu-active');
    humburgerMenuEl.classList.toggle('humburger-menu-active');
}
function closeMenu() {
    menuEl.classList.remove('menu-active');
    humburgerMenuEl.classList.remove('humburger-menu-active');
}

