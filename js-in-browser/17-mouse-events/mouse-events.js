/* 
    Mouse events mousemove,mouseout,mouseenter,mouseleave

    Mouse over 

        Mouseover occurs when the mouse comes over an element and mouseOut when it leaves

        There is an another propery called relatedTarget which the the elem ref from where 
        it came from for mouseover and for where it goes for mouseout

        mouseover
            target => The current element in which the event is fired 
            relatedTarget => The element from where the pointer came from before mouseover
        
        mouseout
            target => The current element in which the event is fired 
            relatedTarget => The element to the pointer go after mouseout

        relatedTarget can be null if it comes from another window or pointer come from outside
        
    Browser dont trigger "mousemove" event for every pixel and usually compare the time to 
    time difference for the new position so if it possible that it may skip some 
    inbetween elements when the pointer moves really fast
    
    But we can guarantee that if "mouseover" triggered then there must be "mouseout" for sure

    Mouseout when leaving for a child

        when a mouseOver event occurs on a parent element then mouseOut may occur when it 
        leaves parent and moves to the desecndants

        So mouseover => mouseout => mouseover (child) bubbles to parent handler


        This behaviour occurs becasue broswer implementation says that the mouse cursor can be 
        only over an single element at a time,the most nested one and top by z-index

        so first the mouseover on parent occurs and then mouseout occurs followed by mouseover of child
        bubbles to parent

        But if we dont want to run mouseout until it leave parent then we can use the
        relatedtarget to check whether it leaves the parent actually or not

        Event mouseEnter /mouseLeave

            These events are similar to mouseover and mouseout but they dont bubble and also
            they dont change for decendants 

            So it happens only on parent and after it event it enter decendants not problem 
            and then mouseLeave occurs when it leaves the parent 
    
    Event delagation

        since mouseEnter and mouseLeave dont bubble we cannot use it in delagation way

    So we need to mouseover and mouseout for such cases and write our own custom logic 
    to avoid the pitfalls 

*/