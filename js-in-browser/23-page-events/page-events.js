/* 
    Page events

    DOMContentLoaded

        The DOMContentLoaded event happens when the document is completely parsed and DOM tree built 
        and ready to use 

        Note : At this point the image,external stylesheets may not be loaded

    load 

        At this point both DOM tree as well as image,stylesheet everything is loaded

    beforeunload

        Happens when the user is about to leave the page , here we can as for confirmation 
        to leave etc

    unload 

        the user almost left, we can use this event to send the end analytics about the usage patterns


    DOMContentLoaded

        The DOM content loaded event happens on the document object

        document.addEventListener("DOMContentLoaded", ready);

    DOMContentLoaded and scripts

        Since scripts may alter the DOM the DOMContentLoaded event waits until the script is ready

        So at the event of DOMContentLoaded the script will be ready to use

        Note : Script with async do not wait for DOMContentLoaded this applies for dynamically
        generated scripts also

    DOMContentLoaded and styles

        External stylesheets dont affect the DOM so it does not wait for DOMContentLoaded

        But there is a catch here , if a script tag comes after the style tag then the script
        must wait for the stylesheet to load and inturn DOMContentLoaded will wait for the
        script 

        <link type="text/css" rel="stylesheet" href="style.css">
        <script>
        // the script doesn't not execute until the stylesheet is loaded
        alert(getComputedStyle(document.body).marginTop);
        </script>

        The reason is the script access the computed style properties of the css 
        so it wiil wait for the css to download and complete

    window.onload

        The onload event happens on the window object and it guarantees that all the
        styles and images and everything loaded at this point in time

    window.onbeforeunload

        Here in this event we can get the confirmation of the user to leave the site

        window.onbeforeunload = function() {
                return false;
        };

    window.unload
        usually we use this event to send the beacon signal using navigator.sendBeacon API
        this event should not be blockiing the user and its best that use it for 
        some kind of analytics like so 


    readyState event 
        There is also an another event called readyState which happens during different phases
        of the lifecycle of DOM 

            laoding => the document is loading

            interactive => equivalent to DOMContentLoaded but happens before it

            completed => equivalent to window.laod but happens before it 






*/