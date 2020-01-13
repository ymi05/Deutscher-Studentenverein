var options = document.querySelectorAll(".navbar-nav a");
for(let i=0; i<options.length;i++){
    options[i].addEventListener("click",()=>{
       document.querySelector("button").click();
    });
}