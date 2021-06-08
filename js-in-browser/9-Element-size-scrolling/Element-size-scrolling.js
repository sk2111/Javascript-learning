/* 
    Javascript has properties which will allow us to read width,height and other
    geometry features

    <div id="example">
        ...Text...
    </div>
    <style>
    #example {
        width: 300px;
        height: 200px;
        border: 25px solid #E8C48F;
        padding: 20px;
        overflow: auto;
    }
    </style>

    The above element has border,padding and scrolling and margin is not here


    offsetParent/offsetLeft/Top

        The offsetParent are used to calculate the position offset of an element
        from the nearest ancestor 
            1.css postioned(absoulte,relative,fixed,sticky)
            2.td,th,table
            3.body
        
        offsetLeft and offsetRight provides the distance x and y coordinates relative
        to offsetParent upper-left-corner

    <main style="position: relative" id="main">
    <article>
        <div id="example" style="position: absolute; left: 180px; top: 180px">...</div>
    </article>
    </main>
    <script>
    alert(example.offsetParent.id); // main
    alert(example.offsetLeft); // 180 (note: a number, not a string "180px")
    alert(example.offsetTop); // 180
    </script>

    offsetParent can be null sometimes

    1) display:none element will show offsetParent as none
    2) For body and html
    3) For elements with postion:fixed


    offsetHeight/width

        offset height/width provides the element full size including borders , outer to outer length

        offset Height/Width will be zero for the elements not displayed on screen


    clientTop/Left

        Inside the element we have borders

        To measure them there are properties clientTop and clientLeft

        Sometimes if scrollbar comes left side for Arabic languages then the clientLeft includes
        scrollbar width as well

    clientHeight/width

        These properties provide the size area inside the element borders
        
        These include the content width together with padding but without the scrollbar

    ScrollWidth/Height

        These properties are similar to client Height/Width but includes the scolled out
        parts as well
    
    scrollLeft/scrollTop
        Scroll top gives the height of content that is scrolled out 

    Note taking css height and width from css may not be accurate 
    because different browsers will handle differently some may include scrollbar
    some may remove the scrollabr in width

*/