/* 
    Bubbling

    When an event occurs on an element first it runs its events handler and then its parent and 
    then its ancestors
    
    
    <form onclick="alert('form')">FORM
        <div onclick="alert('div')">DIV
            <p onclick="alert('p')">P</p>
        </div>
    </form>

    When we click the p tag first the event will run the handler in the p tag then div tag
    then form tag

    p=>div=>form

    Almost all events will bubble but few events like focus will not bubble


    event.target

        => Even though we have a listener in parent Event target will give the exact location 
        or dom element in which the event has occured
    
    event.currentTarget
        => The currentTarget will be always give the element to which the listener has attached

    Stopping bubbling
        => It is possible to stop the event propagation using event.stopPropagation()
        => Its an bad practice and we should not use it 
        => event.stopPropagation will only stop the bubbling but if we have multiple listeners
            added to the same node then other listeners will execute
        => If we dont want this behaviour then we need to use event.stopImmediatePropagation()

    Capturing phase
        => There is an another phase called "capturing"
        => In broswer capturing phase is opposite to bubbling phase 
        => The event in capturing phase will start from window and flow to the target
        => Reach the target
        => And then the bubbling phase occurs

        Capturing phase => Target phase => bubbling phase

        1) HTML => BODY => ELEM DIV 
        2) P target phase
        3) DIV => BODY => HTML

        elem.addEventListener(..., {capture: true})
        // or, just "true" is an alias to {capture: true}
        elem.addEventListener(..., true)

    To remove the event listener we need to use removeEventListener
    but we need to give the same phase in remove event listner as well
        addEventListener(..., true)
        removeEventListener(..., true)

    Event Listners will mainatin the order for execution
        elem.addEventListener("click", e => alert(1)); // guaranteed to trigger first
        elem.addEventListener("click", e => alert(2));

*/