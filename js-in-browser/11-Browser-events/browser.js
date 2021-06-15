/* 
    Browser events

    An event is an signal that denotes something has changed. All DOM nodes generate 
    events and we have other events also

    Mouse events
        click => when DOM element is clicked
        mouseOver/mouseOut => when the comes over /  out of the element
        contextMenu - when mouse right clicks on a element
        mouseDown/mouseUp - when the mouse button is pressed/released over an element
        mousemove - when the mouse is moved
    
    Keyword events
        keydown keyup => when the key is pressed/released
    form events
        submit => form submit event
    DOMContentLoaded
        When the HTML is loaded and parsed

    Event handlers
        We can assign an handler function which runs whenever specific events occur

    
    HTML-attribute
        we can add event listener to the HTML attribute click like so
        <div onclick="alert("click")">Helllo</div>

        when the click happens then the onclick function runs and alert function is called
    
    DOM property

        We can add a onclick property to the element so that runs on the function
        <div id="elem" onclick="alert("click")">Helllo</div>
        elem.onclick = function() {
            alert('Thank you');
        };

        Note we cannot add more than one function by this approach
        elem.onclick = null //removes the listener
    
    addEventListener
        
        element.addEventListener(event,handler,[options])

        event => event name
        handler => handler function to execute 
        options ={
            once: true // the element is removed after once triggered
            capture: true/false whether to event occur in capture/bubbling phase
            passive:true
        }

        to remove the event we can use removeEventListener

        element.removeEventListner(event,handler)
            Note : Handler should be same reference to the function passed to 
            addEventListner

        we can also pass an handler object to addEventListner Instead of function

        let handler = {
            handleEvent(){

            }
        }

        elem.addEventListener('click',handler)
    

*/