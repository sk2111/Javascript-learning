/* 
    Mouse Events

    There are a lot of mouse events happen on a element

    Mouse event types

        mousedown/mouseup
            mouse btn i clicked/released on a element
        mouseover/mouseout
            mouse pointer comes over/out of an element
        mousemove
            every mouse move over an element triggers the event
        click
            triggers are the mousedown and mouseup over the same element if left btn mouse is pressed
        dblclick
            triggers when two clicks are done within short time duration
        contextMenu
            triggers when right btn is pressed in the mouse

    Event order
        As we can see there are multiple events happens over an element 

        so they need to follow certain order 

        so her mousedown => mouseup => click happens in this order
    Mouse button

        In order to ind out what mouse btn is clicked during the mouse event
        we can use the button property 

        This property will be useful for mouseDown,mouseUp because they happens for
        any of the mouse btns 

        event.button will be integer number which maps to button clicked 

            Left button = 0
            Middle button = 1
            Right button = 2
            x1 button = 3
            x2 button = 4

    Modifiers shift,alt,ctrl and meta

        Apart from button property we can also see whther any specific key pressed
        during the mouse events

        properties
            shiftKey : shift
            altkey: Alt (opt for Mac)
            ctrlKey: Ctrl
            metaKey: cmd for Mac

            They are boolean properties and return true if they we clicked

         button.onclick = function(event) {
            if (event.altKey && event.shiftKey) {
            alert('alt clicked');
            }
         };
        
        Since ctrl key is very specific for Linux and Windows , whenever we are using 
        these keys we need to meta key for Mac OS so that it will be compatible

        if (event.ctrlKey || event.metaKey).

    Coordinates

        All mouse events will have coordinates asoocatied with it 
        so we can use clientX and clientY or pageX and pageY according to our needs
    
    Preventing default selection
        
        when we dblClikc the text gets selected as a default behaviour
        if we dont want it then we can return false on the mouseDown event 

    Preventing copy
        
        Similarly if we return false from oncopy event then user cannot able to copy by default

    
*/