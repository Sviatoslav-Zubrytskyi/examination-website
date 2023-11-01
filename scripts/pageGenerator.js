let currentPage = 0;
let popUpExists = false;
let finalScore = 0;
let testFinished = false;
document.body.style = "margin:0;"
document.body.style.overflow = 'hidden';
class TestPageGen {
    constructor(pageNumber, display) {
        this.pageNumber = pageNumber;
        this.display = display;
        this.displayButtonAnswer = "answer";
    }

    newTestPage() {
        this.main = document.createElement("main");
        this.main.setAttribute("id", "main");
        content.appendChild(this.main);
        this.main.style = "overflow-y:scroll;overflow-x:hidden;height:100dvh;width:calc(100dvw - 400px);position:relative;flex-direction:column;align-items:center;display:" + this.display;

        this.header = document.createElement("div");
        this.header.style="position:fixed;top:0;left:0;width:100%;height:100px;background-color:white;z-index:2;display:flex;justify-content:flex-end;align-items:center;"
        this.main.appendChild(this.header); 

        this.handIn = document.createElement("div");
        this.handIn.style = "width:150px; height:50px;border:1px rgba(0,0,0,0.2) solid;z-index:999;background-color:white;color:rgba(0,150,255,1);margin:0 50px;font-size:24px;text-align:center;vertical-align:center;display: flex; align-items: center; justify-content: center;line:30px; cursor:pointer;"
        this.handIn.innerHTML = "Hand in";
        this.handIn.addEventListener("click", ()=> {
            this.handInM();
        })
        this.header.appendChild(this.handIn);

        
        this.firstMainDiv = document.createElement("div");
        this.firstMainDiv.style = "position:relative;height:200px;margin-top:100px;width:100%;display:flex;justify-content:center;";
        this.main.appendChild(this.firstMainDiv);
        
        this.svgGoForward = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.svgGoForward.style = "position:absolute;top:0;right:2dvw;background-color:rgba(0,0,0,0.01);width:48px;height:48px;cursor:pointer;transition:0.2s;";
        this.svgGoForward.setAttribute("viewBox", "0 0 240 240");

        this.pathGoForward = document.createElementNS("http://www.w3.org/2000/svg","path");
        this.pathGoForward.setAttribute("d", "M80,68 L120,48 L180,120 L120,192 L80,172 L120,120 Z");
        this.firstMainDiv.appendChild(this.svgGoForward);
        this.svgGoForward.appendChild(this.pathGoForward);
        

        this.svgGoBack = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.svgGoBack.style = "position:absolute;top:0;left:2dvw;background-color:rgba(0,0,0,0.01);width:48px;height:48px;cursor:pointer;transition:0.1s;";
        this.svgGoBack.setAttribute("viewBox", "0 0 240 240")
        this.pathGoBack = document.createElementNS("http://www.w3.org/2000/svg","path");
        this.pathGoBack.setAttribute("d", "M80,68 L120,48 L180,120 L120,192 L80,172 L120,120 Z");
        this.svgGoBack.style.transform = "scaleX(-1)";
        this.firstMainDiv.appendChild(this.svgGoBack);
        this.svgGoBack.appendChild(this.pathGoBack);
        this.svgGoForward.addEventListener("click", this.goForward);
        this.svgGoBack.addEventListener("click", this.goBack);
        if (this.pageNumber == questions.length-1) {
            this.svgGoForward.style["opacity"] = 0;
            this.svgGoForward.style["z-index"] = -2;
        }
        if (this.pageNumber == 0) {
            this.svgGoBack.style["opacity"] = 0;
            this.svgGoBack.style["z-index"] = -2;
            }
        for(const element of [this.svgGoForward, this.svgGoBack]) {
            element.addEventListener("mouseover", ()=> {
                element.style["background-color"] = "rgba(0,0,25,0.1)";
                element.setAttribute("fill", "rgba(0,150,255,0.9)");
            })
            element.addEventListener("mouseleave", ()=>{
                element.style["background-color"] = "rgba(0,0,0,0.01)";
                element.setAttribute("fill", "rgba(0,0,0,1");
            })
        }


        this.h1Count = document.createElement("p");
        this.h1Count.innerHTML = "Question " + (this.pageNumber+1) + "/"+questions.length;
        this.h1Count.style = "text-align:center;height:5vh; font-size:24px;";
        
        this.firstMainDiv.appendChild(this.h1Count);


        this.divQuestion = document.createElement("div");
        this.divQuestion.style = "width:100%;width:60dvw;margin:0;padding:0 20px 0 20px;";
        this.main.appendChild(this.divQuestion);

        this.divButtons = document.createElement("div");
        this.divButtons.style ="display:flex; height:20%;width:100%; align-items:center;gap:30px; margin:0; flex-direction:column;";
        this.main.appendChild(this.divButtons);

        this.h2Q = document.createElement("p");
        this.h2Q.style = "margin-bottom:15dvh;padding:0;font-size:24px;"
        this.divQuestion.appendChild(this.h2Q);
        this.h2Q.innerHTML = questions[this.pageNumber].questionList.question;


        this.label1 = document.createElement("label");
        this.divQuestion.appendChild(this.label1);
        let labStyle = "font-size:24px;display:block;cursor:pointer;position:relative;padding-left:2dvw;padding-bottom:0.5dvh;margin-bottom:2dvh;";
        this.label1.style = labStyle;
        this.q1 = document.createElement("input");
        this.q1.type = "radio";
        this.q1.setAttribute("name", "q");
        this.q1.setAttribute("checked", true);
        let qStyle = "display:none;";
        this.q1.style = qStyle;
        this.q1.setAttribute("id", "q1");

        this.span1 = document.createElement("span");
        this.span1.setAttribute("class", "radio");
        let sStyle = "position:absolute;left:0;top:0.1dvh;width:1.2dvw;height:1.2dvw;transition:.3s;display:inline-block;cursor:pointer;border:2.5px solid rgba(0,0,0,0.3); aspect-ratio: 1;border-radius:50%;";
        this.span1.style = sStyle;
        
        this.label1.for = this.q1.id;
        this.label1.appendChild(this.q1);
        this.label1.appendChild(this.span1);
        this.label1.innerHTML += questions[this.pageNumber].questionList[0].answer;


        this.label2 = document.createElement("label");
        this.divQuestion.appendChild(this.label2);
        this.label2.style = labStyle;
        this.q2 = document.createElement("input");
        this.q2.type = "radio";
        this.q2.setAttribute("id", "q2");

        this.span2 = document.createElement("span");
        this.span2.setAttribute("class", "radio");
        this.span2.style = sStyle;
        
        this.label2.for = this.q2.id;
        this.q2.setAttribute("name", "q");
        this.q2.style = qStyle;
        this.label2.appendChild(this.q2);
        this.label2.appendChild(this.span2);
        this.label2.innerHTML += questions[this.pageNumber].questionList[1].answer;

        this.label3 = document.createElement("label");
        this.divQuestion.appendChild(this.label3);
        this.label3.style = labStyle;
        this.q3 = document.createElement("input");
        this.q3.type = "radio";
        this.q3.setAttribute("name", "q");
        this.q3.setAttribute("id", "q3");

        this.span3 = document.createElement("span");
        this.span3.setAttribute("class", "radio");
        this.span3.style = sStyle;
        
        this.label3.for = this.q3.id;
        this.q3.style = qStyle;
        this.label3.appendChild(this.q3);
        this.label3.appendChild(this.span3);
        this.label3.innerHTML += questions[this.pageNumber].questionList[2].answer;

        this.label4 = document.createElement("label");
        this.divQuestion.appendChild(this.label4);
        this.label4.style = labStyle;
        this.q4 = document.createElement("input");
        this.q4.type = "radio";
        this.q4.setAttribute("name", "q");
        this.q4.setAttribute("id", "q4");

        this.span4 = document.createElement("span");
        this.span4.setAttribute("class", "radio");
        this.span4.style = sStyle;
        
        this.label4.for = this.q4.id;
        this.q4.style = qStyle;
        this.q4 = this.label4.appendChild(this.q4);
        this.label4.appendChild(this.span4);
        this.label4.innerHTML += questions[this.pageNumber].questionList[3].answer;
            
        this.bAnswer = document.createElement("button");
        this.bAnswer.type = "button";
        this.bAnswer.addEventListener("click", () => this.answer(this.pageNumber));
        this.bAnswer.innerHTML = "Submit";
        this.bAnswer.style = "display:flex;align-items:center;justify-content:center;color:gray;font-size:24px;margin:0; background-color:white;width:35dvw;min-width:50px; max-height:60px;height:10dvh;min-height:10px;cursor:pointer;transition:0.1s;border:1px rgba(0,0,0,0.2) solid;";
        this.divButtons.appendChild(this.bAnswer);
        
        this.pReady = document.createElement("p");
        this.divButtons.appendChild(this.pReady);
        this.pReady.style = "color:gray;font-size:16px;"

        this.readyToSubmit = false;
        for (const label of [this.label1,this.label2, this.label3, this.label4]) {
            label.addEventListener("click", ()=>{
                if(!this.readyToSubmit) {
                    this.readyToSubmit = true;
                    this.bAnswer.style["background-color"] = "rgba(0,150,255,1)";
                    this.bAnswer.style["color"] = "white";
                    this.pReady.innerHTML = "";
                    this.bAnswer.addEventListener("mouseover", ()=> {
                        this.bAnswer.style["opacity"] = "0.9";
                    })
                    this.bAnswer.addEventListener("mouseout", ()=> {
                        this.bAnswer.style["opacity"] = "1";
                    })
                } 
            })
        }

        this.divPQuesiton = document.createElement("div");


        if (questions[this.pageNumber].questionList.question.replace(/<br>.*$/, "...").length > 150 ) {
            this.divPQuesiton.innerHTML = (this.pageNumber+1) + ". " + questions[this.pageNumber].questionList.question.replace(/<br>.*$/, "").slice(0,150) + "...";
        } else {
            this.divPQuesiton.innerHTML = (this.pageNumber+1) + ". " + questions[this.pageNumber].questionList.question.replace(/<br>.*$/, "");
        }
        this.divPQuesiton.style = "font-size: 16px;padding:15px 1dvw 15px 3dvw;background-color:white;cursor:pointer;position:relative;";
        if (this.pageNumber == 0) {
            this.divPQuesiton.style["background-color"] = "rgba(232,244,252)";
        }
        divScroll.appendChild(this.divPQuesiton);
        this.bCircle = document.createElement("span");
        this.bCircle.style = "aspect-ratio: 1;position:absolute; top:18%;left:1vw;width:0.5dvw;height:0.5dvw;background-color:blue;border-radius:0.8dvw;transition: all 250ms ease-in-out;";

        this.divPQuesiton.appendChild(this.bCircle);

        this.checkMark = document.createElement("img");
        this.checkMark.src = "./src/checkmark.png";
       
        this.checkMark.style = "position:absolute; top:16%;left:1vw;width:1dvw;height:1dvw;opacity:0;transition: opacity 250ms ease-in-out;aspect-ratio: 1;";
        this.divPQuesiton.appendChild(this.checkMark);

        this.Xwrong = document.createElement("img");
        this.Xwrong.src = "./src/X.png";
       
        this.Xwrong.style = "position:absolute; top:16%;left:1vw;width:1dvw;height:1dvw;opacity:0;transition: opacity 250ms ease-in-out;aspect-ratio: 1;";
        this.divPQuesiton.appendChild(this.Xwrong);

        this.divPQuesiton.addEventListener("click", ()=>{
            testPages[currentPage].main.style["display"] = "none";
            testPages[currentPage].divPQuesiton.style["background-color"] = "white";
            testPages[this.pageNumber].main.style["display"] = "flex";
            testPages[this.pageNumber].divPQuesiton.style["background-color"] = "rgba(232,244,252,0.9)";
            currentPage = this.pageNumber;
        })
        this.divPQuesiton.addEventListener("mouseover", ()=>{
            if (this.pageNumber != currentPage) this.divPQuesiton.style["background-color"] = "rgba(232,244,252,0.9)";
            else this.divPQuesiton.style["background-color"] = "rgba(232,244,252,0.9)";
        })
        this.divPQuesiton.addEventListener("mouseleave", ()=> {
            if (this.pageNumber != currentPage) this.divPQuesiton.style["background-color"] = "white";
            else this.divPQuesiton.style["background-color"] = "rgb(232,244,252)";
        })
        
    }
    
