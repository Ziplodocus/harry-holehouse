
/*
    A function that allows transition of a "collapsed" element to the 
    auto height of an elements content smoothly and back again at the 
    click of another element, returns a handler function for use on an event. 
    Attach in place of the handler function to the element that triggers the event.

    Takes three arguments:
    The element who's height is toggled (elementToToggle),
    The height of the element when it is closed, (collapsedHeight),
    The time the transition takes (transitionTime)

    Recommended to set the overflow to hidden for the effect to work correctly
*/

function autoToggle(elementToToggle, collapsedHeight, transitionTime) {

    //Sets the initial height and checks whether this is zero and if so hides the elements
    //setting display to none is an attempt at preventing items with 0 height still appearing
    elementToToggle.style.height = collapsedHeight;

    //Padding can create a difference between scrollheight and height
    const paddingTop = getComputedStyle(elementToToggle).paddingTop.split('px')[0];
    const paddingBottom = getComputedStyle(elementToToggle).paddingBottom.split('px')[0];
    const paddingBuffer = parseInt(paddingTop) + parseInt(paddingBottom);

    const isZero = collapsedHeight.charAt(0) === '0';
    if(isZero) {elementToToggle.style.display = 'none'};
    
    const handler = function(event) {
        
        const clickedElement = event.currentTarget;
        const eventType = event.type;
        const isClosed = elementToToggle.style.height === collapsedHeight;

        //removes event listener until transition is complete
        clickedElement.removeEventListener(eventType, handler);

        let isNotDisplayed = elementToToggle.style.display === 'none';
        if(isNotDisplayed) {
            elementToToggle.style.display = null;
            isNotDisplayed = false;
        }

        /*Functions that transition to the auto height, and from the auto height
         property with a smooth transition*/
        function open() {
            elementToToggle.style.height = elementToToggle.scrollHeight - paddingBuffer + 'px';
            setTimeout(() => {
                elementToToggle.style.height = 'auto';
            }, transitionTime);
        }
        
        function close() {
            elementToToggle.style.height = elementToToggle.scrollHeight - paddingBuffer + 'px';
            setTimeout(() => {
                elementToToggle.style.height = collapsedHeight;
            }, 1)
            
            if (isZero) {
                setTimeout(() => {elementToToggle.style.display = 'none'}, transitionTime - 50)
            }
        }

        isClosed ? open() : close();

        //Reapplying the event listener
        setTimeout(() => {clickedElement.addEventListener(eventType, handler)}, transitionTime);
    }
    return handler
}
