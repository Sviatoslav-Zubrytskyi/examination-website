let popUpExists = false; // defines that pop up does not exist

function createPopUp() {
    // if popUp is created for the first time - only then it actually can be created
    if (!popUpExists) {
        
        popUpExists = true; // sets that popUp exists
        
        //creates flex div inside which content will be displayed
        divMainPopUp= document.createElement("div");
        document.body.appendChild(divMainPopUp);
        divMainPopUp.style = "position:relative;display:flex;flex-direction:column;gap:1vh;opacity:1; border-radius:50px;width:800px; height:400px;background-color:white;position:absolute;z-index:999;top:50%;left:50%;transform:translate(-50%,-50%); border:solid 1px black;transition: all 0.1s ease-in-out;"

        //creates background blur
        bPopUp = document.createElement("div");
        bPopUp.style = "position:absolute;top:0;left:0;width:100dvw;height:100dvh;background-color:rgba(51,65,72,.87);z-index:998;opacity:1;transition:0.3s;";
        document.body.appendChild(bPopUp);
        bPopUp.addEventListener("click", hidePopUp);

        //creates orange background on top
        divPopUpInfo = document.createElement("div");
        divPopUpInfo.style = "height:150px;width:100%;background-color:#ffbe78;z-index:1000;border-radius:50px 50px 0 0;"
        divMainPopUp.appendChild(divPopUpInfo);

        //creates div with text
        divPopUpText = document.createElement("div");
        divPopUpText.style = "width:100%; height:150px; display:flex; flex-direction:column;padding-left:20px;"
        divMainPopUp.appendChild(divPopUpText);

        //creates paragrapgh with text inside text div
        titlePopUpText = document.createElement("p");
        titlePopUpText.style = "font-size:36px;margin:10px 0 30px;"
        divPopUpText.appendChild(titlePopUpText);

        //creates paragrapgh with text inside text div
        warningPopUpText = document.createElement("p");
        warningPopUpText.innerHTML = "All of the questions will be submitted automatically. You will not be able to change the answers after sumbitting the test.";
        warningPopUpText.style = "color:gray;"
        divPopUpText.appendChild(warningPopUpText);

        //creates div for Go back and Finish buttons
        divPopUpButtons = document.createElement("div");
        divPopUpButtons.style = "width:100%; height: 100px;display:flex; justify-content:center;align-items:center; gap:80px;"
        divMainPopUp.appendChild(divPopUpButtons);
        
        //creates Go back button
        PopUpBack = document.createElement("button")
        PopUpBack.style = "width:200px;height:60px; background-color:orange;color:white;border:1px rgba(0,0,0,0.2) solid; font-size:24px;cursor:pointer;";
        PopUpBack.innerHTML = "<b>Go back</b>";
        PopUpBack.addEventListener("click", hidePopUp);
        
        //creates Submit button
        popUpSubmit = document.createElement("button");
        popUpSubmit.type = "button";
        popUpSubmit.addEventListener("click", stopTest);
        popUpSubmit.innerHTML = "Submit";
        popUpSubmit.style = "display:flex;align-items:center;justify-content:center;color:gray;font-size:24px;margin:0; background-color:white;width:25dvw;min-width:50px; max-height:60px;height:10dvh;min-height:10px;cursor:pointer;transition:0.1s;border:1px rgba(0,0,0,0.2) solid;";
        divPopUpButtons.appendChild(popUpSubmit);
        divPopUpButtons.appendChild(PopUpBack);// Go back button is appended after Submit button so it is displayed on the right
        
        //creates paragrapgh with text for results
        pPopUp = document.createElement("p");
        pPopUp.style = "text-align:center;display:block;display:flex;align-items:center;justify-content:center;"
        divMainPopUp.appendChild(pPopUp);
        
        //if user answered all of the questions and pressed Hand In he will see the result popUp
        if (testFinished) {
            changePopUp();
        }
    }
}
//hides PopUp
function hidePopUp() {
    divMainPopUp.style["opacity"] = 0;
    divMainPopUp.style["z-index"] = -1;
    bPopUp.style["opacity"] = 0;
    bPopUp.style["z-index"] = -1;
    
}

//function to change popUp to only show the result
function changePopUp() {
    titlePopUpText.innerHTML = "Your score: " + finalScore + "/" + questionLength;
    popUpSubmit.style["opacity"] = 0;
    warningPopUpText.style["opacity"] = 0;
}
