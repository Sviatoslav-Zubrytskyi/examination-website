let pageCount = 0;
let testPages=[];
questions.forEach((question) => {
    testPages.push(new TestPageGen(pageCount, "none"))
    testPages[pageCount].newTestPage();

    pageCount++;
});

function startTest() {
    testPages[0].main.style = "border:solid black 1px;height:65dvh;max-height:690px;min-height:400px;max-width:1100px;min-width:700px;width:60dvw;margin:20vh auto;display:block;";
    buttonStart.style = "display:none";
}

