let pageCount = 0;
let testPages=[];

questions.forEach((question) => {
    testPages.push(new TestPageGen(pageCount, "none"))
    testPages[pageCount].newTestPage();

    pageCount++;
});




function startTest() {
    testPages[0].main.style["display"] = "flex";
    buttonStart.style = "display:none";
    divPanel.style["display"] = "block";
}