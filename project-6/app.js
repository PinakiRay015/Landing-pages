const menu = document.querySelector('#menu')
const mobileNav = document.querySelector('#mobileNav')

menu.addEventListener('click' , ()=>{
    mobileNav.style.display = (mobileNav.style.display == "none") ? "block" : "none";
})