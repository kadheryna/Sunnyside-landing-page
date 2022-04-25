


let hamburger = document.querySelector(".hamburger__button");
let navMenu = document.querySelector(".header__nav_mobile");



hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});
