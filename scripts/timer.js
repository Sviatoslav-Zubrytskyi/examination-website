let divTimeMainPopUp;

function convertTimeAndSetItTo(paragraph) {
    if (Math.floor(time/60).length == 2) {
        if (str(time%60).length == 2) {
            paragraph.innerHTML = Math.floor(time/60) +"m " + time%60 + "s";
        } else paragraph.innerHTML = Math.floor(time/60) +"m " + time%60 +"s";
    }
    else {
        if (time%60/10 >=1) {
            paragraph.innerHTML = Math.floor(time/60) +"m " + time%60 + "s";
        } else paragraph.innerHTML = Math.floor(time/60) +"m " + time%60 + "s";
    }
}
function popUpTimer() {

    divTimeMainPopUp= document.createElement("div");
    document.body.appendChild(divTimeMainPopUp);
    divTimeMainPopUp.style = "position:relative;display:flex;flex-direction:column;gap:1vh;opacity:1; border-radius:50px;width:800px; height:500px;background-color:white;position:absolute;z-index:999;top:50%;left:50%;transform:translate(-50%,-50%); border:solid 1px black;transition: all 0.1s ease-in-out;"

    bTimePopUp = document.createElement("div");
    bTimePopUp.style = "position:absolute;top:0;left:0;width:100dvw;height:100dvh;background-color:rgba(51,65,72,.87);z-index:998;opacity:1;transition:0.3s;";
    document.body.appendChild(bTimePopUp);

    divTimePopUpText = document.createElement("div");
    divTimePopUpText.style = "width:100%; height:250px; display:flex; flex-direction:column;padding-left:20px; align-items:center;padding-top:100px;"
    divTimeMainPopUp.appendChild(divTimePopUpText);

    titleTimePopUpText = document.createElement("p");
    titleTimePopUpText.style = "font-size:36px;margin:10px 0 30px;"
    titleTimePopUpText.innerHTML = "To answer all the questions you will have:";
    divTimePopUpText.appendChild(titleTimePopUpText);

    divTimerr = document.createElement("div");
    divTimerr.style = "margin-bottom:50px;background-color:rgba(0,0,0,0.1); width:400px; height:72px; border-radius:40px;display:flex;justify-content:center;align-items:center;color:rgba(0,0,0,0.9);padding-top:5px;"
    divTimePopUpText.appendChild(divTimerr);

    divDisplayedTime = document.createElement("div");
    divDisplayedTime.style = "height:100%;display:flex; justify-content:center;align-items:center;font-size:inherit;gap:10px;font-size:36px;";
    divTimerr.appendChild(divDisplayedTime);

    warningTimePopUpText = document.createElement("div");
    warningTimePopUpText.innerHTML = "After starting the test you are not able to stop the time.";
    warningTimePopUpText.style = "color:gray;"
    divTimePopUpText.appendChild(warningTimePopUpText);

    divTimePopUpButtons = document.createElement("div");
    divTimePopUpButtons.style = "width:100%; height: 100px;display:flex; justify-content:center;align-items:center; gap:80px;"
    divTimeMainPopUp.appendChild(divTimePopUpButtons);
    
    divTimeButtons = document.createElement("div");
    divTimeButtons.style = "display:flex; justify-content:center;align-items:center;width:100%;height:70px;"
    divTimeMainPopUp.appendChild(divTimeButtons);

    TimePopUpStart = document.createElement("button")
    TimePopUpStart.style = "width:200px;height:60px; background-color:orange;color:white;border:1px rgba(0,0,0,0.2) solid; font-size:24px;cursor:pointer;";
    TimePopUpStart.innerHTML = "<b>Start</b>";
    divTimeButtons.appendChild(TimePopUpStart);
    
    TimePopUpStart.addEventListener("click", hideTimePopUp);
    pTimePopUp = document.createElement("p");
    pTimePopUp.style = "text-align:center;display:block;display:flex;align-items:center;justify-content:center;"
    divTimeMainPopUp.appendChild(pTimePopUp);

    convertTimeAndSetItTo(divDisplayedTime);
}

function hideTimePopUp() {
    runTimer(document.querySelector('.timer'));
    divTimeMainPopUp.style["opacity"] = 0;
    divTimeMainPopUp.style["z-index"] = -1;
    bTimePopUp.style["opacity"] = 0;
    bTimePopUp.style["z-index"] = -1;

}