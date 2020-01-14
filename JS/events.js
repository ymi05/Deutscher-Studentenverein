



loadEvents();



function loadEvents(){
    fetch("../events.json")//fetch returns promise
    .then(function(res){
      return res.json(); //returns the text
    })
    .then(function (data) {    
        data.events.forEach(function(event){
            let event_title = event.title;
        let event_start = event.start;
        let event_end = event.end;
        let event_location = event.location;
        let information  = [event_title,event_start,event_end,event_location];
        let event_div = document.createElement("div");
        event_div.classList.add("event");
        event_div.appendChild(returnList(information));
        document.querySelector(".listing").appendChild(event_div);
        let hr = document.createElement("hr");
        document.querySelector(".listing").appendChild(hr);

        
    });
    
    
})
.catch(function(err){ //to catch an error
    console.log("Error");
});
}


function returnList(information){
    let list = document.createElement("ul");
    list.classList.add("tabular-data");
    let header = document.createElement("h3");
    header.innerHTML = information[0];
    let details = ["Start:","End:","Location:"];
    list.appendChild(header);
    
    // -------------------------------------------------------------------
    
    for(let i=0;i<3;i++){
        let item = document.createElement("li");
        let initail_span = document.createElement("span");
        initail_span.innerHTML = details[i];
        console.log("here"); 
        let info_span = document.createElement("span");
        info_span.classList.add("info");
        info_span.innerHTML = information[i+1];
        item.appendChild(initail_span);
        item.appendChild(info_span);
        list.appendChild(item);
    }
    return list;
}