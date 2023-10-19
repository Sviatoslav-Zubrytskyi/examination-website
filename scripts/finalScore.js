function createPopUp() {
    divMainPopUp= document.createElement("div");
    document.body.appendChild(divMainPopUp);
    divMainPopUp.style = "display:flex;align-items:center;justify-content:center;flex-direction:column;gap:1vh;opacity:1; max-width:400px;width:30dvw;min-width:200px;max-height:200px;height:20dvh;min-height:100px;background-color:white;position:absolute;z-index:999;top:50%;left:40%;transform:translateY(-50%); border:solid 1px black;"

    pPopUp = document.createElement("p");
    pPopUp.style = "text-align:center;display:block;margin-bottom:20px;"
    divMainPopUp.appendChild(pPopUp);

    bHidePopUp = document.createElement("button");
    bHidePopUp.addEventListener("click", hidePopUp);
    bHidePopUp.innerHTML = "Close"
    bHidePopUp.style = "background-color:white;display:block;cursor:pointer;"
    divMainPopUp.appendChild(bHidePopUp);
}

function hidePopUp() {
    divMainPopUp.style["opacity"] = 0;
    divMainPopUp.style["z-index"] = -1;
}
