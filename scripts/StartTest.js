let pageCount = 0;
let testPages=[];
var content;
let answeredQuestions = 0;
let time = 20;
let timeLeft = time;
let timer;
function isTimeLeft() {
    return time > -1;
}
function runTimer(timerElement) {
    const timerCircle = document.getElementById('movingCircle');
    console.log(timerCircle);
    timerElement.classList.add('animatable');
    timerCircle.style.strokeDashoffset = 1;
    
    
    timer = setInterval(()=>{
        if(isTimeLeft()){
            if (Math.floor(time/60).length == 2) {
                if (str(time%60).length == 2) {
                    divDisplayedTime.innerHTML = "Time left: " + Math.floor(time/60) +":" + time%60;
                } else divDisplayedTime.innerHTML = "Time left: " + Math.floor(time/60) +":0" + time%60;
            }
            else {
                if (time%60/10 >=1) {
                    divDisplayedTime.innerHTML = "Time left: 0" + Math.floor(time/60) +":" + time%60;
                } else divDisplayedTime.innerHTML = "Time left: 0" + Math.floor(time/60) +":0" + time%60;
            }

            const timeRemaining = time--;
            const normalizedTime = (20 - timeRemaining) / 20;
            timerCircle.style.strokeDashoffset = normalizedTime;

        } else {
            timerElement.classList.remove('animatable');
            stopTest();
            
        }  

      
    }, 1000);
}
function startTest() {
    popUpTimer();
    content = document.createElement("div");
    content.style = "margin:0;background-color:rgba(0,0,0,0.01);display:flex;"
    content.style.overflow = "hidden";
    document.body.appendChild(content);

    divPanel = document.createElement("div");
    divPanel.setAttribute("id", "panel");
    divPanel.style = "height:100dvh;width:400px;background-color:white;z-index:9;display:none;"
    content.appendChild(divPanel);

    divLogo = document.createElement("div");
    divLogo.style = "line-height:4dvh;height:100px;font-size:16px;text-align:center;display:flex;align-items:center;justify-content:center;position:sticky;top:0;background-color:white;z-index:10;"
    divPanel.appendChild(divLogo);

    divTimerr = document.createElement("div");
    divTimerr.style = "background-color:rgba(0,0,0,0.1); width:300px; height:50px; border-radius:40px;display:flex;justify-content:center;align-items:center;padding-top:5px;color:rgba(0,0,0,0.9);"
    divLogo.appendChild(divTimerr);

    divDisplayedTime = document.createElement("div");
    divDisplayedTime.style = "width:70%;height:100%;display:flex; justify-content:center;align-items:center;font-size:inherit;";
    divTimerr.appendChild(divDisplayedTime);

    divAnimatableTimer = document.createElement("div");
    divAnimatableTimer.setAttribute("class", "timer animatable");
    divTimerr.appendChild(divAnimatableTimer);

    svgTimerClock = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    divAnimatableTimer.appendChild(svgTimerClock);

    circleTimer1 = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    circleTimer1.setAttribute("cx", "50%");
    circleTimer1.setAttribute("cy", "50%");
    circleTimer1.setAttribute("r", "10");
    svgTimerClock.appendChild(circleTimer1);

    circleTimer2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circleTimer2.setAttribute("id", "movingCircle")
    circleTimer2.setAttribute("cx", "50%");
    circleTimer2.setAttribute("cy", "50%");
    circleTimer2.setAttribute("r", "10");
    circleTimer2.setAttribute("pathLength", "1")
    svgTimerClock.appendChild(circleTimer2);


    divScroll = document.createElement("div");
    divScroll.style = "overflow-y:scroll;width:100%;background-color:white;"
    divScroll.setAttribute("id", "scrollPanel");
    divPanel.appendChild(divScroll);

    divPanelInfo = document.createElement("div");
    divPanelInfo.style = "font-size: 16px;background-color:white;position:relative;color:gray;padding:5px 0 5px 1vw;"
    divScroll.appendChild(divPanelInfo);
    divPanelInfo.innerHTML = "Answered questions: " + answeredQuestions + "/" + questions.length;



    questions.forEach((question) => {
        testPages.push(new TestPageGen(pageCount, "none"))
        testPages[pageCount].newTestPage();
    
        pageCount++;
    });
    testPages[0].main.style["display"] = "flex";
    buttonStart.style = "display:none";
    divPanel.style["display"] = "block";


    
    
    if (time == 0) {
        stopTest();
    }
    if (Math.floor(time/60).length == 2) {
        if (str(time%60).length == 2) {
            divDisplayedTime.innerHTML = "Time left: " + Math.floor(time/60) +":" + time%60;
        } else divDisplayedTime.innerHTML = "Time left: " + Math.floor(time/60) +":0" + time%60;
    }
    else {
        if (time%60/10 >=1) {
            divDisplayedTime.innerHTML = "Time left: 0" + Math.floor(time/60) +":" + time%60;
        } else divDisplayedTime.innerHTML = "Time left: 0" + Math.floor(time/60) +":0" + time%60;
    }

    





}
function changePopUp() {
    titlePopUpText.innerHTML = "Your score: " + finalScore + "/" + questions.length;
    popUpSubmit.style["opacity"] = 0;
    warningPopUpText.style["opacity"] = 0;
}
function stopTest () {
    createPopUp();
    clearInterval(timer);
    for (const [i, questionn] of testPages.entries()) {
        questionn.readyToSubmit = true;
        questionn.answer(i);
    };
    changePopUp();

}