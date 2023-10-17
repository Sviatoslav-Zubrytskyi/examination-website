
//const TestPage0 = new TestPageGen(1, "block");

function startTest() {
    //TestPage0.newTestPage();
    let pageCount = 0;
    let testPages=[];
    questions.forEach((question) => {
        testPages.push(new TestPageGen(pageCount, "block"))
        testPages[pageCount].newTestPage();
        console.log(testPages)
        //console.log(pageCount);

        pageCount ++;
});

}

// forEach question in array questions -> generate new page 
//DONE




// each page gets unique id number for easier navigation. Navigation bar on the left could be added later

// each page's answers are generated in random order and each question has only 1 correct answer which should be declared later. 
//After pressing Answer button, style of the questions should be changed depended on wether you are right or not

// functions goBack and goForward should go to the previous page which should be saved. After each reload of the page all is generated from scratch. Saving could be added later

