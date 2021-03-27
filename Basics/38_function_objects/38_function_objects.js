/* 
    In javascript function are treated as any other simple values

    Functions are considered as objects in javascript

    AS functions are objects we can add or remove properties to them , Pass 
    to other functions using refernence , we can take functions as action objects

*/


/* 
    The "name" property

    => Each function has a name associated with it in the name property
    => The function name can be accessed like that
*/

function hello() {

}

alert(hello.name); // hello


// It also wors for function expression and method of objects

const test = function () {

}

alert(test.name); // test


let obj = {
    hello: function () {

    }
}

alert(obj.hello.name); //hello


//But some case there might be empty sting

let arr = [function () { }];

arr[0].name; // Empty string 


/* 
    The length property can be used to return the number of paramaters

    (It wont take the count of rest paramaters)

*/

function f1(a) { }
function f2(a, b) { }
function f3(a, b, ...rest) { }

f1.length;//1
f2.length;//2
f2.length;//2

// use case we can use property length of incoming function to take dynamic behaviour
function ask(question, ...handlers) {
    let isYes = confirm(question);

    for (let handler of handlers) {
        if (handler.length == 0) {
            if (isYes) handler();
        } else {
            handler(isYes);
        }
    }

}

// for positive answer, both handlers are called
// for negative answer, only the second one
ask("Question?", () => alert('You said yes'), result => alert(result));


/* 
    Adding custom properties

    We can add our own properties to functions also
*/

function sayHi() {
    alert("hai");

    sayHi.counter++;
}

sayHi.counter = 0;

sayHi();
sayHi();
alert(`called ${sayHi.counter} times`); // called 2 times

// Setting a property on function is entirely diffenret from using variables

// WE can replace closure someties

function makeCounter() {
    // instead of:
    // let count = 0

    function counter() {
        return counter.count++;
    };

    counter.count = 0;

    return counter;
}

let counter = makeCounter();
alert(counter()); // 0
alert(counter()); // 1

/* 
    Now the count is stored in the function directly not in outer lexical environment

    Pros : It wont use outer lexical environment
    cons : WE can modify the value anywhere in code (It is not hidden in a sense)

*/


/* 
    Named function Expression

    Named Function Expression or NFE is aterm for function Expressions that have a name
*/

let sayHI = function () {
    alert("Hai");
}
let sayHI = function hello() {
    alert("Hai");
}
/* 
    The above example is still a valid function expression and assignning name to it is still possible
    
    The advantage of such declartion of name is we can self reference the name inside the function

*/

let sayHi = function func(who) {
    if (who) {
        alert(`Hello, ${who}`);
    } else {
        func("Guest"); // use func to re-call itself
    }
};

sayHi(); // Hello, Guest

// But this won't work:
func(); // Error, func is not defined (not visible outside of the function)



// Alternative way we can use 
let sayHi = function (who) {
    if (who) {
        alert(`Hello, ${who}`);
    } else {
        sayHi("Guest");
    }
};

/* 
    But it leads to a problem that suppose we change sayHi to another value in future then the code breaks
*/
let sayHi = function (who) {
    if (who) {
        alert(`Hello, ${who}`);
    } else {
        sayHi("Guest"); // Error: sayHi is not a function
    }
};

let welcome = sayHi;
sayHi = null;

welcome(); // Error, the nested sayHi call doesn't work any more!
