const moreEls = document.querySelectorAll('.more');
const modalEl = document.querySelector('.modal');

const openModal = () => {
    modalEl.classList.remove('hidden');
}

const closeModal = () => {
    modalEl.classList.add('hidden');
}

moreEls.forEach((el) => {
    el.addEventListener('click', openModal);
})

modalEl.addEventListener('click', (e) => {
    if(e.target.classList.contains('overlay') ||
       e.target.classList.contains('modal__close')) {
        closeModal();
    }
});