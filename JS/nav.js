
var currentlyActive;
var sections = document.querySelectorAll(".navbar-nav a");
var activeClass_Elements = document.querySelectorAll(".active");

for(let i=0; i<sections.length;i++){
    sections[i].addEventListener("click",clicked);
    if(sections[i].classList.contains("active")){
        currentlyActive = sections[i];
    }
}



function clicked(){
    let width;
    let element = this;
    console.log(this.innerHTML);
    console.log(activeClass_Elements);
    if(window.outerHeight){
        width = window.outerWidth;
    }
    else {
        width = document.body.clientWidth;
    }
    if(width<=768){
        document.querySelector("button").click();
    }
    this.classList.add("active");
    currentlyActive.classList.remove("active");
    currentlyActive = this;
    

}