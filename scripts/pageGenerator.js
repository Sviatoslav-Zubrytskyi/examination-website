currentPage = 0;
class TestPageGen {
    constructor(pageNumber, display) {
        this.pageNumber = pageNumber;
        this.display = display;
    }

    newTestPage() {
        this.main = document.createElement("main");
        this.main.setAttribute("id", "main")
        document.body.appendChild(this.main)
        this.main.style = "height:65dvh;max-height:690px;min-height:400px;max-width:1100px;min-width:700px;width:60dvw;margin:20vh auto;display:" + this.display;

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
        this.form.setAttribute("action", "./scripts/pageGenerator.js")
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
        // this.q1.setAttribute("checked", true);
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
        this.imgGoBack.src= './src/goBack.png';
        this.imgGoBack.style = "height:5vh;width:5vh;"
        this.buttonGoBack.appendChild(this.imgGoBack);
        this.buttonGoBack.style = "margin-right:100px; background-color:white;width:10vh;height:60px;cursor:pointer;border:none;"
        this.divButtons.appendChild(this.buttonGoBack);

        this.bAnswer = document.createElement("button");
        this.bAnswer.type = "button";
        this.bAnswer.addEventListener("click", () => this.answer(this.pageNumber));
        this.bAnswer.innerHTML = "Show answer";
        this.bAnswer.style = "margin:0; background-color:white;max-width:300px;width:30dvh;min-width:100px; max-height:60px;height:10dvh;min-height:20px;cursor:pointer;"
        this.divButtons.appendChild(this.bAnswer);


        this.bGoForward = document.createElement("button");
        this.bGoForward.type="button";
        this.bGoForward.addEventListener("click", this.goForward);
        this.imgGoForward = document.createElement("img");
        this.imgGoForward.src= './src/goForward.png';
        this.imgGoForward.style = "height:5vh;width:5vh;"
        this.bGoForward.appendChild(this.imgGoForward);
        this.bGoForward.style = "margin-left:100px;background-color:white;width:10vh;height:60px;cursor:pointer;border:none;"
        this.divButtons.appendChild(this.bGoForward);

    }
    goForward() {
        console.log("Go forward");
        if(currentPage != questions.length-1) {
            console.log(currentPage)
            testPages[currentPage].main.style["display"] = "none";
            testPages[currentPage+1].main.style["display"] = "block";
            currentPage++;
        }
    }
    answer(page) {
            //this.form.submit();
            this.labels = [this.label1,this.label2, this.label3, this.label4];
            this.checkBoxes = [this.q1,this.q2,this.q3,this.q4];


            console.log(this);
            //this.q.addEventListener("change",() => {
            //    if ( this.q1.checked ) {
            //        console.log("checked")
            //     } else {
            //        console.log("unchecked");
            //     }
            //})

            // for (const checkBox of checkBoxes) {
                // console.log(checkBox,checkBox.checked, checkBox.value);
            // }
            
            for (const [i, label] of labels.entries()){
                console.log(this.checkBoxes[i].checked);
                //console.log(label.firstChild.checked);
                if(questions[page].questionList[i].correct){
                    //console.log("Question " + i + " is correct");
                    label.style = "font-size:2dvh;color:green;display:block;";
                } else {
                    //console.log("Question " + i + " is checked and incorrect");
                    label.style = "font-size:2dvh;color:red;display:block;";
                }
            }        
    }
    goBack() {
            console.log("Go back");
            if(currentPage != 0) {
                testPages[currentPage].main.style["display"] = "none";
                testPages[currentPage-1].main.style["display"] = "block";
                currentPage--;
            }
    }
}   
