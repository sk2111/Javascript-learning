/* 
    The new operator Function


    Somtimes we can create function using the help of new Function

    let func = new Function([arg1,arg2,arg3...,argN],functionBody)
*/

let hi = new Function('alert("hai")');

hi(); // hai


// we can also have arguments as well

let sum = new Function('a', 'b', 'return a+b');

alert(sum(1, 2));

/* 
    The major difference here is that  we can use string to construct the function

    and it will be helpful to get a string from server and  complie a function from template

*/


/* 

One major difference is the functions created with new Function Keyword doesn't have 

[[Environment]] varaible tied to  its lexical environment but it is usually tied to global
lexical environment

*/

function getFunc() {
    let value = "test";

    let func = new Function('alert(value)');

    return func;
}

getFunc()(); // error: value is not defined

function getFunc() {
    let value = "test";

    let func = function () { alert(value); };

    return func;
}

getFunc()(); // "test", from the Lexical Environment of getFunc



/* 

    Its Important to note this difference if [[Environment]]

    and if we need to use such function its better to pass them as varaibles and use like
    an pure functions
*/