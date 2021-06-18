const navExpander = document.querySelector('.nav-expander');
const navBar = document.querySelector('nav');

function toggleNav() {
    navBar.classList.toggle('open')
}

navExpander.addEventListener('click', toggleNav);