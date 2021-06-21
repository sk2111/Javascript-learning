/* 
    Pointer Events

    Pointer events are the modern way to handle input from a variety of pointing devices
    such as pens,mouse,touch pad etc

    History

        At first there was only mouse which acts as a pointer so mouse events is widely used

        At later point of time touch device emerged so maintain compactiblity touch devices
        start to emit mouse event like mousedown when touch happens

        But it limits the actual power of touch devices events because in touch devices
        multi touch is possible

        So new touch events like touchstart,touchend etc came into play but its still
        not enough for pen like devices etc

        And its also hard for developers to write seperate handlers for all of it

        So finally generic event class called pointer Events we introduced to avoid all these
        problems 

    Pointer event types

     pointer event	Similar mouse event
        pointerdown	mousedown
        pointerup	mouseup
        pointermove	mousemove
        pointerover	mouseover
        pointerout	mouseout
        pointerenter	mouseenter
        pointerleave	mouseleave
        pointercancel	-
        gotpointercapture	-
        lostpointercapture	-   

    Pointer event properties

        Pointer events contains mouse specific properties like clientX,clientY along with other properties as well

        pointerId : Broswer assigning unique id handle multiple pointers , stylus with pen and multi touch

        pointerType : pen,touch,mouse

        isPrimary : true for the primary pointer

        some pointer devices will measure pressure and tilt etc so there are other properties as well

            width: the width of the area where the pointer touch the device
            height: the height of the area where the pointer touch the device
            pressure: the pressure of the pointer tip in range from 0 to 1
            tileX,titleY,twist - pen specific properties that specifies how relative positioned to its surface

    Multi touch

        Mouse events dont support multi touch in total , but pointer event do with the help of
        pointerId and isPrimary

        When the first finger is touched the pointerId will be something but isPrimary will be true

        when the second finger is touched the pointerId will be something and isPrimary will be false

        We can track the multiple touching fingers using the pointer id , when the user moves the 
        corresponding pointerup ad pointermove events will ocuur

        
        

*/