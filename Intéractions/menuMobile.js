var menuHamburger= document.querySelector('.c-hamburger');
console.log(menuHamburger);
var menuPanel= document.getElementById('menu-panel');
console.log(menuPanel);



function openMenu() {
    // //Animation du bouton
    menuHamburger.classList.toggle('is-active');
    // Animation du menu
    if (menuHamburger.classList.contains('is-active'))
    {
    menuPanel.classList.add('show');
}
    else{
        menuPanel.classList.remove('show');
    }
}



menuHamburger.addEventListener('click',openMenu);
