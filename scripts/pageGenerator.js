class TestPageGen {
    constructor(pageNumber) {
        this.pageNumber = pageNumber;
    }
    newTestPage() {
        this.buttonStart.style = "display:none"
        console.log("start test")
        
        this.main = document.createElement("main");
        this.main.setAttribute("id", "main")
        document.body.appendChild(this.main)
        this.main.style = "border:solid black 1px;height:65dvh;max-height:690px;min-height:400px;max-width:1100px;min-width:700px;width:60dvw;margin:20vh auto;"

        this.h1Count = document.createElement("h1");
        this.h1Count.innerHTML = "Question .../13";
        this.h1Count.style = "text-align:center;height:5vh";
        this.main.appendChild(this.h1Count)

        this.divQuestion = document.createElement("div");
        this.divQuestion.style = "height:60%;max-height:500px;min-height:200px;max-width:100%;min-width:700px;width:60dvw;border:solid black 1px;margin:0;padding:0;";
        this.main.appendChild(this.divQuestion);

        this.divButtons = document.createElement("div");
        this.divButtons.style ="display:flex; height:20%;width:100%; justify-content:center; align-items:center;gap:50px";
        this.main.appendChild(this.divButtons);

        this.form = document.createElement("form");
        this.form.style = "width:100%;height:100%;margin:0;padding:0;";
        this.divQuestion.appendChild(this.form);

        this.h2Q = document.createElement("h2");
        this.h2Q.style = "margin:0;padding:0;"
        this.form.appendChild(this.h2Q);
        this.h2Q.innerHTML = questions[this.pageNumber].questionList["Question"];


        this.label1 = document.createElement("label");
        this.form.appendChild(this.label1);
        this.label1.style = "font-size:3dvh"
        this.q1 = document.createElement("input");
        this.q1.type = "radio";
        this.q1.setAttribute("name", "q");
        this.q1.style = "display:block; "
        this.label1.appendChild(this.q1);
        this.label1.innerHTML += questions[this.pageNumber].questionList[1];


        this.label2 = document.createElement("label");
        this.form.appendChild(this.label2);
        this.label2.style = "font-size:3dvh"
        this.q2 = document.createElement("input");
        this.q2.type = "radio";
        this.q2.setAttribute("name", "q");
        this.q2.style = "display:block; "
        this.label2.appendChild(q2);
        this.label2.innerHTML += questions[this.pageNumber].questionList[2];

        this.label3 = document.createElement("label");
        this.form.appendChild(this.label3);
        this.label3.style = "font-size:3dvh"
        this.q3 = document.createElement("input");
        this.q3.type = "radio";
        this.q3.setAttribute("name", "q");
        this.q3.style = "display:block; "
        this.label3.appendChild(this.q3);
        this.label3.innerHTML += questions[this.pageNumber].questionList[3];

        this.label4 = document.createElement("label");
        this.form.appendChild(this.label4);
        this.label4.style = "font-size:3dvh"
        this.q4 = document.createElement("input");
        this.q4.type = "radio";
        this.q4.setAttribute("name", "q");
        this.q4.style = "display:block; "
        this.label4.appendChild(q4);
        this.label4.innerHTML += questions[this.pageNumber].questionList[4];

        this.buttonGoBack = document.createElement("button");
        this.buttonGoBack.type="button";
        this.buttonGoBack.addEventListener("click", goBack);
        this.imgGoBack = document.createElement("img");
        this.imgGoBack.src= './src/goBack.png';
        this.imgGoBack.style = "height:5vh;width:5vh;"
        this.buttonGoBack.appendChild(this.imgGoBack);
        this.buttonGoBack.style = "margin:0; background-color:white;width:10vh;height:60px;cursor:pointer;"
        this.divButtons.appendChild(this.buttonGoBack);

        this.bAnswer = document.createElement("button");
        this.bAnswer.type = "button";
        this.bAnswer.addEventListener("click", answer);
        this.bAnswer.innerHTML = "Answer";
        this.bAnswer.style = "margin:0; background-color:white;width:300px;height:60px;cursor:pointer;"
        this.divButtons.appendChild(this.bAnswer);


        this.bGoForward = document.createElement("button");
        this.bGoForward.type="button";
        this.bGoForward.addEventListener("click", this.goForward);
        this.imgGoForward = document.createElement("img");
        this.imgGoForward.src= './src/goForward.png';
        this.imgGoForward.style = "height:5vh;width:5vh;"
        this.bGoForward.appendChild(this.imgGoForward);
        this.bGoForward.style = "margin:0;background-color:white;width:10vh;height:60px;cursor:pointer;"
        this.divButtons.appendChild(this.bGoForward);

    }
    goForward() {
        console.log("Go forward");
    }
    answer() {
        console.log("answer");
    }
    goBack() {
        console.log("Go back");
    }

}   
