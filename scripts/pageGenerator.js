let currentPage = 0;
let popUpExists = false;
let finalScore = 0;
class TestPageGen {
    constructor(pageNumber, display) {
        this.pageNumber = pageNumber;
        this.display = display;
        this.displayButtonAnswer = "answer";
    }

    newTestPage() {
        
        this.main = document.createElement("main");
        this.main.setAttribute("id", "main");
        document.body.appendChild(this.main);
        this.main.style = "height:65dvh;max-height:690px;min-height:200px;max-width:1100px;min-width:200px;width:60dvw;position:absolute;top:30%;transform: translateY(-50%);transform: translateX(-50%);left:60%;display:" + this.display;

        this.h1Count = document.createElement("h1");
        this.h1Count.innerHTML = "Question " + (this.pageNumber+1) + "/"+questions.length;
        this.h1Count.style = "text-align:center;height:5vh";
        this.main.appendChild(this.h1Count)

        this.divQuestion = document.createElement("div");
        this.divQuestion.style = "height:60%;max-height:500px;min-height:200px;max-width:100%;min-width:700px;width:60dvw;margin:0;padding:0 20px 0 20px;";
        this.main.appendChild(this.divQuestion);

        this.divButtons = document.createElement("div");
        this.divButtons.style ="display:flex; height:20%;width:100%; justify-content:center; align-items:center;gap:auto";
        this.main.appendChild(this.divButtons);

        this.form = document.createElement("form");
        this.form.style = "width:100%;height:100%;margin:0;padding:0;";
        this.divQuestion.appendChild(this.form);

        this.h2Q = document.createElement("h2");
        this.h2Q.style = "margin-bottom:5dvh;padding:0;font-size:2dvh;"
        this.form.appendChild(this.h2Q);
        this.h2Q.innerHTML = questions[this.pageNumber].questionList.question;


        this.label1 = document.createElement("label");
        this.form.appendChild(this.label1);
        let labStyle = "font-size:2dvh;display:block;cursor:pointer;position:relative;padding-left:2dvw;padding-bottom:0.5dvh;margin-bottom:2dvh;";
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
        this.pseudo = document.createpsudoelement 
        
        
        
        this.label1.for = this.q1.id;
        this.label1.appendChild(this.q1);
        this.label1.appendChild(this.span1);
        this.label1.innerHTML += questions[this.pageNumber].questionList[0].answer;


        this.label2 = document.createElement("label");
        this.form.appendChild(this.label2);
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
        this.form.appendChild(this.label3);
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
        this.form.appendChild(this.label4);
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

        this.buttonGoBack = document.createElement("button");
        this.buttonGoBack.type="button";
        this.buttonGoBack.addEventListener("click", this.goBack);
        this.imgGoBack = document.createElement("img");
        this.imgGoBack.src= './src/GoBack.png';
        this.imgGoBack.style = "height:5vh;width:5vh;aspect-ratio: 1;";
        this.buttonGoBack.appendChild(this.imgGoBack);
        this.buttonGoBack.style = "margin-right:5dvw; background-color:white;width:10vh;height:60px;cursor:pointer;border:none;";
        this.divButtons.appendChild(this.buttonGoBack);
        if (this.pageNumber == 0) {
            this.buttonGoBack.style["opacity"] = 0;
            this.buttonGoBack.style["z-index"] = -2;
        }

        this.bAnswer = document.createElement("button");
        this.bAnswer.type = "button";
        this.bAnswer.addEventListener("click", () => this.answer(this.pageNumber));
        this.bAnswer.innerHTML = "Show answer";
        this.bAnswer.style = "font-size:2dvh;margin:0; background-color:white;max-width:300px;width:30dvh;min-width:50px; max-height:60px;height:10dvh;min-height:10px;cursor:pointer;";
        this.divButtons.appendChild(this.bAnswer);

        this.bGoForward = document.createElement("button");
        this.bGoForward.type="button";
        this.bGoForward.addEventListener("click", this.goForward);
        this.imgGoForward = document.createElement("img");
        this.imgGoForward.src= './src/goForward.png';
        this.imgGoForward.style = "height:5vh;width:5vh;";
        this.bGoForward.appendChild(this.imgGoForward);
        this.bGoForward.style = "margin-left:5dvw;background-color:white;width:10vh;height:60px;cursor:pointer;border:none;";
        this.divButtons.appendChild(this.bGoForward);
        if (this.pageNumber == questions.length-1) {
            this.bGoForward.style["opacity"] = 0;
            this.bGoForward.style["z-index"] = -2;
        }

        this.divPQuesiton = document.createElement("div");


        if (questions[this.pageNumber].questionList.question.replace(/<br>.*$/, "...").length > 150 ) {
            this.divPQuesiton.innerHTML = (this.pageNumber+1) + ". " + questions[this.pageNumber].questionList.question.replace(/<br>.*$/, "").slice(0,150) + "...";
        } else {
            this.divPQuesiton.innerHTML = (this.pageNumber+1) + ". " + questions[this.pageNumber].questionList.question.replace(/<br>.*$/, "");
        }
        this.divPQuesiton.style = "font-size: 1.5dvh;padding:15px 1dvw 15px 3dvw;background-color:white;cursor:pointer;position:relative;";
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
            testPages[this.pageNumber].main.style["display"] = "block";
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
            testPages[currentPage].main.style["display"] = "none";
            testPages[currentPage+1].main.style["display"] = "block";
            currentPage++;
        }
    }
    answer(page) {
            
            const labels = [this.label1,this.label2, this.label3, this.label4];
            
            
            if (this.displayButtonAnswer == "answer") {
                this.bCircle.style["z-index"] = "-1";
                this.Xwrong.style["opacity"] = "1";
                if (time !=0) answeredQuestions++;
                for (const [i, label] of labels.entries()){

                    if (questions[page].questionList[i].correct  && label.firstChild.checked){
                        finalScore++;
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
                    this.bAnswer.innerHTML = "Next question";
                    this.displayButtonAnswer = "Next question";
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
                if (answeredQuestions == questions.length || time ==0){
                    pPopUp.innerHTML = "Your score: " + finalScore + "/" + questions.length;
                } else {
                    pPopUp.innerHTML = "Answer all the questions first";
                }
                
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
            }divLogo.innerHTML += "<br> Answered questions: " + answeredQuestions + "/" + questions.length;
    }
    goBack() {
        if (popUpExists) hidePopUp();
        if(currentPage != 0) {
            testPages[currentPage].main.style["display"] = "none";
            testPages[currentPage-1].main.style["display"] = "block";
            currentPage--;
        }
    }
}   
