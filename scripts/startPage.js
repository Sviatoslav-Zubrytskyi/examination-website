//creates button in the middle on the first page
buttonStart = document.createElement("button");
buttonStart.type="button";
buttonStart.addEventListener("click", startTest);
buttonStart.innerHTML="Start Real Exam";
buttonStart.style = "margin:0;position:absolute;top:30%;transform: translateY(-50%);transform: translateX(-50%);left:50%;background-color:white;width:300px;height:60px;cursor:pointer"
document.body.appendChild(buttonStart);