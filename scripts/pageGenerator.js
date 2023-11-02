let currentPage = 0;
let finalScore = 0;
let testFinished = false;
document.body.style = "margin:0;"
document.body.style.overflow = 'hidden';

//class for creating a HTML page based on questions
class TestPageGen {
    constructor(pageNumber, questionSet) {
        this.questions = questionSet;
        this.pageNumber = pageNumber;
        this.displayButtonAnswer = "answer"; // current display state of the button
        this.goForward = this.goForward.bind(this);
    }

    //method for generating HTML page
    newTestPage() {

        //creates main content box
        this.main = document.createElement("main");
        this.main.setAttribute("id", "main");
        content.appendChild(this.main);
        this.main.style = "overflow-y:scroll;overflow-x:hidden;height:100dvh;width:calc(100dvw - 400px);position:relative;flex-direction:column;align-items:center;display:none"

        //creates headder on the top of the main
        this.header = document.createElement("div");
        this.header.style="position:fixed;top:0;left:0;width:100%;height:100px;background-color:white;z-index:2;display:flex;justify-content:flex-end;align-items:center;"
        this.main.appendChild(this.header); 

        // adds hand In button in the header
        this.handIn = document.createElement("div");
        this.handIn.style = "width:150px; height:50px;border:1px rgba(0,0,0,0.2) solid;z-index:999;background-color:white;color:rgba(0,150,255,1);margin:0 50px;font-size:24px;text-align:center;vertical-align:center;display: flex; align-items: center; justify-content: center;line:30px; cursor:pointer;"
        this.handIn.innerHTML = "Hand in";
        this.handIn.addEventListener("click", ()=> { // calls method if clicked
            this.handInM();
        })
        this.header.appendChild(this.handIn);

        //div for goBack and goForward buttons
        this.firstMainDiv = document.createElement("div");
        this.firstMainDiv.style = "position:relative;height:200px;margin-top:100px;width:100%;display:flex;justify-content:center;";
        this.main.appendChild(this.firstMainDiv);
        
        //creates goForward button based on svg
        this.svgGoForward = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.svgGoForward.style = "position:absolute;top:0;right:2dvw;background-color:rgba(0,0,0,0.01);width:48px;height:48px;cursor:pointer;transition:0.2s;";
        this.svgGoForward.setAttribute("viewBox", "0 0 240 240");

        //sets path to svg
        this.pathGoForward = document.createElementNS("http://www.w3.org/2000/svg","path");
        this.pathGoForward.setAttribute("d", "M80,68 L120,48 L180,120 L120,192 L80,172 L120,120 Z");
        this.firstMainDiv.appendChild(this.svgGoForward);
        this.svgGoForward.appendChild(this.pathGoForward);
        
        //creates goForward button based on svg
        this.svgGoBack = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.svgGoBack.style = "position:absolute;top:0;left:2dvw;background-color:rgba(0,0,0,0.01);width:48px;height:48px;cursor:pointer;transition:0.1s;";
        this.svgGoBack.setAttribute("viewBox", "0 0 240 240");

        //sets path to svg
        this.pathGoBack = document.createElementNS("http://www.w3.org/2000/svg","path");
        this.pathGoBack.setAttribute("d", "M80,68 L120,48 L180,120 L120,192 L80,172 L120,120 Z");
        this.svgGoBack.style.transform = "scaleX(-1)"; // mirrors the svg
        this.firstMainDiv.appendChild(this.svgGoBack);
        this.svgGoBack.appendChild(this.pathGoBack);

        //adds functionality to the buttons
        this.svgGoForward.addEventListener("click", this.goForward);
        this.svgGoBack.addEventListener("click", this.goBack);
        
        //on the last page goForward button is not displayed
        if (this.pageNumber == this.questions.length-1) {
            this.svgGoForward.style["opacity"] = 0;
            this.svgGoForward.style["z-index"] = -2;
        }
        //on the first page goBack button is not displayed
        if (this.pageNumber == 0) {
            this.svgGoBack.style["opacity"] = 0;
            this.svgGoBack.style["z-index"] = -2;
            }
        
        //adds hover animation to the goBack and goForward buttons
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

        //creates h1 with question count
        this.h1Count = document.createElement("p");
        this.h1Count.innerHTML = "Question " + (this.pageNumber+1) + "/" + this.questions.length;
        this.h1Count.style = "text-align:center;height:5vh; font-size:24px;";
        this.firstMainDiv.appendChild(this.h1Count);

        //creates div for question
        this.divQuestion = document.createElement("div");
        this.divQuestion.style = "width:100%;width:60dvw;margin:0;padding:0 20px 0 20px;";
        this.main.appendChild(this.divQuestion);

        //creates div for submit button
        this.divButtons = document.createElement("div");
        this.divButtons.style ="display:flex; height:20%;width:100%; align-items:center;gap:30px; margin:0; flex-direction:column;";
        this.main.appendChild(this.divButtons);

        //creates h2 for question and gets a question from an array with object with question set
        this.h2Q = document.createElement("p");
        this.h2Q.style = "margin-bottom:15dvh;padding:0;font-size:24px;"
        this.divQuestion.appendChild(this.h2Q);
        this.h2Q.innerHTML = this.questions[this.pageNumber].questionList.question;

        //create image for the question
        if(this.questions[this.pageNumber].questionList.img != "") {
            this.qImg = document.createElement("img");
            this.qImg.alt = this.questions[this.pageNumber].questionList.img;
            this.qImg.src = this.questions[this.pageNumber].questionList.img;
            this.divQuestion.appendChild(this.qImg);
        }

        //create audio for the question
        if(this.questions[this.pageNumber].questionList.audio != "") {
            this.qAudio = document.createElement("audio");
            this.qAudio.controls = "controls";
            this.qAudio.alt = this.questions[this.pageNumber].questionList.audio;
            this.qAudio.src = this.questions[this.pageNumber].questionList.audio;

            this.divAudio = document.createElement("div");
            this.divAudio.style = "display:flex; justify-content:center;align-items:center;width:100%;height:50px;"
            this.divQuestion.appendChild(this.divAudio)
            this.divAudio.appendChild(this.qAudio);
        }

        //creates first label
        this.label1 = document.createElement("label");
        this.divQuestion.appendChild(this.label1);
        let labStyle = "font-size:24px;display:block;cursor:pointer;position:relative;padding-left:2dvw;padding-bottom:0.5dvh;margin-bottom:2dvh;"; // defines style for all of the labels
        this.label1.style = labStyle; 

        //creates radio1 button to catch the answer
        this.q1 = document.createElement("input");
        this.q1.type = "radio";
        this.q1.setAttribute("name", "q");
        let qStyle = "display:none;"; // defines style for all of the radio buttons
        this.q1.style = qStyle;
        this.q1.setAttribute("id", "q1");

        //creates span1 that imitates radio button. This is done for adding animation to the radio buttons
        this.span1 = document.createElement("span");
        this.span1.setAttribute("class", "radio");
        let sStyle = "position:absolute;left:0;top:0.1dvh;width:1.2dvw;height:1.2dvw;transition:.3s;display:inline-block;cursor:pointer;border:2.5px solid rgba(0,0,0,0.3); aspect-ratio: 1;border-radius:50%;";
        this.span1.style = sStyle;
        
        //connects radio1 button with label1
        this.label1.for = this.q1.id;
        this.label1.appendChild(this.q1);
        this.label1.appendChild(this.span1);

        //gets one of the possible answers from question set
        this.label1.innerHTML += this.questions[this.pageNumber].questionList[0].answer;

        //creates second label
        this.label2 = document.createElement("label");
        this.divQuestion.appendChild(this.label2);
        this.label2.style = labStyle;

        //creates radio2 button to catch the answer
        this.q2 = document.createElement("input");
        this.q2.type = "radio";
        this.q2.setAttribute("id", "q2");

        //creates span2 that imitates radio button. This is done for adding animation to the radio buttons
        this.span2 = document.createElement("span");
        this.span2.setAttribute("class", "radio");
        this.span2.style = sStyle;
        
        //connects radio2 button with label1
        this.label2.for = this.q2.id;
        this.q2.setAttribute("name", "q");
        this.q2.style = qStyle;
        this.label2.appendChild(this.q2);
        this.label2.appendChild(this.span2);

        //gets one of the possible answers from question set
        this.label2.innerHTML += this.questions[this.pageNumber].questionList[1].answer;

        //creates third label
        this.label3 = document.createElement("label");
        this.divQuestion.appendChild(this.label3);
        this.label3.style = labStyle;

        //creates radio3 button to catch the answer
        this.q3 = document.createElement("input");
        this.q3.type = "radio";
        this.q3.setAttribute("name", "q");
        this.q3.setAttribute("id", "q3");

        //creates span3 that imitates radio button. This is done for adding animation to the radio buttons
        this.span3 = document.createElement("span");
        this.span3.setAttribute("class", "radio");
        this.span3.style = sStyle;
        
        //connects radio3 button with label1
        this.label3.for = this.q3.id;
        this.q3.style = qStyle;
        this.label3.appendChild(this.q3);
        this.label3.appendChild(this.span3);

        //gets one of the possible answers from question set
        this.label3.innerHTML += this.questions[this.pageNumber].questionList[2].answer;

        //creates fourth label
        this.label4 = document.createElement("label");
        this.divQuestion.appendChild(this.label4);
        this.label4.style = labStyle;

        //creates radio4 button to catch the answer
        this.q4 = document.createElement("input");
        this.q4.type = "radio";
        this.q4.setAttribute("name", "q");
        this.q4.setAttribute("id", "q4");

        //creates span4 that imitates radio button. This is done for adding animation to the radio buttons
        this.span4 = document.createElement("span");
        this.span4.setAttribute("class", "radio");
        this.span4.style = sStyle;
        
        //connects radio4 button with label1
        this.label4.for = this.q4.id;
        this.q4.style = qStyle;
        this.q4 = this.label4.appendChild(this.q4);
        this.label4.appendChild(this.span4);

        //gets one of the possible answers from question set
        this.label4.innerHTML += this.questions[this.pageNumber].questionList[3].answer;
        
        //creates Submit question button
        this.bAnswer = document.createElement("button");
        this.bAnswer.type = "button";
        this.bAnswer.addEventListener("click", () => this.answer(this.pageNumber));
        this.bAnswer.innerHTML = "Submit";
        this.bAnswer.style = "display:flex;align-items:center;justify-content:center;color:gray;font-size:24px;margin:0; background-color:white;width:35dvw;min-width:50px; max-height:60px;height:10dvh;min-height:10px;cursor:pointer;transition:0.1s;border:1px rgba(0,0,0,0.2) solid;";
        this.divButtons.appendChild(this.bAnswer);
        
        //creates parapgraph with potential warning that no question has been chosen
        this.pReady = document.createElement("p");
        this.divButtons.appendChild(this.pReady);
        this.pReady.style = "color:gray;font-size:16px;"

        this.readyToSubmit = false; //sets that user is not ready to submit by default
        for (const label of [this.label1,this.label2, this.label3, this.label4]) {
            label.addEventListener("click", ()=>{
                if(!this.readyToSubmit) { // only if user interacts with label for the first time code below can be compiled
                    this.readyToSubmit = true; //changes readyToSubmit property on click (interaction) with any label
                    //changes Submit button style
                    this.bAnswer.style["background-color"] = "rgba(0,150,255,1)"; 
                    this.bAnswer.style["color"] = "white";

                    this.pReady.innerHTML = ""; //clears warning paragraph text
                    
                    // adds hover animation to the submit button after it changed its style
                    this.bAnswer.addEventListener("mouseover", ()=> {
                        this.bAnswer.style["opacity"] = "0.9";
                    })
                    this.bAnswer.addEventListener("mouseout", ()=> {
                        this.bAnswer.style["opacity"] = "1";
                    })

                } // else nothing happens
            })
        }

        //creates individual div for each question on the left panel
        this.divPQuesiton = document.createElement("div");
        this.divPQuesiton.style = "font-size: 16px;padding:15px 1dvw 15px 3dvw;background-color:white;cursor:pointer;position:relative;";
        divScroll.appendChild(this.divPQuesiton);
        //fills in individual div based on the current question
        if (this.questions[this.pageNumber].questionList.question.replace(/<br>.*$/, "...").length > 150 ) { 
            // does not fully display questions longer than 150 characters. Replaces all text after </br> with "".
            this.divPQuesiton.innerHTML = (this.pageNumber+1) + ". " + this.questions[this.pageNumber].questionList.question.replace(/<br>.*$/, "").slice(0,150) + "...";
        } else {
            // if < 150 characters, replaces all text after </br> with "" and fully displays this question
            this.divPQuesiton.innerHTML = (this.pageNumber+1) + ". " + this.questions[this.pageNumber].questionList.question.replace(/<br>.*$/, "");
        }

        //adds focus effect on first question div of the panel
        if (this.pageNumber == 0) {
            this.divPQuesiton.style["background-color"] = "rgba(232,244,252)";
        }

        //creates blue circle before the question
        this.bCircle = document.createElement("span");
        this.bCircle.style = "aspect-ratio: 1;position:absolute; top:18%;left:1vw;width:0.5dvw;height:0.5dvw;background-color:blue;border-radius:0.8dvw;transition: all 250ms ease-in-out;";
        this.divPQuesiton.appendChild(this.bCircle);

        //creates checkmark that potentially can be displayed after user gets a correct answer
        this.checkMark = document.createElement("img");
        this.checkMark.src = "./src/checkmark.png";
        this.checkMark.style = "position:absolute; top:16%;left:1vw;width:1dvw;height:1dvw;opacity:0;transition: opacity 250ms ease-in-out;aspect-ratio: 1;";
        this.divPQuesiton.appendChild(this.checkMark);

        //creates X mark that potentially can be displayed after user makes a mistake
        this.Xwrong = document.createElement("img");
        this.Xwrong.src = "./src/X.png";
        this.Xwrong.style = "position:absolute; top:16%;left:1vw;width:1dvw;height:1dvw;opacity:0;transition: opacity 250ms ease-in-out;aspect-ratio: 1;";
        this.divPQuesiton.appendChild(this.Xwrong);

        //adds navigation between pages and applies focus effect accordingly
        this.divPQuesiton.addEventListener("click", ()=>{
            testPages[currentPage].main.style["display"] = "none";
            testPages[currentPage].divPQuesiton.style["background-color"] = "white";
            testPages[this.pageNumber].main.style["display"] = "flex";
            testPages[this.pageNumber].divPQuesiton.style["background-color"] = "rgba(232,244,252,0.9)";
            currentPage = this.pageNumber;
        })

        //adds hover effect
        this.divPQuesiton.addEventListener("mouseover", ()=>{
            if (this.pageNumber != currentPage) this.divPQuesiton.style["background-color"] = "rgba(232,244,252,0.9)";
            else this.divPQuesiton.style["background-color"] = "rgba(232,244,252,0.9)";
        })
        this.divPQuesiton.addEventListener("mouseleave", ()=> {
            if (this.pageNumber != currentPage) this.divPQuesiton.style["background-color"] = "white";
            else this.divPQuesiton.style["background-color"] = "rgb(232,244,252)";
        })
        
    }

