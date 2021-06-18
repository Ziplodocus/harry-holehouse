
function changeVariable(vari, newVal) {
    const root = document.querySelector(':root');
    const varVal = getComputedStyle(root).getPropertyValue(vari);
    if(newVal !== varVal) {
        root.style.setProperty(vari, newVal);
        return true
    }
    return false
}

//Position of current page
let position = 1;

//Navigate shows the content associated with nav button
function navigate(event) {
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
    changeVariable("--dyn-timing", translateTime);
    changeVariable("--dyn-position", targetPosition[1]);
    //Tracks the previous position of the slider
    //so the timing can be extended for translations of greater distance
    position = parseInt(targetPosition[0]);
}

//Converts a form submit event into object containing the name value pairs of the inputs
function toFormData(event) {
    const formData = {};
    const el = event.currentTarget;
    for (i = 0; i < el.length; i++) {
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

//Assigning event handlers
const buttons = document.querySelectorAll('.nav-button');
for (button of buttons) {
    button.addEventListener('click', navigate);
}

const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', formHandle);

const projectOpeners = document.querySelectorAll('.proj-tog');
for (projectButton of projectOpeners) {
    let project = projectButton.parentElement;
    projectButton.addEventListener('click', autoToggle(project, '2.8rem', 1000))
}
