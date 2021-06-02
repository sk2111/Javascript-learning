/* 
    DOM Node classes

    Different DOM nodes have different properties.For example <a> element node have link
    related properties, <input> element node will have input related properties and
    there might be also cases where some of the common properties will be also there

    Each DOM node corresponds to a built in class 

    The root hierarchy is EventTarget that is inherited by Node and other DOM Nodes inherit from them

                        EventTarget

                            Node

        Text               Element              Comment 

                    HTMLElement SVGElement

            HTMLInputElement HTMLBodyElement HTMLAnchorELement (html tags)


    Classes
    1) EventTarget is the root abstract class for all nodes, they provide suport for event
        we may not directly use this class to create object
    2) Node is an abstract class serving as a base for DOM Node , it provides functionality
        like nextSibling, previous sibling , child and so on . we never interact with them directly
        to create object and it acts as a base for HTML element , comment and text nodes
    3) Element - is base class for DOM elements . It provides element level navigation like
        nextElementSibling,previousELementSibling and so on . Broswers not only support HTML
        but also SVG and XML elements so they support as base class for those also
    4) HTMLElement is the base class for all our HTML elments 
        HTMLBodyElement acts as a base class for body elements
        HTMLAnchorElement acts as a base class for anchor elements ...

    so all the properties comes with a node is due to all such inheritance 

    For instance if we take an input element it will have all the below properties
    1) HTMLInputElement class
    2) HTMLElement  class common properties
    3) Element class provide generic element methods 
    4) Node provides its properties
    5) EventTarget provide listening capablities


    console.log(document.boyd.constructor.name); // HTMLBodyElement

    alert( document.body instanceof HTMLBodyElement ); // true
    alert( document.body instanceof HTMLElement ); // true
    alert( document.body instanceof Element ); // true
    alert( document.body instanceof Node ); // true
    alert( document.body instanceof EventTarget ); // true

    DOM nodes are regular javascript objects and they use prototype inheritance


*/  


/* 
    Node Type

    Node type provides and way to get the "type" of a DOM node

    elem.nodeType === 1 for element nodes
    elem.nodeType === 3 for text nodes
    elem.nodeType === 9 for document object

    <body>
        <script>
        let elem = document.body;

        // let's examine what it is?
        alert(elem.nodeType); // 1 => element

        // and the first child is...
        alert(elem.firstChild.nodeType); // 3 => text

        // for the document object, the type is 9
        alert( document.nodeType ); // 9
        </script>
    </body>
    
    In modern javascript we can use instance of to check whether an object belongs to 
    particular class or not


*/


/* 
    Tag: nodeName and tagName 

    Given a DOM node we can read the tag name from nodeName or tagName properties

    For instance 

    alert(document.body.nodeName); // BODY
    alert(document.body.tagName); // BODY

    TagName will only exits for element Node and for text or comment nodes it will be 
    undefined 

    TagName always returns the UPPERCASE name expect when browser uses XML mode 
        XML mode will comes into play when browser sends the information 
        with Content-type: application/xml+xhtml

    
*/


/* 
    innerHTML

    innerHTML allows to get the HTML as a string 

    we can also modify it . so its one of the most powerful ways to change the page

    The example

        document.body.innerHTML ; // shows the entire body as a string

    We can also use this to change the contents of the element

         document.body.innerHTML = '<b>test'; // forgot to close the tag
        alert( document.body.innerHTML ); // <b>test</b> (fixed)

    Note : Script inside innerHTML does not execute it just becomes a part of HTML


    innerHTML does a full overwrite 

    so we can always append new coontent to existing content elem.innerHTML += <P> New content </P>

    As the content is “zeroed-out” and rewritten from the scratch, all images and other resources will be reloaded

    innerHTML has some side effects like if user highlight the text with mouse then it will be lost
    same in case of input element if it is highlighted it will be lost

*/

/* 
    The outerHTML :full HTML of the element

    The outerHTML property contains the full HTML of the element . Thats like innerHTML plus
    the element itself

    <div id="elem">Hello <b>World</b></div>

    <script>
    alert(elem.outerHTML); // <div id="elem">Hello <b>World</b></div>
    </script>

    writing to outerHTML needs some care because when wiriting to it the element 
    will be removed from the DOM but the old variable in js remebers in so 
    we need to do a queryselect again to get the new element 

    This behavious is different to innerHTML 

*/


/* 
    innerHTML is for element Nodes but text or comment node have nodeValue / data property

    <body>
    Hello
    <!-- Comment -->
    <script>
        let text = document.body.firstChild;
        alert(text.data); // Hello

        let comment = text.nextSibling;
        alert(comment.data); // Comment
    </script>
    </body>

*/


/* 
    textContent : pure text

    The text content will give us only the text inside the node it will remove all other
    tags 

    <div id="news">
    <h1>Headline!</h1>
    <p>Martians attack people!</p>
    </div>

    <script>
    // Headline! Martians attack people!
    alert(news.textContent);
    </script>

    writing to textContent is much safer than using innerHTML because 
    inerHTML treates the input as HTML tags but textContent will treat them only as
    plain text

*/


/* 
    The "hidden" property

    The "hidden" attribute and the DOM property specifies whether the element is visible or not

    it is equivalent to style="display:none"  but it is much shorter to write than that

    <div>Both divs below are hidden</div>

    <div hidden>With the attribute "hidden"</div>

    <div id="elem">JavaScript assigned the property "hidden"</div>

    <script>
        elem.hidden = true;
    </script>

    <div id="elem">A blinking element</div>

    <script>
        setInterval(() => elem.hidden = !elem.hidden, 1000);
    </script>

*/

/* 
    More properties

    DOM elements also have additional properties and it is specific to different 
    element classes

    we have "value" property to receive the value for input,select,textArea

    href - the href for anchor tag

    and much more ...

    we can refer the property list at
    https://html.spec.whatwg.org/
*/