    //method for goForward button
    goForward() {
        console.log(this.questions)
        if(currentPage != this.questions.length-1) {
            currentPage++; // goes forward
            testPages[currentPage-1].main.style["display"] = "none"; // hides current page
            testPages[currentPage].main.style["display"] = "flex"; // displays next page
            testPages[currentPage-1].divPQuesiton.style["background-color"] = "white";  // changes style of the current page's panel
            testPages[currentPage].divPQuesiton.style["background-color"] = "rgba(232,244,252,0.9)"; // changes style of the next page's panel
           
        }
    }
    
    //method for submit button
    answer(page) {
        
            const labels = [this.label1,this.label2, this.label3, this.label4]; // creates array of labels
            
            //checks if test is already finished
            if (answeredQuestions == this.questions.length) {
                testFinished = true; 
            }

            //if user did not choose an answer -> do not allow to proceed
            if(!this.readyToSubmit) {
                this.pReady.innerHTML = "Please complete your answer before submitting.";
            }
            
            //if user chose and answer and current state of this button is "answer" - > execute code below
            if (this.displayButtonAnswer == "answer" && this.readyToSubmit) {
                // changes state of the panel to wrong by default
                this.bCircle.style["z-index"] = "-1";
                this.Xwrong.style["opacity"] = "1";

                //changes the style of answer button
                this.bAnswer.style["background-color"] = "white";
                this.bAnswer.style["color"] = "rgba(0,150,255,1)";
                
                if (time !=0) answeredQuestions++; // answered question count ++ 
                divPanelInfo.innerHTML = "Answered questions: " + answeredQuestions + "/" + this.questions.length; // changes current display of the answered questions

                // for each [label number, label] ->
                for (const [i, label] of labels.entries()){
                    // if answer is correct -> execute the code below
                    if (this.questions[page].questionList[i].correct  && label.firstChild.checked){
                        finalScore++; // one more right question, so one more point to the final score
                        this.checkMark.style["opacity"] = "1"; // shows checkmark on the left panel 
                        this.Xwrong.style["z-index"] = "-1"; // hides X mark
                    }
                    if(this.questions[page].questionList[i].correct){
                        label.style["color"] = "green"; // changes text color to green to the correct answer
                    } else if (!this.questions[page].questionList[i].correct  && label.firstChild.checked) {
                        //changes text color to red if user made a mistake
                        label.style["color"] = "red";
                    } else {
                        //changes text color to gray of the rest labels
                        label.style["color"] = "gray";
                    }
                    
                    //disables radio buttons
                    label.firstChild.disabled = true; 
                    label.firstChild.style["cursor"] = "not-allowed"
                    

                    
                } 
                
                
                if(page==this.questions.length-1) {
                    //on the last page instead of "Next" state, button gets "Show result" state
                    this.bAnswer.innerHTML = "Show result";
                    this.displayButtonAnswer = "Show result";
                }else {
                    // "Next" state of the answer button

                    //creates svg inside the answer button
                    this.svgNext = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                    this.svgNext.style = "margin-top:-5px;background-color:rgba(0,0,0,0.01);width:24px;height:24px;cursor:pointer;transition:0.2s;";
                    this.svgNext.setAttribute("viewBox", "0 0 240 240");
                    this.svgNext.setAttribute("fill", "rgba(0,150,255,1)");
                    
                    //defines path of this svg
                    this.pathNext = document.createElementNS("http://www.w3.org/2000/svg","path");
                    this.pathNext.setAttribute("d", "M80,88 L120,68 L180,140 L120,212 L80,192 L120,140 Z");
                    this.svgNext.appendChild(this.pathNext);
                    
                    //sets "Next" state
                    this.bAnswer.innerHTML = "Next";
                    this.displayButtonAnswer = "Next question";

                    //adds hover effect to the "Next" button
                    this.bAnswer.appendChild(this.svgNext);
                    this.bAnswer.addEventListener("mouseover", ()=> {
                        this.bAnswer.style["background-color"] = "rgba(0,0,0,0.01)";
                    })
                    this.bAnswer.addEventListener("mouseout", ()=> {
                        this.bAnswer.style["background-color"] = "white";
                    })
                }
                    //finish test if all of the questions are submitted
                    if (answeredQuestions == this.questions.length) time = 0;
            }else if(this.displayButtonAnswer == "Next question") { // if "Next" state is a current state -> goes to the next page
                this.goForward();
            } else if (this.displayButtonAnswer== "Show result") { // if "Show result" is a current state -> shows popUp
                if (!popUpExists){
                    createPopUp();
                } else {
                    divMainPopUp.style["opacity"] = 1;
                    divMainPopUp.style["z-index"] = 999;
                    bPopUp.style["opacity"] = 1;
                    bPopUp.style["z-index"] = 998;
                }
                
            }
    }

    //method for goForward button
    goBack() {
        if (popUpExists) hidePopUp();
        if(currentPage != 0) {
            currentPage--; // goes back
            testPages[currentPage+1].main.style["display"] = "none"; // hides current page
            testPages[currentPage].main.style["display"] = "flex"; // displays previous page
            testPages[currentPage+1].divPQuesiton.style["background-color"] = "white"; // changes style of the current page's panel
            testPages[currentPage].divPQuesiton.style["background-color"] = "rgba(232,244,252,0.9)"; // changes style of the previous page's panel
        }
    }

    //method for finishing the test
    handInM(){
        if (!popUpExists){ //if popUp does not exist -> creates it 
            createPopUp();
            popUpExists = true;
        } else { //  otherwise changes popUp's style
            divMainPopUp.style["opacity"] = 1;
            divMainPopUp.style["z-index"] = 999;
            bPopUp.style["opacity"] = 1;
            bPopUp.style["z-index"] = 998;
        }
        if (answeredQuestions == this.questions.length || time ==0){}
        else titlePopUpText.innerHTML = "Not all of the questions are submitted"; // if user did not finish the test -> change sign in Hand In popUp
    }
}   
