
//Position of current page
let position = 1;

//Navigate shows the content associated with nav button
function navigate(event) {
    console.log('yes');
    //defines the translate position required to display which content
    //and the time the transition takes and assigns these to variables in the CSS
    let times = [0, '1500ms', '2000ms', '3000ms'];
    const targetPositions = {
        "home": ["1", "-6.175%"],
        "profile": ["2", "-31.175%"],
        "projects": ["3", "-56.175%"],
        "contact": ["4", "-81.175%"]
    };
    let targetSection = event.currentTarget.name.toString();
    let targetPosition = targetPositions[targetSection];
    let translateTime = times[Math.abs(position - parseInt(targetPosition[0]))].toString();
    $(":root").get(0).style.setProperty("--dyn-timing", translateTime);
    $(":root").get(0).style.setProperty("--dyn-position", targetPosition[1]);
    //Tracks the previous position of the slider
    //so the timing can be extended for translations of greater distance
    position = parseInt(targetPosition[0]);
}

//Converts a form submit event into object containing the name value pairs of the inputs
function toFormData(event) {
    const formData = {};
    const el = event.currentTarget;
    let lim = el.length;
    for (i=0; i<lim; i++) {
        if(el[i].value) {
            formData[el[i].name] = el[i].value;
        }
    };
    return formData
}

//Handles the form submit
function formHandle(event) {
    event.preventDefault();
    let inf = toFormData(event);
    console.log(inf);
}

$(document).ready(() => {
    //Adds event listeners to all the nav links
    const buttons = $('nav a');
    buttons.on("click", navigate);

    $('#contact-form').submit(formHandle);
})

