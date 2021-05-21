//References to translate variables
let previous = 1;


//Navigate shows the content associated with nav button
function navigate(event) {
    let times = [0, '1500ms', '2000ms', '3000ms'];
    const targetPositions = {
        "home": ["1", "-6.175%"],
        "profile": ["2", "-31.175%"],
        "projects": ["3", "-56.175%"],
        "contact": ["4", "-81.175%"]
    };
    //retrievs the position associated with the section
    let targetSection = event.currentTarget.name.toString();
    let targetPosition = targetPositions[targetSection];
    //Determines which transition timing variable to pick
    let translateTime = times[Math.abs(previous - parseInt(targetPosition[0]))].toString();
    //Changes the translation and timing for consistency
    $(":root").get(0).style.setProperty("--dyn-timing", translateTime);
    $(":root").get(0).style.setProperty("--dyn-position", targetPosition[1]);
    //Tracks the previous position of the slider
    //so the timing can be extended for further
    //translation
    previous = parseInt(targetPosition[0]);
}

$(document).ready(() => {
    //Adds event listeners to all the nav-buttons
    const buttons = $('.nav-button');
    buttons.on("click", navigate);
})