/* 
    Global Object

    The Global Object provides variables and functions that are avaiabale anywhere . By default, 
    those that are built into the language or the enivrionment
    
    Built in function like alert etc etc are available to us from global scope


    In broswer it is named as window, for node js it is named as global, diffenrent environment 
    has different name

    But to standarize this globalThis was introduced

    It is same as window in broswer

    Var and functinon declaration declared in global scope are attached to window object

*/

var test = 123;

alert(window.test); //123

// But let ususally wont attach to window
/* 
    Generallly poluting global scope shoul be avoided

    when needed we need to explicitly mention as

    window.currentUSer={
        name:'john'
    }
*/

window.currentUSer = {
    name: 'john'
}


/* 
    Helpful for polyfill checking

*/

if(!window.Promise){
    window.Promise = '... do some custom polyfill'
}


//In broswer unless we are using modules , global functions and variable declared wih var become a proerty of window