buttonStart = document.createElement("button");
buttonStart.type="button";
buttonStart.addEventListener("click", startTest);
buttonStart.innerHTML="Start Real Exam";
buttonStart.style = "margin:0;position:absolute;top:30%;transform: translateY(-50%);transform: translateX(-50%);left:50%;background-color:white;width:300px;height:60px;cursor:pointer"
document.body.appendChild(buttonStart);

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
    divQuestion.style = "height:60%;max-height:500px;min-height:200px;max-width:100%;min-width:700px;width:60dvw;border:solid black 1px;";
    main.appendChild(divQuestion);

    divButtons = document.createElement("div");
    divButtons.style ="display:flex; height:20%;width:100%; justify-content:center; align-items:center;gap:50px";
    main.appendChild(divButtons);

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
