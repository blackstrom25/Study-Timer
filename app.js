const startBtn = document.querySelector(".start-btn");
const resetBtn = document.querySelector(".reset-btn");
const timerDisplay = document.querySelector(".main-timer");
const userInputSection = document.querySelector(".user-Input");
const userInputMins = document.querySelector(".user-Mins");
const userInputSecs = document.querySelector(".user-Secs");
const errorMsg = document.querySelector(".error-msg");
// const userInputBtn = document.querySelector(".inpBtn");

let myMin = 0;
let mySec = 0;
let disableTimer = false;

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

    if (userInputMins.value == '' || userInputSecs.value == ''){
        errorMsg.classList.remove("hide");
        errorMsg.innerText = "Enter some value";
        userInputMins.value = '';
        userInputSecs.value = '';
    }
    else if (userInputMins.value < 0 || userInputSecs.value > 59 || userInputSecs.value < 0){
        errorMsg.classList.remove("hide");
        errorMsg.innerText = "Enter valid value";
        userInputMins.value = '';
        userInputSecs.value = '';
    }
    else{
        errorMsg.innerText = "";
        errorMsg.classList.add("hide");
        myMin = userInputMins.value;
        mySec = userInputSecs.value;
        disableTimer = false;
        userInputMins.value = '';
        userInputSecs.value = '';
        setInitial()
        timerStart();
        resetBtn.classList.remove("hide")
        userInputSection.classList.add("hide")
    }
});

resetBtn.addEventListener("click", () => {
    disableTimer = true;
    resetTimer()
    resetBtn.classList.add("hide")
    userInputSection.classList.remove("hide")
})