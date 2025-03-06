const timerBtn= document.getElementById("timerBtn");
const timerResetBtn= document.getElementById("timerResetBtn");
let timerOutput= document.getElementById('currentTime');
let intervalCount;
let inputMin= document.getElementById("inputMin");
let inputSec= document.getElementById("inputSec");

const timer=()=>{
    let minutes= parseInt(document.getElementById('inputMin').value) ||0;
    let seconds= parseInt(document.getElementById('inputSec').value) ||0;
    let totalSeconds= minutes*60 +seconds;

    if(totalSeconds>0){
        intervalCount=setInterval(()=>{
            if(totalSeconds<=0){
                clearAll()
            } else{
                const displayMin= Math.floor(totalSeconds/60);
                const displaySec= Math.floor(totalSeconds % 60)
                inputMin.value='';
                inputSec.value='';

                timerOutput.innerHTML=`${String(displayMin).padStart(2,'0')}:${String(displaySec).padStart(2,'0')}`;
                totalSeconds--;
                timerBtn.disabled='true';
            }
        },1000)
    }
}

const clearAll= () =>{
    clearInterval(intervalCount);
    alert('Time is over');
    timerOutput.innerText= new Date().toLocaleString('en-us',{ timeStyle:"short"},{dateStyle: 'short'});
    timerBtn.disabled=false;
    return
}
const btnReset=()=>{
    clearInterval(intervalCount);
    timerOutput.innerText= new Date().toLocaleString('en-us',{ timeStyle:"short"},{dateStyle: 'short'});
    timerBtn.disabled=false;
    return
}
timerResetBtn.addEventListener('click',btnReset)


export{ timerBtn, timer, intervalCount}