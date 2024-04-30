const clock_container = document.getElementById("clock"); 

let date_container = document.createElement("span"); 
date_container.classList.add("date");
let time_container = document.createElement("span"); 
time_container.classList.add("time"); 
clock_container.append(date_container, time_container); 


    function set_time() {

        let date = new Date().toLocaleDateString(); 
        let time = new Date().toLocaleTimeString(); 
    
    
        date_container.textContent = date; 
        time_container.textContent = time; 
    }
    
    set_time(); 
    setInterval(set_time, 1000); 
