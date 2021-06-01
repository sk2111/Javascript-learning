/* 
    DOM allows us to anything with the element and their contents

    But to do so we need to reach at the proper DOM node first

                    document

                document.documentElement  => HTML

                document.body => if inside body

-----------------------------------------------------------------------
        previous sibling <    div   => next sibling

         fisrt child           childs             last child


TOP Nodes

1) document.documentElement => <html> 
   represents the DOM node of HTML tag

2) document.body => <body>
    represents the body node of the html

3) document.head
    represents the head of the html

document.body can be null for example if a script inside the head tag runs and we try to access
the document.body inside it it will be null because the body is not yet ready

But if we try to access the document.body at the end of the html then
will be have some meaningful value


ChildNodes , first child , last child

child nodes or children

    The nodes that are in the same level of any enclosing tag 
    That is body and head are child of HTML tag

Descendants
    all elements are the nested inside the given tag it includes children and their children etc

    <html>
        <head></head>
        <body>
            <div></div>
            <ul>
                <div></div>
            </ul>
        </body>
    </html>

    Here div,ul are descendants of the body

    The childnodes list all the child nodes including the text nodes


    document.body.childNodes give the all the child nodes within the body 
    it includes all the text nodes as well

    firstChild property give access to the first child element of our interest  
    lastChild property give access to the last child element of our interest  

    elem.hasChildNodes() function is used to check whether it has any child nodes


*/


/* 
    DOM collections

    DOM collection is an array like iterables and it is not an actual array

    so we can use for of loop to loop over 

    for(let child of document.body.childNodes){
        // consol.log(childNodes)
    }
    //its because it has its Symbol.iterator implemented

    We cannot use array methods on DOM collections (so we cannot use filter,map)

    We can use Array from to convert it into an array

    DOM collections are read only
        => we cannot use element[i] = something 

    DOM collections are live
        => DOM collections mainatain a live state so we can store in variable and 
         use it later
        
    DOM collections use for...of loop

    if we use for...in loop it will iterate over the all the enumarable properties
    and so it may have some unwanted properties also

    So its better if we use for...of loop which uses symbol iterator 
    for the iteration protocol


*/


/* 

    Siblings and parent

    1) siblings the node that are child of same parent node 

    <html>
        <head></head>
        <body></body>
    </html>

    Here head and body are the siblings because they have same parent node

    document.head.nextSibling => gives body

    document.body.previousSibling => gives head

    document.body.parentNode === document.documentElement

*/

/* 
    Element only navigation

    nextSibling,previousSibling gives access to the text nodes , comments etc

    But what if we need to access only the element node and dont care all others

    previousElementSibling,nextElementSibling,parentElement,children

    The bove properties will retrive only the element not any text or comment node


    Some HTML elements have special form of navigation like 

    TABLE , table.rows , table.rows[0].cells[1]

    They are specific and wiill be useful for only such navigation

*/

/* 
    Given a DOM node, we can go to its immediate neighbors using navigation properties.

    There are two main sets of them:

    For all nodes: parentNode, childNodes, firstChild, lastChild, previousSibling, nextSibling.
    For element nodes only: parentElement, children, firstElementChild,
    lastElementChild, previousElementSibling, nextElementSibling.
    Some types of DOM elements, e.g. tables, provide additional properties and collections to access their content.
*/