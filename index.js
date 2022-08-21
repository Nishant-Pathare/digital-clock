const dayE1=document.getElementById("day")
const monthE1=document.getElementById("month")
const yearE1=document.getElementById("year")
const hourE1=document.

getElementById("hour")
const minuteE1=document.getElementById("minutes")
const secondsE1=document.getElementById("seconds")
const ampmE1=document.getElementById("ampm")

function updateClock(){
    let d=new Date().getDate()
    let mo=new Date().getMonth()+1
    let y=new Date().getFullYear()
    let h=new Date().getHours()
    let m=new Date().getMinutes()
    let s=new Date().getSeconds()
    let ampm="AM"

    if (h>12){
        h=h-12
        ampm="PM"
    }

    d=d<10? "0"+d:d;
    mo=mo<10? "0"+mo:mo;
    h=h<10? "0"+h:h;
    m=m<10? "0"+m:m;
    s=s<10? "0"+s:s;
    dayE1.innerText=d;
    monthE1.innerText=mo;
    yearE1.innerText=y;
    hourE1.innerText=h;
    minuteE1.innerText=m;
    secondsE1.innerText=s;
    ampm.innerText=ampm;
    setTimeout(()=>{
        updateClock()
    },1000)
}
updateClock()
