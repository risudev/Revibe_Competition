let openMenu = document.querySelector('.navbar-icon');
let openNav = document.querySelector('#nav');
let openMain = document.querySelector('.navbar-icon');

openMenu.addEventListener('click', () =>{
    openNav.classList.toggle('open');
    openMain.classList.toggle('open');
})

