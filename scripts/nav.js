
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})

const menu = document.querySelector(".nav__menu--list");
const menuBtn = document.querySelector("#open-menu-btn");
const closeMenu = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click',() => {
    menuBtn.style.display = "none";
    menu.style.display = "flex";
    closeMenu.style.display = "inline-block"
});
closeMenu.addEventListener('click',() => {
    menuBtn.style.display = "block";
    menu.style.display = "none";
    closeMenu.style.display = "none"
})

const faqs = document.querySelectorAll('.faq');
faqs.forEach(  faq => {
    faq.addEventListener('click' , () => {
        faq.classList.toggle('open');
        const iconChange = faq.querySelector('.faq__icon i')
        if (iconChange.className == "fa-solid fa-plus") {
            iconChange.className = "fa-solid fa-chevron-down";
        } 
        else {
            iconChange.className = "fa-solid fa-plus";
        }
    })
})

        