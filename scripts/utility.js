//Defines buttons and sections from the DOM
const buttons = document.getElementsByClassName('nav-button');
const sections = document.getElementsByClassName("content");

//Navigate function shows the section with id = button.value and hides the rest if neccessary
function navigate() {
    for (let i = 0; i < sections.length; i++) {
        let section = sections[i];
        if (this.value === section.id && section.hasAttribute('hidden')) {
            console.log(this.value + " shown!");
            section.removeAttribute('hidden');
        }
        else if (!(this.value === section.id) && !section.hasAttribute('hidden')) {
            console.log(section.id + " hidden");
            section.setAttribute("hidden", "");
        }
    }
}

//Adds event listeners to all the nav-buttons
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", navigate);
};