//function to set time in format 00:00
function setTimeTo(paragraph) {
    if (Math.floor(time/60).length == 2) {
        if (str(time%60).length == 2) {
            divDisplayedTime.innerHTML = "Time left: " + Math.floor(time/60) +":" + time%60;
        } else divDisplayedTime.innerHTML = "Time left: " + Math.floor(time/60) +":0" + time%60;
    }
    else {
        if (time%60/10 >=1) {
            divDisplayedTime.innerHTML = "Time left: 0" + Math.floor(time/60) +":" + time%60;
        } else divDisplayedTime.innerHTML = "Time left: 0" + Math.floor(time/60) +":0" + time%60;
    }
}
// function to set time in format 10m 10s
function convertTimeAndSetItTo(paragraph) {
    if (Math.floor(time/60).length == 2) {
        if (str(time%60).length == 2) {
            paragraph.innerHTML = Math.floor(time/60) +"m " + time%60 + "s";
        } else paragraph.innerHTML = Math.floor(time/60) +"m " + time%60 +"s";
    }
    else {
        if (time%60/10 >=1) {
            paragraph.innerHTML = Math.floor(time/60) +"m " + time%60 + "s";
        } else paragraph.innerHTML = Math.floor(time/60) +"m " + time%60 + "s";
    }
}