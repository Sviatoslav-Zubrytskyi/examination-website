let pageCount = 0;
let testPages=[];
questions.forEach((question) => {
    testPages.push(new TestPageGen(pageCount, "none"))
    testPages[pageCount].newTestPage();

    pageCount++;
});
//const TestPage0 = new TestPageGen(1, "block");

function startTest() {
    //console.log(testPages[0].display)
    // if you change testPages[pageNumber].display = block nothing changes as page is already generated

    testPages[0].main.style = "border:solid black 1px;height:65dvh;max-height:690px;min-height:400px;max-width:1100px;min-width:700px;width:60dvw;margin:20vh auto;display:block;";
    buttonStart.style = "display:none";

}
// each page's answers are generated in random order and each question has only 1 correct answer which should be declared later. 
//After pressing Answer button, style of the questions should be changed depended on wether you are right or not

// functions goBack and goForward should go to the previous page which should be saved. After each reload of the page all is generated from scratch. Saving could be added later

