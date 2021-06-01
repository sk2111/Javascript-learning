/* 
    DOM navigation properties are great and dit helps to traverse from one node 
    to another node but what if the nodes are arbitary and we need to extract them

    WE got additional methods for it 

*/

/* 
    document.getElementById or just id


    If an element has an id attribute , we can get the element using the method 
    document.getElementById() no matter where it is 

    <div id="hello"> </div>

    const elem = document.getElementById('hello');

    // An interesting behaviour is id elements are automatically attached to window object
    
    so without can queryselector or selecting the elmenent we can actually use it

    window.hello // gives that element reference 

    But we should not rely on this and we need to always take reference of the 
    element and then use

    id must be unique

        if there are multiple elements then it may return any element node 

    getElementById can be used only at document level and not on element level
    
*/


/* 

    querySelectorAll

    Can be used at both document and element level

    elem.querySelectorAll(css) return all the elements indise elem matching the given 
    css selector

    Very powerful method and any css can be used

    <ul>
        <li>1</li>
        <li>2</li>
    </ul>
    <ul>
        <li>3</li>
        <li>4</li>
    </ul>

    const elements = document.querySelectorAll('ul > li:last-child');

    for(let elem of elements){
        console.log(elem.innerText); //2,4
    }

    Its possible to use pseudo classses as well like :hover and :active 

*/

/* 
    querySelector

    elem.querySelector(css) returns the first element for the given css selector

    //similar to querySelectorAll()[0] //but above method is more faster 
*/


/* 
    matches

    The element.matches(css) does not look for anything , it merly checks if elem matches the given 
    css-selector

    It returns true or false

    <a href="http://example.com/file.zip">...</a>
    <a href="http://ya.ru">...</a>

    <script>
    // can be any collection instead of document.body.children
    for (let elem of document.body.children) {
        if (elem.matches('a[href$="zip"]')) {
        alert("The archive reference: " + elem.href );
        }
    }
    </script>


*/

/* 
    closest

    This method is used to retrive the closet ancestor parent node which matches the
    css condition 

    travels from the current Node towards the top parent node

    <h1>Contents</h1>

    <div class="contents">
    <ul class="book">
        <li class="chapter">Chapter 1</li>
        <li class="chapter">Chapter 1</li>
    </ul>
    </div>

    <script>
    let chapter = document.querySelector('.chapter'); // LI

    alert(chapter.closest('.book')); // UL
    alert(chapter.closest('.contents')); // DIV

    alert(chapter.closest('h1')); // null (because h1 is not an ancestor)
    </script>

*/


/* 
    getElementsBy*

    There are also other methods that look for nodes like tag,class etc

    Today they are more like as history , as querySelector is more powerful and shorter to write

    example

    elem.getElementByTagName(tag) => looks for elements with given tag Name

    elem.getElementsByClassName(className) returns element that matches the given class name

    document.getElementsByName(name) returns elements with given name attribute, document wise
    <table id="table">
    <tr>
        <td>Your age:</td>

        <td>
        <label>
            <input type="radio" name="age" value="young" checked> less than 18
        </label>
        <label>
            <input type="radio" name="age" value="mature"> from 18 to 50
        </label>
        <label>
            <input type="radio" name="age" value="senior"> more than 60
        </label>
        </td>
    </tr>
    </table>

    <script>
    let inputs = table.getElementsByTagName('input');

    for (let input of inputs) {
        alert( input.value + ': ' + input.checked );
    }
    </script>
*/



/* 
    Live collections 

    All methods that starts with getElementsBy* return a live collection of DOM nodes

    it means it will autoupdate to match the current state

    <div>First div</div>

    <script>
    let divs = document.getElementsByTagName('div');
    alert(divs.length); // 1
    </script>

    <div>Second div</div>

    <script>
    alert(divs.length); // 2
    </script>

    But in contrats querySelectorAll returns a static list. Its like a fixed array of elements

    <div>First div</div>

    <script>
    let divs = document.querySelectorAll('div');
    alert(divs.length); // 1
    </script>

    <div>Second div</div>

    <script>
    alert(divs.length); // 1
    </script>
*/


/* 
    To check whether an elem is child of another node we can use

    elemA.contains(elemB) it returns true if matching or false

*/