/* 
    Functions are very powerful in javascript

    It can access outer variable and can be passed from one location to another
    as an argument

    But  what happens when the outer variable changes will the function use old value or new value?

    While passing a unction as an argument will it have access to outer variables of that function?


*/

//code blocks {}
// varaibles let and const declared within {} are only visible to that block alone

{
    let a = "hai";
    alert(a)
}
{
    let a = 'hello';
    alert(a)
}

// In above case {} creates a boundary and work in isolated way

// This applieas for if else, while ,for and other kinds of code blocks

/* 
    Nested function calls 

    In javascript we can easily found functions containing another functions in it

*/

function name(first, last) {

    function combine() {
        return first + last;
    }

    return combine();
}

// Here the combine function uses outer variable first and last


function name(first, last) {
    return function () {
        return first + last;
    }
}
let a = name('hai', 'hello');
a(); // orints hai+hello

// But how the returned function remebers the outer vaiable still?


/* 
    Lexical Environment 

    In javascript every function,code block and the script as a whole have an internal(hidden) object
    asscocaited with it

    The lexical environment has two things

    1) Environment record - object that stores all local variables as its properties
    2) A reference to the outer lexical environment,the one associated with outer code

    A variable is just an property of the special internal object, Environent record,

    TO get or change the variabel name means to get or change the property of an object
*/

let test;

test = 123;

/* 
    lexical environment looks like

    test: <uninitialized>   --> outer null (beacuse this the whole script)
    test: undefined
    test:hello

    Lexical environment is a specification and we cannot modify directly how it works 
    JS engine do many optimization in this process

*/


// step 2: Function declaration

let test = "hello"

function greet(msg) {
    alert(test + msg);
}

/* 

    Here unlike let function is immediately assigned with value and ready to use

    The lexical environment will look like this

    test:<uninitialized>
    greet:function

    Note : This is not true for function expression it works in a normal way


*/

/* 
    Inner and outer lexical environment

*/

let pharse = 'heelllo';

function say(name) {
    alert(pharse + name);
}
say('hai');


/* 
    Here when the function executes it create another lexical environment along with previous one

    The new lexical environment will stroe other local variables and paramaters of the function

    name:"hai" --> outer ---->  say:function    ------> outer ---------->null
                                phrase:'helllo'

    So in the above case when alert line executes it will call the phrase fromouter lexical environment
    and name from new lexical environment

    This way of accessing outer environment goes on until it reaches global lexical 
*/


/* 
    Returing an function
*/

function makeCounter() {
    let count = 0;

    return function () {
        return count++;
    };
}

let counter = makeCounter();


/* 
  while making call to make counter the lexical environment looks like this

  count:0 ---->outer----> makeCounter:function -----> outer (null)
                          counter:undefined

  But the speciall thing in above case is we have returned one function from the above case

  All function remeber the lexical environment in which it is made . The function has a hidden properties called
  [[Environment]] that keeps track of reference to the lexical environment when it is made
  
  So here counter.[[Environment]] has a reference to {count:0} lexical environment.

  Thats how function remebers where it was created and no matter the environment is set once and never changed


  so whenever the counter function executes the lexical scope looks like

  <empty>----->outer---->count:0 ---->outer----> makeCounter:function -----> outer (null)
                                                 counter:undefined

  
  so it looks in its own lexical scope and moves to top and change the count variable
  thus it remebers the outer variables scope
*/


/* 
  Closure

  This behavous is called closure, A function that remebers its outer variables and can access them/
  In javascript all functions are naturally follow closure (exception new function syntax) 

  [[Environment]] property remebers the plcase of creation and helps in linking the lexical chain


*/


/* 
  Garbage collection

  The garbage collection works in the same way for real objects as with lexical scope as well

  The lexical environment will be destriyed when it becomes unrechable

  it the return function hold the ref to outer one then it is kep in memeory

*/
function f() {
    let value = 123;

    return function () {
        alert(value);
    }
}

let g = f(); // g.[[Environment]] stores a reference to the Lexical Environment
// of the corresponding f() call and not garbage collected

g = null; // settign this will be garabge collected

//below example 3 lexical environment are created
function f() {
    let value = Math.random();

    return function () { alert(value); };
}

// 3 functions in array, every one of them links to Lexical Environment
// from the corresponding f() run
let arr = [f(), f(), f()];


// Real life optimiaztions

/* 
    In chrome the return function not using any oter values then it optimize it

    and this leads to some intersting issues while debugging

    
*/
function f() {
    let value = Math.random();

    function g() {
        debugger; // in console: type alert(value); No such variable! (Because chrome optimize it in advance)
    }

    return g;
}

let g = f();
g();