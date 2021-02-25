/* 
    Object are used to represent real world entities

    Eg: User in a shopping application

    where he can login logout

*/

let user = {
    name: 'John',
    age: 30
}

// Methods
/* 
    we can add actions to the objects by using methods
    we call functions as methods if its is a property of object
*/

user.sayHi = function () {
    alert("hai");
}

// we can call like

user.sayHi();

// Other ways to include methods to objects
// 1st way
user = {
    sayHi: function () {
        alert('hai');
    }
}
//2nd way
user = {
    sayHi() {
        alert('hello');
    }
}

// There is a subtle difference between 1st and 2nd way we will cover later

//this in methods

/* 
    It is common that the method  will need to access the values of object

    for example sayHi() function needs to acces the value of name

    To access the object the method can use this keyword

*/

// IMPORTANT : the value of this is the object "before dot" , the one used to call the method

let user = {
    name: "John",
    age: 30,

    sayHi() {
        alert(this.name);
    }
}

user.sayHi(); //this value will be user (the object before dot calling the method)


/* 
    "this" is not bound
    In javascript the keyword this behave differenlty , it can be used inside any function
    even if its not a method of an object
*/

function sayHi(){
    alert(this.name);
}

// this is evaluated during run-time, depending on the context

// Example to show this is evaluated during runtitme

let user = {name:'John'};
let admin = {name:'Admin'};

function sayHi(){
    alert(this.name);
}

user.f = sayHi;
admin.f = sayHi;

user.f(); // John
admin.f(); // Admin 
admin['f'](); // Wroks the same for square as well
// Here when user.f is called the value of "this" is bound to calling object user
// Here when admin.f is called the value of "this" is bound to calling object admin

/* 
    The rule is simple if Obj.f() is called , then "this" is Obj during the call of f,

    so its either user or admin

*/

// What happend when calling a function with this inside without object

function test(){
    alert(this);
}

test();

/* 
    In strict mode:
       The above value becomes undefined

    In Non strict mode:
       The value of this in such case will be global object (window in browser)
       (this is a programming error because those type of functions  need to be worked only in object context)
       "use strict" directive helps to fix this behaviour

*/

/* 
    Final words on unbound "this"

       So the idea of run-time assigning value to this has both advantage and disadvantage

       Advantage:
          We can reuse the same function with different objects for same purpose
          because the value of this will change according to calling object

       Disadvantage:
          Prone to errors
*/

/* 
    Arrow function dont have their own "this". It is taken from outer "normal" function
*/

let user={
    name:"test",
    sayHi(){
        let arrow = ()=>console.log(this.name);
        arrow();
    }
}

user.sayHi(); // test 

/* 
    Here the arrow function use "this" value of outer function not one on its own
*/