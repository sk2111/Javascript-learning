/* 
    Broswer environment and specs

    Javascript was initilally created for web browsers but the language is
    evolved and grown now it supports multiple platforms 

    A platform refers to broswer, web server or another host even like in a 
    coffee machine javascript can run . Depending upon the platform javascript
    provides platform specific functionality 
    
    The javascript specification calls that a host environment

    A host environment will provide its own object and function additional to the 
    laguage core features , 

    web broswers give control to web pages , node js give control to server-side
    features and so on


    The top level view of what we have when we run javacript in broswer

                    Window

    DOM             BOM            Javascript
      
    document        navigator      Object
                    screen         Array
                    location       Function
                    frames

    There is an root object called windows

    1) First is the Global object for javascript code
    2) Second it represents the browser window and provides methods to control it


*/

function sayHi() {
    alert("Hello");
}

// global functions are methods of the global object:
window.sayHi();

alert(window.innerHeight); // inner window height


/* 
    Document Object Model (DOM)

    => DOM , represents all the page HTML content as a Object which can be modified 

    => The document is the "main entry point" to the page . we can change or create anything
    on the page using it
    
    For instance 
*/
// change the background color to red
document.body.style.background = "red";

// change it back after 1 second
setTimeout(() => document.body.style.background = "", 1000);

//There are much more power and possiblities to manipulate the document 
//https://dom.spec.whatwg.org/

/* 
    DOM is not only for broswers

    The DOM specification explains the structure of document object model

    There are non broswer instruments that uses DOM also

    For instance server side scripts which uses HTML pages and process them can also use 
    DOM . They may support only a part of specification though

*/

/* 
    CSSOM for styling

    There is also a seperate specification, CSS Object Model (CSSOM) fro css rules and stylesheets

    That defines how the CSS is represented as objects and how to read and write to them

    CSSOM is used together with DOM when we modify style rules for the document 

    In practice CSSOM is rarely required because when we use javascript we usally add or remove classes
    and not modify their css rules but thats also possible 

*/

/* 
    BOM (Broswer Object Model)

    The Broswer Object model represents additional objects provided by the broswer
    (host environment) for working with everything except the document


    For Instance,

    The navigator object provides background information about the broswer and operating system

    There are many properties but two mostly used properties are navigator.userAgent
    and navigator.platform 

    The location object helps us to read current URL and can can redirect to new one

    location.href ;//
    location.href = 'www.google.com';

    Functions like alert,confirm,prompt are also a part of BOM they are directly not related
    to the document but represent pure broswer methods of communicating with user


    BOM is a part of HTML spec 

    The HTML spec is not only about html attributes but it also covers bunch of objects methods and broswer specific 
    DOM extensions 

    
*/

