let leftBtn = document.getElementById("left-btn");
let rightBtn = document.getElementById("right-btn");
let slideImg = document.querySelectorAll(".slide-img");
let navBtn = document.getElementById("nav-btn");
let navBgr = document.getElementById("nav-bgr");
let navBgrT = document.querySelector("#nav-btn::after");
let navBgrB = document.querySelector("#nav-btn::before");
let nav = document.querySelector("nav");

let slidePos = 0;
let activePos = 0;

navBtn.addEventListener("click", function() {
    nav.classList.toggle("nav-active");
    navBtn.classList.toggle("nav-btn-active");
});

rightBtn.addEventListener("click", function() {
    slideImg[activePos].classList.remove('active-img');
    slidePos++;
    activePos = slidePos%3;
    slideImg[activePos].classList.add('active-img');
});

leftBtn.addEventListener("click", function() {
    slideImg[activePos].classList.remove('active-img');
    slidePos--;
    activePos = slidePos%3;
    slideImg[activePos].classList.add('active-img');
});