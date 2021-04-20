const homeBtn = document.getElementById("homeBtn");
const profileBtn = document.getElementById("profileBtn");
const projectsBtn = document.getElementById("projectsBtn");
const contactBtn = document.getElementById("contactBtn");

const sections = {
    home: document.getElementById("home"),
    profile: document.getElementById("profile"),
    projects:  document.getElementById("projects"),
    contact: document.getElementById("contact")
}

function navigate() {
    console.log(this.value);
    for (section in sections) {
        sections[section].setAttribute("hidden", "");
    }
    let destination = sections[this.value];
    destination.removeAttribute('hidden')
}

homeBtn.addEventListener("click", navigate);
profileBtn.addEventListener("click", navigate);
projectsBtn.addEventListener("click", navigate);
contactBtn.addEventListener("click", navigate);