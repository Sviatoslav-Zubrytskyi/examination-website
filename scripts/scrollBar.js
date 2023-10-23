    document.body.style = "margin:0;"
    divPanel = document.createElement("div");
    divPanel.setAttribute("id", "panel");
    divPanel.style = "overflow-y:scroll;height:100dvh;width:20dvw;background-color:rgba(255,0,0,0.1);z-index:999;float:none;display:none;"
    document.body.appendChild(divPanel);

    divLogo = document.createElement("div");
    divLogo.innerHTML += "Logo";
    divLogo.style = "height:10%;"
    divPanel.appendChild(divLogo);
    
    divScroll = document.createElement("div");
    divScroll.style = "width:100%;height:90%;background-color:rgba(0,0,0,0.2);"
    divPanel.appendChild(divScroll);
