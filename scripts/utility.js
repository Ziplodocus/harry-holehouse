//References to translate variables
let previous = 1;
let times = [0, 800, 1100, 1400];
const targetPositions = {
    home: '1',
    profile: '2',
    projects: '3',
    contact: '4',
};

//Navigate shows the content associated with nav button
function navigate() {
    //gets button name value and compares with positions
    //to receive the reference the the css variable
    let targetSection = this.name.toString();
    let targetPosition = '';
    for (let section in targetPositions) {
        if(section == targetSection) {
            targetPosition = targetPositions[section];
            break
        }
    }
    //Determines which transition timing varibale to pick
    let translateTime = times[Math.abs(previous - parseInt(targetPositions[targetSection]))].toString();
    //Changes the translation and timing for consistency
    $(".slider").css("--nav-time", `var(--translate-${translateTime})`);
    $(".slider").css("--content-translate", `var(--translate-${targetPosition})`);
    //Tracks the previous position of the slider
    //so the timing can be extended for further
    //translation
    previous = parseInt(targetPosition);
}

$(document).ready(() => {
    //Adds event listeners to all the nav-buttons
    const buttons = $('.nav-button');
    buttons.on("click", navigate);
})