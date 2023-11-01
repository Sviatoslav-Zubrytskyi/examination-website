//stop tests
function stopTest () {
    clearInterval(timer); // stops timer
    
    //answers all of the questions
    for (const [i, questionn] of testPages.entries()) {
        questionn.readyToSubmit = true;
        questionn.answer(i);
    }; 

    //creates Pop up and changes it so it displays right answers
    if (!popUpExists) {
        createPopUp();
    } 
    changePopUp();
}