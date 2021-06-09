
const projectOpeners = document.querySelectorAll('.proj-tog');


function toggleProject(event) {
    const projBut = event.currentTarget;
    const project = event.currentTarget.parentElement;
    projBut.removeEventListener('click', toggleProject)
    
    if(project.classList.contains('closed')) {
        project.style.height = (project.scrollHeight - 29) + 'px';
        project.classList.remove('closed');
        setTimeout(() => {
            project.style.height = null;
        }, 1000);
    }
    else {
        project.style.height = (project.scrollHeight - 29) + 'px';
        setTimeout(() => {
            project.classList.add('closed');
            project.style.height = null;
        }, 1)
    }
    setTimeout(() => {
        projBut.addEventListener('click', toggleProject)
    }, 1000);
}

for (projectButton of projectOpeners) {
    projectButton.addEventListener('click', toggleProject)
}
