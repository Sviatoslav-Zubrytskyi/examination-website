let pageCount = 0;
let testPages=[];
var content;
let answeredQuestions = 0;
let time = 20;
let timer;

function startTest() {
    popUpTimer(); // creates time warning Pop Up

    // creating content div
    content = document.createElement("div");
    content.style = "margin:0;background-color:rgba(0,0,0,0.01);display:flex;"
    content.style.overflow = "hidden";
    document.body.appendChild(content);

    //creating panel on the left
    divPanel = document.createElement("div");
    divPanel.setAttribute("id", "panel");
    divPanel.style = "height:100dvh;width:400px;background-color:white;z-index:9;"
    content.appendChild(divPanel);

    //first div with gray div and time inside
    divLogo = document.createElement("div");
    divLogo.style = "line-height:4dvh;height:100px;font-size:16px;text-align:center;display:flex;align-items:center;justify-content:center;position:sticky;top:0;background-color:white;z-index:10;"
    divPanel.appendChild(divLogo);

    //timer div which is gray with time and clock inside
    divTimerr = document.createElement("div");
    divTimerr.style = "background-color:rgba(0,0,0,0.1); width:300px; height:50px; border-radius:40px;display:flex;justify-content:center;align-items:center;padding-top:5px;color:rgba(0,0,0,0.9);"
    divLogo.appendChild(divTimerr);

    //time counter div
    divDisplayedTime = document.createElement("div");
    divDisplayedTime.style = "width:70%;height:100%;display:flex; justify-content:center;align-items:center;font-size:inherit;";
    divTimerr.appendChild(divDisplayedTime);

    //animated clock div
    divAnimatableTimer = document.createElement("div");
    divAnimatableTimer.setAttribute("class", "timer animatable");
    divTimerr.appendChild(divAnimatableTimer);

    //creacting clock
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

    //div with list of all of the questions
    divScroll = document.createElement("div");
    divScroll.style = "overflow-y:scroll;width:100%;background-color:white;"
    divScroll.setAttribute("id", "scrollPanel");
    divPanel.appendChild(divScroll);

    //div with answered questions
    divPanelInfo = document.createElement("div");
    divPanelInfo.style = "font-size: 16px;background-color:white;position:relative;color:gray;padding:5px 0 5px 1vw;"
    divScroll.appendChild(divPanelInfo);
    divPanelInfo.innerHTML = "Answered questions: " + answeredQuestions + "/" + questions.length;

    //generating question page for each page and the div of the question in the panel
    questions.forEach((question) => {
        testPages.push(new TestPageGen(pageCount, "none")) // for each question set inherits a TestPageGen class
        testPages[pageCount].newTestPage(); // creates page for each question
    
        pageCount++;
    });

    testPages[0].main.style["display"] = "flex"; // displays only first question page
    buttonStart.style = "display:none"; // hides button on the very first page
    setTimeTo(divDisplayedTime); // displays static time before timer goes
}
