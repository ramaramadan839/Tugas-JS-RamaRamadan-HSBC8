alert("SELAMAT DATANG DI WEBSITE KAMI");

window.addEventListener('scroll', function() {
    const headerElm = document.querySelector('.header')
    console.log(window.scrollY)
    if(window.scrollY > 0){ 
        headerElm.style = "background-color:red"
    }else {
        headerElm.style = "background-color:blue"
    }
})  

//SLIDE CAROUSEL
let slideIndex = 1;
showSlides(slideIndex);

    function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length)
    {
    slideIndex = 1;
    }
    if (n < 1)
    {
    slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++)
    {
    slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

//JAM WIB
const hours = document.getElementById('jam');
const minutes = document.getElementById('menit');
const detik = document.getElementById('detik');

setInterval(() => {
    let currentTime = new Date;

    hours.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
    minutes.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    detik.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}, 1000)

//STOPWATCH
let milli = 0;
let sec = 0;
let min = 0;
let hr = 0;

let timer = false;

function start(){
    timer = true;
    myFun();
}
function stop(){
    timer= false;
    myFun();
    alert("Waktu berhenti! silakan klik tombol riset!");
}
function reset(){
    location.reload();
    alert("klik ok, untuk memulai page kembali :D");
    
}


function myFun(){
    if(timer == true){
        milli = milli + 1;
        if(milli == 100){
            sec = sec + 1
            milli = 0;
        }
        if(sec == 60){
            min = min + 1;
            sec = 0
        }
        if(min == 60){
            hr = hr + 1
            min = 0;
        }
         
        let getSec = sec;
        let getMin = min;
        let getHr = hr;

        if(sec < 10){
            getSec="0"+sec; 
        }
        if(min < 10){
            getMin="0"+min;
        }
        if(hr<10){
            getHr="0"+hr
        }

        setTimeout("myFun()",10 )
        document.getElementById("milli").innerHTML=milli;
        document.getElementById("sec").innerHTML=getSec;
        document.getElementById("min").innerHTML=getMin;
        document.getElementById("hr").innerHTML=getHr;

    }
}