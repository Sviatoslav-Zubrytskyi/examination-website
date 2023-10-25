function createPopUp() {
    divMainPopUp= document.createElement("div");
    document.body.appendChild(divMainPopUp);
    divMainPopUp.style = "display:flex;align-items:center;justify-content:center;flex-direction:column;gap:1vh;opacity:1; max-width:400px;width:30dvw;min-width:200px;max-height:200px;height:20dvh;min-height:100px;background-color:white;position:absolute;z-index:999;top:50%;left:40%;transform:translateY(-50%); border:solid 1px black;transition: all 0.1s ease-in-out;"

    let bPopUp = document.createElement("div");
    bPopUp.style = "position:absolute;top:0;left:0;width:100dvw;height:100dvh;background-color:rgba(0,0,0,0.3);z-index:998;opacity:1;transition:0.3s;";
    document.body.appendChild(bPopUp);
    bPopUp.addEventListener("click", hidePopUp);

    pPopUp = document.createElement("p");
    pPopUp.style = "text-align:center;display:block;margin-bottom:20px;"
    divMainPopUp.appendChild(pPopUp);
}

function hidePopUp() {
    divMainPopUp.style["opacity"] = 0;
    divMainPopUp.style["z-index"] = -1;
    bPopUp.style["opacity"] = 0;
    bPopUp.style["z-index"] = -1;
}
