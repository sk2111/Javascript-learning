/* 
    DOM tree

    The backbone of the html is htl tags

    According to DOM , every HTML tag is an object. Nested tags "children" are the
    children of enclosing ones.

    The text inside the object is also an object as well

    We can access all the objects from javascript and can able to modify them

    For example document.body is the object which represent the body tag

    Running this code will make the body red for three seconds

*/

document.body.style.backgroundColor = 'red';

setTimeout(() => {
    document.body.style.backgroundColor = '';
}, 3000);

/* 
    There are also other properties as well

    innerHTML - HTML contents of the node
    offsetWidth - the node width(in pixels)
    and so on...
*/


/* 
    Example of DOM

    <html>
        <head>
            <title>About elk</title>
        </head>
        <body>
            The truth about elk
        </body>
    </html>

    The DOM represents html as a tree structure of tags. Heres how it looks


    HTML
        HEAD
            #text lineBreak space
            TITLE
                #text About elk
            #text linebreak
        #text linebreak
        BODY
            #text The truth about elk.



    Every tree node is an  object

    HTML tags are converted into element nodes and formed as a tree structure

    html is the root node and head and body are its children

    The text inside the elements form text nodes, labelled as #text.

    A text node will only contain a string and it may not have children and 
    it is always a leaf of the tree 

    We also have special characters in text node
     linebreak (carriage return symbol)
     spaces
    
    spaces and newlines are totally valid characters like letters and digits

    They form a text node and become a part of DOM node 

    In above the head tag contains some spaces before <title> and 
    that text becomes a #text node (it contains a newline and some spaces only)

    
    There are two exclusions
        Spaces and newlines before Head are ignored for historical reasones

        If we put anything after body it will automatically moved inside the body
        as the HTML spec requires all the content must be inside body
        so there cant be any spaces after body


    Other than that if we have any text node which contains space then it will be
    converted to text node or else there wont be any

    Broswer tools usually dont show the empty linbreak text node 


    Autocorrection

    Broswers usually do an auto correction for the invalid HTML 


    Suppose if we just put hello world in html 


    IT will be automatically surrounded by html,body and also will have head tag


    HTML
        HEAD
        BODY
            #text Hello world

    
    Unclosed tags will be automatically closes

    <p>saska
    <div>jasja

    But we should not rely on this

    DOM tries to Auto correct HTML so that it wont end in abrupt error

    Catch:

    Tables will always append tbody even if we omit 

*/


/* 
    Other Node Types

    We have other node types apart from text and element node 

    like we have comments node 

    Whatever be the part of HTML will go inside DOM even its is comment

    <!DOCTYPE> at the beginning of html is also an DOM node

    The document which represents the whole DOM tree is also an DOM node as well

    There are 12 types of Node avaliable 

    

*/
 

