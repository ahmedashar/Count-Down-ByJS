var minutes = document.getElementById("min")
var seconds = document.getElementById("sec")
var interval;
var minInput = +prompt("Enter Count Down in Minutes",1)
var min = minInput -1;

var btn1 = document.getElementById("btn1")
var btn2 = document.getElementById("btn2")

minutes.innerHTML = min;
var sec = 60;
seconds.innerHTML = sec;

function countDown(){
    sec--;
   
    seconds.innerHTML = sec;
    if(sec == 0){
        min--;
        minutes.innerHTML = min;
        sec = 60;
    }
    
    if(min<0){
        sec = 0;
        min = 0;
        seconds.innerHTML = sec;
        minutes.innerHTML = min;
        clearInterval(interval)
        btn1.disabled = true
        btn2.disabled = true
        
        
    }
   
    
}

function start(){
    interval = setInterval(countDown,1000)
    btn1.disabled = true
    btn2.disabled = false
}
function stop(){
    clearInterval(interval);
    btn1.disabled = false
    btn2.disabled = true
}