let currentPage = 0;
let popUpExists = false;
let finalScore = 0;
let answeredQuestions = 0;
class TestPageGen {
    constructor(pageNumber, display) {
        this.pageNumber = pageNumber;
        this.display = display;
        this.displayButtonAnswer = "answer";
    }

    newTestPage() {
        this.main = document.createElement("main");
        this.main.setAttribute("id", "main")
        document.body.appendChild(this.main)
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
        this.h2Q.style = "margin-botton:10px;padding:0;font-size:2dvh;"
        this.form.appendChild(this.h2Q);
        this.h2Q.innerHTML = questions[this.pageNumber].questionList.question;


        this.label1 = document.createElement("label");
        this.form.appendChild(this.label1);
        this.label1.style = "font-size:2dvh;display:block;"
        this.q1 = document.createElement("input");
        this.q1.type = "radio";
        this.q1.setAttribute("name", "q");
        this.q1.setAttribute("checked", true);
        this.q1.style = "display:inline-block; ";
        this.q1.setAttribute("id", "q1");
        //this.q1.disabled = true;

        this.label1.for = this.q1.id;
        this.label1.appendChild(this.q1);
        this.label1.innerHTML += questions[this.pageNumber].questionList[0].answer;


        this.label2 = document.createElement("label");
        this.form.appendChild(this.label2);
        this.label2.style = "font-size:2dvh;display:block;"
        this.q2 = document.createElement("input");
        this.q2.type = "radio";
        this.q2.setAttribute("id", "q2");
        
        this.label2.for = this.q2.id;
        this.q2.setAttribute("name", "q");
        this.q2.style = "display:inline-block; "
        this.label2.appendChild(this.q2);
        this.label2.innerHTML += questions[this.pageNumber].questionList[1].answer;

        this.label3 = document.createElement("label");
        this.form.appendChild(this.label3);
        this.label3.style = "font-size:2dvh;display:block;"
        this.q3 = document.createElement("input");
        this.q3.type = "radio";
        this.q3.setAttribute("name", "q");
        this.q3.setAttribute("id", "q3");
        
        this.label3.for = this.q3.id;
        this.q3.style = "display:inline-block; "
        this.label3.appendChild(this.q3);
        this.label3.innerHTML += questions[this.pageNumber].questionList[2].answer;

        this.label4 = document.createElement("label");
        this.form.appendChild(this.label4);
        this.label4.style = "font-size:2dvh;display:block;"
        this.q4 = document.createElement("input");
        this.q4.type = "radio";
        this.q4.setAttribute("name", "q");
        this.q4.setAttribute("id", "q4");
        
        this.label4.for = this.q4.id;
        this.q4.style = "display:inline-block; "
        this.q4 = this.label4.appendChild(this.q4);
        this.label4.innerHTML += questions[this.pageNumber].questionList[3].answer;

        this.buttonGoBack = document.createElement("button");
        this.buttonGoBack.type="button";
        this.buttonGoBack.addEventListener("click", this.goBack);
        this.imgGoBack = document.createElement("img");
        this.imgGoBack.src= './src/';
        this.imgGoBack.style = "height:5vh;width:5vh;"
        this.buttonGoBack.appendChild(this.imgGoBack);
        this.buttonGoBack.style = "margin-right:5dvw; background-color:white;width:10vh;height:60px;cursor:pointer;border:none;"
        this.divButtons.appendChild(this.buttonGoBack);
        if (this.pageNumber == 0) {
            this.buttonGoBack.style["opacity"] = 0;
            this.buttonGoBack.style["z-index"] = -2;
        }

        this.bAnswer = document.createElement("button");
        this.bAnswer.type = "button";
        this.bAnswer.addEventListener("click", () => this.answer(this.pageNumber));
        this.bAnswer.innerHTML = "Show answer";
        this.bAnswer.style = "font-size:2dvh;margin:0; background-color:white;max-width:300px;width:30dvh;min-width:50px; max-height:60px;height:10dvh;min-height:10px;cursor:pointer;"
        this.divButtons.appendChild(this.bAnswer);

        this.bGoForward = document.createElement("button");
        this.bGoForward.type="button";
        this.bGoForward.addEventListener("click", this.goForward);
        this.imgGoForward = document.createElement("img");
        this.imgGoForward.src= './src/goForward.png';
        this.imgGoForward.style = "height:5vh;width:5vh;"
        this.bGoForward.appendChild(this.imgGoForward);
        this.bGoForward.style = "margin-left:5dvw;background-color:white;width:10vh;height:60px;cursor:pointer;border:none;"
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
        this.divPQuesiton.style = "font-size: 1.5dvh;padding:15px 50px 15px 50px;background-color:white;cursor:pointer;"
        this.divPQuesiton.addEventListener("click", ()=>{
            console.log("clicked on q " + this.pageNumber);
            testPages[currentPage].main.style["display"] = "none";
            testPages[this.pageNumber].main.style["display"] = "block";
            
            currentPage = this.pageNumber;
        })
        divScroll.appendChild(this.divPQuesiton);


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
            const checkBoxes = [this.q1,this.q2,this.q3,this.q4];
            if (this.displayButtonAnswer == "answer") {
                answeredQuestions++;
                for (const [i, label] of labels.entries()){

                    if (questions[page].questionList[i].correct  && label.firstChild.checked){
                        finalScore++;
                    }

                    if(questions[page].questionList[i].correct){
                        label.style = "font-size:2dvh;color:green;display:block;";
        
                    } else if (!questions[page].questionList[i].correct  && label.firstChild.checked) {
    
                        label.style = "font-size:2dvh;color:red;display:block;";
                    } else {
                        label.style = "font-size:2dvh;color:gray;display:block;";
                    }
    
                    label.firstChild.disabled = true;
                    
                }if(page==questions.length-1) {
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
                }
                if (answeredQuestions == questions.length){
                    pPopUp.innerHTML = "Your score: " + finalScore + "/" + questions.length;
                } else {
                    pPopUp.innerHTML = "Answer all the questions first";
                }
                
            }
           
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
