
var sections = document.querySelectorAll(".navbar-nav a");
for(let i=0; i<sections.length;i++){
    sections[i].addEventListener("click",()=>{
        let width;
        if(window.outerHeight){
            width = window.outerWidth;
        }
        else {
            width = document.body.clientWidth;
        }
        if(width<=768){
            document.querySelector("button").click();

        }
    });
}