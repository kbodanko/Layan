let hamburger = document.querySelector('#hamburger');
let close = document.querySelector('#close');
let menu = document.querySelector('.menu');
let main = document.querySelector('main');
let nav = document.querySelector('nav');
let home = document.querySelector('.home');
let compBuild = document.querySelector('.comp_build');
let aboutUs = document.querySelector('.about_us');
let contact = document.querySelector('.contact');
let menuOptions = document.querySelectorAll('.menu_option');

for (let i = 0; i < menuOptions.length; i++) {
    const element = menuOptions[i];
    element.setAttribute('id', 'menuOption' + [i]);

}
let homeMenuOption = document.querySelector('#menuOption0');
let compBuildOption = document.querySelector('#menuOption2');
let aboutUsOption = document.querySelector('#menuOption3');
let contactOption = document.querySelector('#menuOption4');

homeMenuOption.addEventListener('click', function () { home.scrollIntoView({ behavior: "smooth" }); hideMenu(); });
compBuildOption.addEventListener('click', function () { compBuild.scrollIntoView({ behavior: "smooth" }); hideMenu(); });
aboutUsOption.addEventListener('click', function () { aboutUs.scrollIntoView({ behavior: "smooth" }); hideMenu(); });
contactOption.addEventListener('click', function () { contact.scrollIntoView({ behavior: "smooth" }); hideMenu(); });


function showMenu() {
    console.log('kk');
    menu.style.transform = 'translateY(0)';
    main.style.filter = 'blur(8px)';
    nav.style.filter = 'blur(8px)';
}
function hideMenu() {
    console.log('kk');
    menu.style.transform = 'translateY(-100vh)';
    main.style.filter = 'blur(0)';
    nav.style.filter = 'blur(0)';
}
close.addEventListener('click', hideMenu);
hamburger.addEventListener('click', showMenu);
window.addEventListener('click', function () {
    console.log(event.target);
});