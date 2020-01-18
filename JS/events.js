var page_numbers = document.querySelectorAll(".page-link");
var link_clicked = 1;
var current_page = 1;
var window_loaded = true;
for(let i = 0;i<page_numbers.length;i++){
    page_numbers[i].addEventListener("click",loadEvents);
}
var allPrev = document.querySelectorAll(".prev");
var allNext = document.querySelectorAll(".next");


loadEvents();
function loadEvents(){
    if(window_loaded){
        window_loaded = false;
    }
    else if(this.innerHTML == "Next"){
        current_page +=1;
        if(current_page>=3){
            current_page = 3;
        }
        link_clicked = current_page;
    }
    else if(this.innerHTML == "Previous"){
        current_page -=1;
        if(current_page<=1){
            current_page = 1;
        }
        link_clicked = current_page;
    }
    else{
        link_clicked = this.innerHTML;
        current_page = link_clicked
     
    }
    
    if(current_page<=1){
        allPrev[0].classList.add("disabled");
        allPrev[1].classList.add("disabled");
        
    }
    else{
        allPrev[0].classList.remove("disabled");
        allPrev[1].classList.remove("disabled");
        
    }
    if(current_page>=3){
        allNext[0].classList.add("disabled");
        allNext[1].classList.add("disabled");
    }
    else{

        allNext[0].classList.remove("disabled");
        allNext[1].classList.remove("disabled");
    
    }
    console.log(link_clicked);
    fetch("../JSON/events"+link_clicked+".json")//fetch returns promise
    .then(function(res){
        return res.json(); //returns the text
    })
    .then(function (data) { 
        const parent = document.querySelector(".listing");
        while (parent.firstChild) {
            parent.firstChild.remove();
        }
        data.events.forEach(function(event){   
            current_page = link_clicked;
            let event_title = event.title;
            let event_start = event.start;
            let event_end = event.end;
            let event_location = event.location;
            let event_details = event.details;
            let information  = [event_title,event_start,event_end,event_location];
            // ---------------------------------------------------------
            let event_div = document.createElement("div");
            event_div.classList.add("event");
            event_div.appendChild(returnList(information));
            // ---------------------------------------------------------
            parent.appendChild(event_div);
            let paragraphh = document.createElement("p");
            paragraphh.innerHTML = event_details;
            parent.appendChild(paragraphh);
            // ---------------------------------------------------------
            let hr = document.createElement("hr");
            parent.appendChild(hr);
            // ---------------------------------------------------------
            window_loaded = false; 
            
        });
    
    
    })
    .catch(function(err){ //to catch an error
        console.log("Failed to retrive data from JSON file.");
    });
}


function returnList(information){
    let list = document.createElement("ul");
    list.classList.add("tabular-data");
    let header = document.createElement("h2");
    header.innerHTML = information[0];
   
    let details = ["Start:","End:","Location:"];
    list.appendChild(header);
    
    // -------------------------------------------------------------------
    
    for(let i=0;i<3;i++){
        let item = document.createElement("li");
        let initail_span = document.createElement("span");
        initail_span.innerHTML = details[i];
        let info_span = document.createElement("span");
        info_span.classList.add("info");
        info_span.innerHTML = information[i+1];
        item.appendChild(initail_span);
        item.appendChild(info_span);
        list.appendChild(item);
    }
    return list;
}