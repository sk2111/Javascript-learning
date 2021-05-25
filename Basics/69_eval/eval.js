/*
    Eval: run a code string

    The built in eval function allows us to execute a string of code

    let result = eval(code);
*/

let code = 'alert("hello")';
eval(code);

/* 
    Inside eval string we can write anything like function declaration, vaiables and so on

    The result of eval is the result of last statement

*/

let value = eval('1+1');
alert(value); // 2


let value = eval('let i = 0; ++i');
alert(value); // 1

//eval is executed in current lexical environment so it sees outer variables

let a = 1;

function f() {
    let a = 2;

    eval('alert(a)'); // 2
}

f();

let x = 5;
eval("x = 10");
alert(x); // 10, value modified


//In strict mode Eval has its own lexical environment . so functions and vaiables 
// declared inside eval are not visible outside

// reminder: 'use strict' is enabled in runnable examples by default

eval("let x = 5; function f() {}");

alert(typeof x); // undefined (no such variable)
// function f is also not visible

//without use strict, eval doesn't have its own lexical environment , so we 



/* 
    Using eval

    => In modern codebase we should avoid using eval
    => "eval is evil"
    => Long time back we needed eval but now since language is more mature there is not need
    => for using eval and there will be always an alternate
    => eval leads to script attacks
    =>Window.eval to run in global way

    For dynamic function we have new Function() to create a string
    let f = new Function('a', 'alert(a)');
    f(5); // 5
    
*/