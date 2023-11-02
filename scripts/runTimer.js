//checks if there is time left
function isTimeLeft() {
    return time > -1;
}
//function to start the timer including animation of the clock and text
function runTimer(timerElement) {
    const timerCircle = document.getElementById('movingCircle'); // gets circle to be animated
    timerElement.classList.add('animatable'); // assigns class to it
    timerCircle.style.strokeDashoffset = 1; // fills in the circle
    
    // interval function that changes time each second
    timer = setInterval(()=>{
        if(isTimeLeft()){ 
            setTimeTo(divDisplayedTime); // displays time in divDisplayedTime in format 00:00 
    
            const timeRemaining = time--; // -1 second
            const normalizedTime = (initialTime - timeRemaining) / initialTime; // defines in which direction circle goes
            timerCircle.style.strokeDashoffset = normalizedTime; // changes style of the time crcle

        } else {
            timerElement.classList.remove('animatable'); // stops animation
            stopTest(); // calls function which clears interval and answers all of the questions
            
        }  

      
    }, 1000);
}