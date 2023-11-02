let divTimeMainPopUp; //makes variable global

//creates popUpTimer with warning that test is limited by time
function popUpTimer() {
    
    //creates flex div inside which content will be displayed
    divTimeMainPopUp= document.createElement("div");
    document.body.appendChild(divTimeMainPopUp);
    divTimeMainPopUp.style = "position:relative;display:flex;flex-direction:column;gap:1vh;opacity:1; border-radius:50px;width:800px; height:500px;background-color:white;position:absolute;z-index:999;top:50%;left:50%;transform:translate(-50%,-50%); border:solid 1px black;transition: all 0.1s ease-in-out;"

    //creates background blur
    bTimePopUp = document.createElement("div");
    bTimePopUp.style = "position:absolute;top:0;left:0;width:100dvw;height:100dvh;background-color:rgba(51,65,72,.87);z-index:998;opacity:1;transition:0.3s;";
    document.body.appendChild(bTimePopUp);

    //creates div to store text inside
    divTimePopUpText = document.createElement("div");
    divTimePopUpText.style = "width:100%; height:200px; display:flex; flex-direction:column;padding-left:20px; align-items:center;padding-top:100px;"
    divTimeMainPopUp.appendChild(divTimePopUpText);

    //creates paragrapgh with text inside text div
    titleTimePopUpText = document.createElement("p");
    titleTimePopUpText.style = "font-size:36px;margin:10px 0 30px;"
    titleTimePopUpText.innerHTML = "To answer all the questions you will have:";
    divTimePopUpText.appendChild(titleTimePopUpText);

    //creates gray div outside time
    divTimerr = document.createElement("div");
    divTimerr.style = "margin-bottom:50px;background-color:rgba(0,0,0,0.1); width:400px; height:72px; border-radius:40px;display:flex;justify-content:center;align-items:center;color:rgba(0,0,0,0.9);padding-top:5px;"
    divTimePopUpText.appendChild(divTimerr);

    //creates paragrapgh with time of the test inside text div
    divDisplayedTime = document.createElement("div");
    divDisplayedTime.style = "height:100%;display:flex; justify-content:center;align-items:center;font-size:inherit;gap:10px;font-size:36px;";
    divTimerr.appendChild(divDisplayedTime);
    convertTimeAndSetItTo(divDisplayedTime);

    //creates paragrapgh with text inside text div
    warningTimePopUpText = document.createElement("div");
    warningTimePopUpText.innerHTML = "After starting the test you are not able to stop the time.";
    warningTimePopUpText.style = "color:gray;"
    
    //creates div for start button
    divTimeButtons = document.createElement("div");
    divTimeButtons.style = "display:flex;align-items:center;width:100%;height:150px;flex-direction:column; gap:20px;"
    divTimeMainPopUp.appendChild(divTimeButtons);
    
    //creates start test button
    TimePopUpStart = document.createElement("button")
    TimePopUpStart.style = "width:200px;height:60px; background-color:orange;color:white;border:1px rgba(0,0,0,0.2) solid; font-size:24px;cursor:pointer;";
    TimePopUpStart.innerHTML = "<b>Start</b>";
    TimePopUpStart.addEventListener("click", hideTimePopUp); // ads event listener so test actually start on press
    divTimeButtons.appendChild(TimePopUpStart);
    divTimeButtons.appendChild(warningTimePopUpText);
}

//hides time pop up and starts timer
function hideTimePopUp() {
    runTimer(document.querySelector('.timer'));
    divTimeMainPopUp.style["opacity"] = 0;
    divTimeMainPopUp.style["z-index"] = -1;
    bTimePopUp.style["opacity"] = 0;
    bTimePopUp.style["z-index"] = -1;
}