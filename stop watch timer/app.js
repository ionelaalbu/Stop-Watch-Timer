const display=document.querySelector(".para")
const parent=document.querySelector(".btn-container")
let title=document.createElement("div")
let bigContainer=document.querySelector(".big")
bigContainer.appendChild(title)
let hours=0
let minutes=0
let seconds=0
let timeId;
let x;

function showTime(event){
    //use event.target to specify exactly the button that was clicked
    // .name is for attribute from html
    const button=event.target.name
    //checking the buttons with if statements
    if(button === "START"){
        // use timeId because we need it for clearInterval() to stop the setInteral(),
        // that's why setInterval is assigned to timeId
       timeId= setInterval(()=>{
        //seconds increases first
            seconds++;
            if(seconds>59){
                // if numbers of seconds are bigger than 59, the display will change to 0  
                seconds=0
                minutes++
                // after 60 seconds, minutes will increases
                if(minutes>59){
                    // but if number of minutes are bigger than 59, hours will increases
                    hours++
                }
            }
            //use ternary operator for changing the 0 before the seconds, minutes, hours
            display.innerText=`${hours <10 ? `0${hours}` : hours}:${minutes <10 ? `0${minutes}` : minutes}:${seconds <10 ? `0${seconds}` : seconds}`
        }, 1000)
        title.innerText="START"
        title.classList.add('title')
        x=setTimeout(()=>{
            title.innerText=""
        }, 1500)
        
    }
    if(button === "STOP"){
        clearInterval(timeId)
        title.innerText="STOP"
        title.classList.add('title')
        x=setTimeout(()=>{
            title.innerText=""
        }, 1500)
    }
    if(button ==="RESET"){
        clearInterval(timeId)
        //set  hours=minutes=seconds=0 when the button RESET was clicked
        hours=minutes=seconds=0
        // changing the dispaly to 0
        display.innerText=`${hours <10 ? `0${hours}` : hours}:${minutes <10 ? `0${minutes}` : minutes}:${seconds <10 ? `0${seconds}` : seconds}`
        title.innerText="RESET"
        title.classList.add('title')
        x=setTimeout(()=>{
            title.innerText=""
        }, 1500)
    }
}

parent.addEventListener("click", showTime)