/* 
    Window sizes and scrolling

    To get the window size we can use 
        document.documentElement.clientHeight
        document.documentElement.clientWidth
    
    We have also window.innerHeight and window.innerWidth

        The difference is window.innerHeight and window.innerWidth includes
        the scrollbar also but clientWidth and clientHeight will not include the
        scrollbar width 

    To measure the height/width of the document
        
        Theoretically we can use document.documentElement.scrollHeight, But these properties
        will not work for the whole document So to find the maximum we need to use

        let scrollHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );

    Gettting the current scroll position

        DOM elements have their current scroll  position in their scrollLeft/scrollTop properties
        document.documentElement.scrollLeft/scrollTop

        Those properties also exist in window 

        alert('Current scroll from the top: ' + window.pageYOffset); //read only
        alert('Current scroll from the left: ' + window.pageXOffset); //readonly
        
        window.scrollX ,window.scrollY is also the same

    Programmatic scrolling
        
        scrollBy(0,10)
            scrollBy will scroll the page relative to its current position. For instance scrollBy(0,10)
            scrolls the page 10px down

        scrollTo(0,0)
            ScrollTo will scroll the page to the absolute coordinates . For instance scrolling to the top
            scrollTo(0,0)

    scrollIntoView
        elem.scrollIntoView(top) => top Boolean true or false

        will scroll the document to align with the element to make it visible

        if top = true then top of elem scrolled to align with top of window
        if top = false then bottom of elem scrolled to align with bottom of window

    
    Freezing the page technique

        document.body.style.overflow = 'hidden' // will freeze the page
        document.body.style.overflow = '' //will open up the page

        It will make the scrollbar invisible and content width will be disturbed if we need to 
        avaoid it then we can add padding of scrollbar width and remove it
        
*/