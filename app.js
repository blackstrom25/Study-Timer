const startBtn = document.querySelector(".start-btn");
const resetBtn = document.querySelector(".reset-btn");
const timerDisplay = document.querySelector(".main-timer");
const userInputSection = document.querySelector(".user-Input");
const userInputMins = document.querySelector(".user-Mins");
const userInputSecs = document.querySelector(".user-Secs");
// const userInputBtn = document.querySelector(".inpBtn");

let myMin = 0;
let mySec = 0;
disableTimer = false;

function timerStart(){

    if(mySec <= 0){
        myMin = myMin - 1;
        mySec = 59;
    }

    let e = setInterval(() => {
        if (disableTimer || myMin < 0){
            clearInterval(e);
        }
        else{
            timerDisplay.innerText = `${myMin < 10 ? '0' + myMin : myMin}:${mySec < 10 ? '0' + mySec : mySec}`;
            mySec--;
            if (mySec < 0){
                mySec = 59;
                myMin--;
            }
        }
    }, 1000);
}

function setInitial(){
    timerDisplay.innerText = `${myMin < 10 ? '0' + myMin : myMin}:${mySec < 10 ? '0' + mySec : mySec}`;
}

function resetTimer(){
    timerDisplay.innerText = `00:00`;
}

startBtn.addEventListener("click", () =>{
    disableTimer = false;
    myMin = userInputMins.value == '' ? 0 : userInputMins.value;
    mySec = userInputSecs.value == '' ? 0 : userInputSecs.value;
    userInputMins.value = '';
    userInputSecs.value = '';
    setInitial()
    timerStart();
    resetBtn.classList.remove("hide")
    // startBtn.classList.add("hide")
    userInputSection.classList.add("hide")
    resetBtn.classList.remove("hide")
});

resetBtn.addEventListener("click", () => {
    disableTimer = true;
    resetTimer()
    resetBtn.classList.add("hide")
    // startBtn.classList.remove("hide")
    userInputSection.classList.remove("hide")
})