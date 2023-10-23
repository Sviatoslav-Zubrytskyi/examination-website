document.body.style = "margin:0;"
divPanel = document.createElement("div");
divPanel.setAttribute("id", "panel");
divPanel.style = "overflow-y:scroll;height:100dvh;width:20dvw;background-color:rgba(0,150,255,1);z-index:999;float:none;display:none;"
document.body.appendChild(divPanel);

divLogo = document.createElement("div");
let time = 70;
divLogo.innerHTML = "Time left: " + Math.floor(time/60) +":" + time%60;
setInterval(()=>{
    time--;
    if (Math.floor(time/60).length == 2) {
        if (str(time%60).length == 2) {
            divLogo.innerHTML = "Time left: " + Math.floor(time/60) +":" + time%60;
        } else divLogo.innerHTML = "Time left: " + Math.floor(time/60) +":0" + time%60;
    }
    else {
        if (time%60/10 >=1) {
            divLogo.innerHTML = "Time left: 0" + Math.floor(time/60) +":" + time%60;
        } else divLogo.innerHTML = "Time left: 0" + Math.floor(time/60) +":0" + time%60;
    }
    
    
}, 1000);
divLogo.style = "height:10%;font-size:2dvh;text-align:center;display:flex;align-items:center;justify-content:center;color:white;"
divPanel.appendChild(divLogo);

divScroll = document.createElement("div");
divScroll.style = "width:100%;height:90%;background-color:rgba(0,0,0,0.2);"
divPanel.appendChild(divScroll);
