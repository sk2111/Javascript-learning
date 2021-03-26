/* 
    The old "var"

    There are three types of variable declaration

    var
    let 
    const

    There are subtle differences between var and let 

    Majore differn

    Function or global scope
    Hoisted
    Global scope are attached to window 
*/

/* 
    Var has no block scope
    let is block scope

    variables declared with var are either function scoped or global scoped. 
    They are visible through blocks
*/

if (true) {
    var test = "hai"
}

alert(test); // hai

for (var i = 0; i < 5; i++) {

}

console.log(i); // 5


// adhere to function level

function test() {
    if (true) {
        var test = 'hai';
    }
    console.log(test);
}

alert(test); // Not works properly


/* 
    Var variables tolerates redeclaration in the same scope twice
*/

let user;
let user; // throws an error

var use;
var use; // no error occur


/* 
    Var declaration are hoisted moved to top of function or global scope

    Declaration is only hoisted but not assignments

*/


function sayHi() {
    alert(phrase); // No error because var is hoisted

    var phrase = "Hello";
}

sayHi();

function sayHi() {
    var phrase; // declaration works at the start...

    alert(phrase); // undefined

    phrase = "Hello"; // ...assignment - when the execution reaches it.
}

sayHi();

/* 
    IIFE - so to keep the scope of var intact example in loops and other such things

    Old scripts people start using IIFE pattern


    IIFE pattern creates a new lexical context and the value is rembered  => to mimic block level
    visiblity
*/
(function () {

    var message = "Hello";

    alert(message); // Hello

})();
