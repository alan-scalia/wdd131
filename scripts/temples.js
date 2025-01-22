const nav = document.querySelector('#nav');
const button = document.querySelector('#menu')

button.addEventListener('click', () => {
    nav.classList.toggle('open');
    button.classList.toggle('open');
})