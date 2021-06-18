/* 
    Browser default actions

    There are few broswer events which will trigger broswer to do certain actions

    For example clicking on navigation a tag will help us to navigate

    Submitting form button will send the form to the server

    We can use javascript to handle such events and prevent broswer default behaviour


    preventDefault()

        <a href="www.google.com" onclick="event.preventDefault()"></a>

        so if we click the link now the default event will be prevented

        It is also possible to return false to achieve same behaviour


    Follow up events
        Events will ocuur in order so if we prevent some event it will also
        leads to preventing on successive event


    passive event handler
        we can pass passive true to addEventListner so that we can explicitly say that it will 
        not call event.preventDefault inside it

        It will be helpful to handle scrolling in mobile phones for touchmove and few events since 
        it doesnt wit for other event handlers to wait and scroll later 

    event.defaultPrevented()

        When we call event.preventDefault() it sets this property to true 
        So even if the event bubbles up and call some ancestor listener
        we can check for this property and take decisions whether to handle it 
        or not to handle it

        elem.oncontextmenu = function(event) {
            event.preventDefault();
            alert("Button context menu");
        };

        document.oncontextmenu = function(event) {
            if (event.defaultPrevented) return;

            event.preventDefault();
            alert("Document context menu");
        };

    stopPropagation => will stop bubbling
    stopImmediatePropagation => will stop bubbling and also same level listeners
    preventDefault() => prevent default broswer actions for that event
*/