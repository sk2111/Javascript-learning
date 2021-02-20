// In javascript the function is just a special value

// function decalration 
function a(){
    alert("hai")
}
// function expression
let a = function(){
    alert("hai")
}

// here the function is created and assigned explicitly 
// No matter how the function is defined its just a value stored in variable a 

// since the function is a value we can print in console 

console.log(a); // not same as a() -> called invoking the value

// since the function is a value we can assign easily to other varibsle

let b = a;
b() // => would the same function a 
// we can do the smae for function expression also

// IMPORTANT TOPIC : callback functions

// we can pass functions to other functions arguments without any problem 
// such passed function can be called anytime inside that function

// Eample

function ask(question,yes,no){
    if(confirm(question)){
        yes();
    }
    else{
        no();
    }
};

function showOk(){
    alert("Success question confrimed");
}
function showCancel(){
    alert("Cancel the action");
}

ask('How old are you',showOk,showCancel);

// Here depending on the condition we call some functions passed as arguments
// at later point of time (so only they are called callback functions)
ask('How old are you',function(){alert("success")},showCancel);

// we can pass directly in call sunch function with no names associated to it are called 
// anonymous function

// Differenence between function declaration and expression
/* 
    1) Function declaration are hosited by javascript engines 

    ie ) we can calle the function decalration at first line even when the function is at 100 th line

    2) Funaction expression does not supporte that because the function is create only when it reachs the 
      variable assignment point
*/ 