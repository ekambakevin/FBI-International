const menuToggle = document.getElementById('menuToggle');
const mainMenu = document.getElementById('mainMenu');

menuToggle.addEventListener('click', () => {
    const open = mainMenu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});

document.querySelectorAll('#mainMenu a').forEach(link => {
    link.addEventListener('click', () => {
        mainMenu.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
    });
});

window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav-wrap');
    nav.style.boxShadow = window.scrollY > 20
        ? '0 8px 30px rgba(0,0,0,.35)'
        : 'none';
});
