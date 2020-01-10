const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav");
const links = document.querySelectorAll(".links li");

hamburger.addEventListener("click",()=>{
    navLinks.classList.toggle("open");
})