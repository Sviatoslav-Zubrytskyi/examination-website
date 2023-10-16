function startTest() {
    buttonStart.style = "display:none"
    console.log("start test")
    
    main = document.createElement("main");
    main.setAttribute("id", "main")
    document.body.appendChild(main)
    main.style = "border:solid black 1px;height:65dvh;max-height:690px;min-height:400px;max-width:1100px;min-width:700px;width:60dvw;margin:20vh auto;"

    h1Count = document.createElement("h1");
    h1Count.innerHTML = "Question .../13";
    h1Count.style = "text-align:center;height:5vh";
    main.appendChild(h1Count)

    divQuestion = document.createElement("div");
    divQuestion.style = "height:60%;max-height:500px;min-height:200px;max-width:100%;min-width:700px;width:60dvw;border:solid black 1px;margin:0;padding:0;";
    main.appendChild(divQuestion);

    divButtons = document.createElement("div");
    divButtons.style ="display:flex; height:20%;width:100%; justify-content:center; align-items:center;gap:50px";
    main.appendChild(divButtons);

    form = document.createElement("form");
    form.style = "width:100%;height:100%;margin:0;padding:0;";
    divQuestion.appendChild(form);

    h2Q = document.createElement("h2");
    h2Q.style = "margin:0;padding:0;"
    form.appendChild(h2Q);
    h2Q.innerHTML = questions[0].questionList["question"];


    label1 = document.createElement("label");
    form.appendChild(label1);
    label1.style = "font-size:3dvh"
    q1 = document.createElement("input");
    q1.type = "radio";
    q1.setAttribute("name", "q");
    q1.style = "display:block; "
    label1.appendChild(q1);
    label1.innerHTML += questions[0].questionList[1];


    label2 = document.createElement("label");
    form.appendChild(label2);
    label2.style = "font-size:3dvh"
    q2 = document.createElement("input");
    q2.type = "radio";
    q2.setAttribute("name", "q");
    q2.style = "display:block; "
    label2.appendChild(q2);
    label2.innerHTML += questions[0].questionList[2];

    label3 = document.createElement("label");
    form.appendChild(label3);
    label3.style = "font-size:3dvh"
    q3 = document.createElement("input");
    q3.type = "radio";
    q3.setAttribute("name", "q");
    q3.style = "display:block; "
    label3.appendChild(q3);
    label3.innerHTML += questions[0].questionList[3];

    label4 = document.createElement("label");
    form.appendChild(label4);
    label4.style = "font-size:3dvh"
    q4 = document.createElement("input");
    q4.type = "radio";
    q4.setAttribute("name", "q");
    q4.style = "display:block; "
    label4.appendChild(q4);
    label4.innerHTML += questions[0].questionList[4];

    buttonGoBack = document.createElement("button");
    buttonGoBack.type="button";
    buttonGoBack.addEventListener("click", goBack);
    imgGoBack = document.createElement("img");
    imgGoBack.src= './src/goBack.png';
    imgGoBack.style = "height:5vh;width:5vh;"
    buttonGoBack.appendChild(imgGoBack);
    buttonGoBack.style = "margin:0; background-color:white;width:10vh;height:60px;cursor:pointer;"
    divButtons.appendChild(buttonGoBack);
    function goBack() {
        console.log("Go back");
    }

    bAnswer = document.createElement("button");
    bAnswer.type = "button";
    bAnswer.addEventListener("click", answer);
    bAnswer.innerHTML = "Answer";
    bAnswer.style = "margin:0; background-color:white;width:300px;height:60px;cursor:pointer;"
    divButtons.appendChild(bAnswer);
    function answer() {
        console.log("answer");
    }

    bGoForward = document.createElement("button");
    bGoForward.type="button";
    bGoForward.addEventListener("click", goForward);
    imgGoForward = document.createElement("img");
    imgGoForward.src= './src/goForward.png';
    imgGoForward.style = "height:5vh;width:5vh;"
    bGoForward.appendChild(imgGoForward);
    bGoForward.style = "margin:0;background-color:white;width:10vh;height:60px;cursor:pointer;"
    divButtons.appendChild(bGoForward);
    function goForward() {
        console.log("Go forward");
    }

}
