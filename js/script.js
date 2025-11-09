const hamburger = document.getElementById('hamburger');
const closeIcon = document.querySelector('.close');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
    hamburger.classList.toggle('show');
});