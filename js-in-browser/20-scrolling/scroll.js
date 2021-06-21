/* 
    Scrolling event occurs when we scroll throught the page

    we can attach both window specific as well as element specific scroll
    listeners

    
    These type of listeners will be helpful for 
        => infinite content loading technique
        => Lazy load images features 

*/
window.addEventListener('scroll', function () {
    document.getElementById('showScroll').innerHTML = window.pageYOffset + 'px';
});

/* 
    Prevent scrolling

    We cannot prevent scrolling using event.preventDefault() in the browser
    because the scroll event occurs only after the page is scrolled

    one way is we can use onkeydown to prevent the scrolling

    other way is to use css and set the overflow:hidden property to true so that
    it wont make the page scroll

*/