    goForward() {
        if(currentPage != questions.length-1) {
            currentPage++;
            testPages[currentPage-1].main.style["display"] = "none";
            testPages[currentPage].main.style["display"] = "flex";
            testPages[currentPage-1].divPQuesiton.style["background-color"] = "white";
            testPages[currentPage].divPQuesiton.style["background-color"] = "rgba(232,244,252,0.9)";
           
        }
    }
    answer(page) {

            const labels = [this.label1,this.label2, this.label3, this.label4];
            if (answeredQuestions == questions.length) {
                testFinished = true;
                
            }
            if(!this.readyToSubmit) {
                console.log("not ready to")
                this.pReady.innerHTML = "Please complete your answer before submitting.";
            }
            
            if (this.displayButtonAnswer == "answer" && this.readyToSubmit) {
                this.bCircle.style["z-index"] = "-1";
                this.Xwrong.style["opacity"] = "1";

                this.bAnswer.style["background-color"] = "white";
                this.bAnswer.style["color"] = "rgba(0,150,255,1)";
                
                if (time !=0) answeredQuestions++;
                for (const [i, label] of labels.entries()){

                    if (questions[page].questionList[i].correct  && label.firstChild.checked){
                        finalScore++;
                        divPanelInfo.innerHTML = "Answered questions: " + answeredQuestions + "/" + questions.length;
                        this.checkMark.style["opacity"] = 1;
                        this.Xwrong.style["z-index"] = "-1";
                    }
                    if(questions[page].questionList[i].correct){
                        label.style["color"] = "green";
        
                    } else if (!questions[page].questionList[i].correct  && label.firstChild.checked) {
    
                        label.style["color"] = "red";
                    } else {
                        label.style["color"] = "gray";
                    }
    
                    label.firstChild.disabled = true;
                    label.firstChild.style["cursor"] = "not-allowed"
                    

                    
                } 
                
                if(page==questions.length-1) {
                    this.bAnswer.innerHTML = "Show result";
                    this.displayButtonAnswer = "Show result";
                }else {

                    this.svgNext = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                    this.svgNext.style = "background-color:rgba(0,0,0,0.01);width:24px;height:24px;cursor:pointer;transition:0.2s;";
                    this.svgNext.setAttribute("viewBox", "0 0 240 240");
                    this.svgNext.setAttribute("fill", "rgba(0,150,255,1)");
                    this.pathNext = document.createElementNS("http://www.w3.org/2000/svg","path");
                    this.pathNext.setAttribute("d", "M80,88 L120,68 L180,140 L120,212 L80,192 L120,140 Z");
                    
                    this.svgNext.appendChild(this.pathNext);

                    this.bAnswer.innerHTML = "Next";
                    this.bAnswer.appendChild(this.svgNext);
                    this.displayButtonAnswer = "Next question";
                    this.bAnswer.style["background-color"] = "rgba(0,0,0,0.01)";
                    this.bAnswer.addEventListener("mouseover", ()=> {
                        this.bAnswer.style["background-color"] = "rgba(0,0,0,0.01)";
                    })
                    this.bAnswer.addEventListener("mouseout", ()=> {
                        this.bAnswer.style["background-color"] = "white";
                    })
                }

                

            }else if(this.displayButtonAnswer == "Next question") {
                this.goForward();
            } else if (this.displayButtonAnswer== "Show result") {
                if (!popUpExists){
                    createPopUp();
                    popUpExists = true;
                } else {
                    divMainPopUp.style["opacity"] = 1;
                    divMainPopUp.style["z-index"] = 999;
                    bPopUp.style["opacity"] = 1;
                    bPopUp.style["z-index"] = 998;
                }
                
            }
    }
    goBack() {
        if (popUpExists) hidePopUp();
        if(currentPage != 0) {
            currentPage--;
            testPages[currentPage+1].main.style["display"] = "none";
            testPages[currentPage].main.style["display"] = "flex";
            testPages[currentPage+1].divPQuesiton.style["background-color"] = "white";
            testPages[currentPage].divPQuesiton.style["background-color"] = "rgba(232,244,252,0.9)";
        }
    }
    handInM(){
        if (!popUpExists){
            createPopUp();
            popUpExists = true;
        } else {
            divMainPopUp.style["opacity"] = 1;
            divMainPopUp.style["z-index"] = 999;
            bPopUp.style["opacity"] = 1;
            bPopUp.style["z-index"] = 998;
        }
        if (answeredQuestions == questions.length || time ==0){


        } else {
            titlePopUpText.innerHTML = "Not all of the questions are submitted";
        }
    }
}   
