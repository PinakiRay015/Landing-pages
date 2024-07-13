const menu = document.querySelector('#menu')
const sidemenu = document.querySelector('.mobileNav');
const closeMenu = document.querySelector("#closeMenu")

menu.addEventListener('click' , ()=>{
    sidemenu.style.left = "0%";
    document.body.style.overflowY = "hidden"
})

closeMenu.addEventListener('click' , ()=>{
    sidemenu.style.left = "-100%";
    document.body.style.overflowY = "auto"
})