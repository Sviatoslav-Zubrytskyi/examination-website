//creates button in the middle on the first page
buttonStart1 = document.createElement("button");
buttonStart1.type="button";
buttonStart1.id = "casualQuestions";
buttonStart1.addEventListener("click", startTest);
buttonStart1.innerHTML="Start casual test";
buttonStart1.style = "margin:0;position:absolute;top:30%;transform: translateY(-50%);transform: translateX(-50%);left:50%;background-color:white;width:300px;height:60px;cursor:pointer"
document.body.appendChild(buttonStart1);

//creates button in the middle on the first page
buttonStart2 = document.createElement("button");
buttonStart2.type="button";
buttonStart2.id = "IMquestions";
buttonStart2.addEventListener("click", startTest);
buttonStart2.innerHTML="Start real exam";
buttonStart2.style = "margin:0;position:absolute;top:50%;transform: translateY(-50%);transform: translateX(-50%);left:50%;background-color:white;width:300px;height:60px;cursor:pointer"
document.body.appendChild(buttonStart2);