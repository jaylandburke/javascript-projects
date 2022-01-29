let ms = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

let interval = null;

let status = "stopped";

function stopWatch(){
    ms++;
    if(ms / 1000 === 1){
        ms = 0;
        seconds++;

        if(seconds / 60 === 1){
            seconds = 0;
            minutes++;

            if(minutes / 60 === 1){
                hours++;
            }
        }
    }

    if(seconds < 10){
        displaySeconds = "0" + seconds.toString();
    }
    else{
        displaySeconds = seconds;
    }

    if(minutes < 10){
        displayMinutes = "0" + minutes.toString();
    }
    else{
        displayMinutes = minutes;
    }

    if(hours < 10){
        displayHours = "0" + hours.toString();
    }
    else{
        displayHours = hours;
    }
    
    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds + ":" + ms;
    
}



function startStop(){

    if(status === "stopped"){

        interval = window.setInterval(stopWatch, 1);
        document.getElementsByClassName("stop-btn");
        status = "started"
    }
    else{

        window.clearInterval(interval);
        document.getElementsByClassName("start-btn");
        status = "stopped";
    }

}

function reset(){
    window.clearInterval(interval);
    ms = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerHTML = "00:00:00:00";


}

function stop(){
    window.clearInterval(interval);
    ms = ms;
    seconds = displaySeconds;
    minutes = displayMinutes;
    hours = displayHours;
    
}