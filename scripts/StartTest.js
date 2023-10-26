let pageCount = 0;
let testPages=[];
var content;
let answeredQuestions = 0;
let time = 200;
function startTest() {
    content = document.createElement("div");
    content.style = "margin:0;background-color:rgba(0,0,0,0.01);display:flex;"
    content.style.overflow = "hidden";
    document.body.appendChild(content);

    divPanel = document.createElement("div");
    divPanel.setAttribute("id", "panel");
    divPanel.style = "height:100dvh;width:20dvw;background-color:rgba(0,150,255,1);z-index:9;float:none;display:none;"
    content.appendChild(divPanel);

    divLogo = document.createElement("div");
    divLogo.style = "line-height:4dvh;height:100px;font-size:2dvh;text-align:center;display:flex;align-items:center;justify-content:center;color:white;position:sticky;top:0;background-color:rgba(0,150,255,1);z-index:10;"
    divPanel.appendChild(divLogo);
    
    divScroll = document.createElement("div");
    divScroll.style = "overflow-y:scroll;width:100%;background-color:rgba(0,0,0,0.2);"
    divScroll.setAttribute("id", "scrollPanel");
    divPanel.appendChild(divScroll);

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
            divLogo.innerHTML = "Time left: " + Math.floor(time/60) +":" + time%6;;
        } else divLogo.innerHTML = "Time left: " + Math.floor(time/60) +":0" + time%6;;
    }
    else {
        if (time%60/10 >=1) {
            divLogo.innerHTML = "Time left: 0" + Math.floor(time/60) +":" + time%60;
        } else divLogo.innerHTML = "Time left: 0" + Math.floor(time/60) +":0" + time%60;
    }divLogo.innerHTML +="<br> Answered questions: " + answeredQuestions + "/" + questions.length;
    const timer = setInterval(()=>{
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
        divLogo.innerHTML +="<br> Answered questions: " + answeredQuestions + "/" + questions.length;
        if (time == 0) {
            stopTest();
            clearInterval(timer);
        }
    }, 1000);
    




    function stopTest () {
        for (const [i, questionn] of testPages.entries()) {
            questionn.answer(i);
        };
    }
}
