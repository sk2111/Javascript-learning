/*

    In web app there are two ways to style an app

    1) class
    2) style

    we need to use class whenever possible but for few things like

    dynamically setting the position we can use javascript

    elem.style.left
    elem.style.right


    className and classList

    we can get the class name using

        elem.className property

    console.log(ele.className); //gives entire string class
    ele.className = 'hello'; replaces entire string class with hello

    What if we wanted to change only one class ?

    we can use classList

        elem.classList.add() //to add individual class
        elem.classList.remove() //to remove individual class
        elem.classList.toggle() // add if not , remove if present
        elem.classList.contains() // return boolean true/false

*/

/*
    Element style

    elem.style contains the object that corresponds to what written in style attribute

    elem.style.width = '10px'; //set the width to 10px (reflect in attribute)

    For multiword it is camelCased

    for eg background-color : backgroundColor


    Resetting the style property

    To reset the style property we can use empty strings to set so that it will clear the
    applied styles to that property

    elem.style.display ="block";
    elem.style.display =""; //clear the applied style

    elem.setAttribute('style', 'color: red...'); //to add mutiple styles as string


    //careful with units

    we should always add the unit to setting values like margin,top,bottom

    //wrong
    document.body.style.margin = 20;
    alert(document.body.style.margin); // '' (empty string, the assignment is ignored)

    // now add the CSS unit (px) - and it works
    document.body.style.margin = '20px';
    alert(document.body.style.margin); // 20px

    alert(document.body.style.marginTop); // 20px
    alert(document.body.style.marginLeft); // 20px

*/

/*
    Computed styles : getComputedStyle

    The style property only read the value in the style attribute

    But what if we want to know about the style applied from css also?

    Style property dont know about the applied css value

    <head>
    <style> body { color: red; margin: 5px } </style>
    </head>
    <body>

    The red text
    <script>
        alert(document.body.style.color); // empty
        alert(document.body.style.marginTop); // empty
    </script>
    </body>

    To derive the css property we need to use getComputedStyle

    getComputedStyle(elem,[pseudo])

    let computedStyle = getComputedStyle(document.body);

    // now we can read the margin and the color from it

    alert( computedStyle.marginTop ); // 5px
    alert( computedStyle.color ); // rgb(255, 0, 0)

    //warning we need to use full names

    We always want to use fullNames to retrive data from getComputedStyles like
    paddingTop,paddingBottom

    If we try to use padding then it can be an empty string

    body{margin:10px;}

    let style = getComputedStyle(document.body);
    alert(style.margin); // empty string in Firefox


    Terminologies

    1) Computed styles => computed styles are the css values applied after all css rules 
    and css inheritance as a result of css cascade.It can look like height 1em or in percentage

    2) A resolved css is the one which is finally used to compute the actual length, here all the 
    units are turned down into pixel 

    getComputedStyle will give the resolved css 
*/