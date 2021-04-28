/* 
    We often need to create object of same type example user,object

    There is one way using like new Function() to create such repeated needed Object

    In Modern javascript there is more advaced class syntax that has new features for Object-oriented-programming


*/

class Myclass {
    constructor() {

    }
    method1() {

    }
    method2() {

    }
}

// we can use new Myclass() to call the class and 
// the constructor method is called automatically by new 
class User {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        alert(this.name);
    }

}

// Usage:
let user = new User("John"); // a new object is created and 
//the constructor() run with given argument and assigns it to this.name
user.sayHi();


/* 
    What is class?

    Class is not a language -level entity as one might think

    In fact class is a kind of function


*/
class User {
    constructor(name) { this.name = name; }
    sayHi() { alert(this.name); }
}

// proof: User is a function
alert(typeof User); // function

/* 
    1) Creates a function named User , that becomes the result of class declaaration. The function 
    code is takken from the constructor method 

    2) Stores the class methods in User.prototype
    
AFter the new user is created , when we call its methods it is taken fro the prootytpe so the object has access to class methods

*/

class User {
    constructor(name) { this.name = name; }
    sayHi() { alert(this.name); }
}

// class is a function
alert(typeof User); // function

// ...or, more precisely, the constructor method
alert(User === User.prototype.constructor); // true

// The methods are in User.prototype, e.g:
alert(User.prototype.sayHi); // the code of the sayHi method

// there are exactly two methods in the prototype
alert(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi

/* 
    Class is not just an syntatic sugar
*/
// rewriting class User in pure functions

// 1. Create constructor function
function User(name) {
    this.name = name;
}
// a function prototype has "constructor" property by default,
// so we don't need to create it

// 2. Add the method to prototype
User.prototype.sayHi = function () {
    alert(this.name);
};

// Usage:
let user = new User("John");
user.sayHi();


/*
one can think both class and function syntax are similar but behind the scenes there are few differences

1) A function created by class is labelled by a special property
[[FunctionKind]]:"classConstructor", so its not entirely the syntatic sugar

This special property will be used in many places llike
User() => when we try to call the class as function without new then it throws error

Also string representation starts with Class 

2) Class methods are non enumerable . A class definition sets enumerable flag to false for all the methods 
in the prototype

3) Classes always use strict. All code inside ths is strict automatically

*/
/* 
    class expression

    Just like function a class can be defined inside anther function,expression,passed around,returned,assignned

*/
let User = class {
    sayHi() {
        alert("Hello");
    }
};

// we can also have named class and that will be helpful to reference inside class

// "Named Class Expression"
// (no such term in the spec, but that's similar to Named Function Expression)
let User = class MyClass {
    sayHi() {
        alert(MyClass); // MyClass name is visible only inside the class
    }
};

new User().sayHi(); // works, shows MyClass definition

alert(MyClass); // error, MyClass name isn't visible outside of the class


function makeClass(phrase) {
    // declare a class and return it
    return class {
        sayHi() {
            alert(phrase);
        }
    };
}

// Create a new class
let User = makeClass("Hello");

new User().sayHi(); // Hello



/* 
    Setters and getters

    Just like object literals , classes may include getters/setters computed properties

    Here and example of user.name implemented using get/set

*/
//getters and setters in class
class User {
    constructor(name) {
        // invokes the setter
        this.name = name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (value.length < 4) {
            alert("Name is too short.");
            return;
        }
        this._name = value;
    }
}

let user = new User("John");
alert(user.name); // John

user = new User(""); // Name is too short.

// Technically such class declaration works by creating getters and setters in User.prototype

// Computed names[...]

class User {

    ['say' + 'Hi']() {
        alert("Hello");
    }

}

new User().sayHi();


/* 
    class fields 

    "class fields" is a syntax that allows to add any properties

*/

class User {
    name = "John";

    sayHi() {
        alert(`Hello, ${this.name}!`);
    }
}

new User().sayHi(); // Hello, John!

/* 
    Important difference us that class fields that they are set on individual Oobjects not

    User.prototype

*/

class User {
    name = "John";
}

let user = new User();
alert(user.name); // John
alert(User.prototype.name); // undefined


class User {
    name = prompt("Name, please?", "John");
}

let user = new User();
alert(user.name); // John

/* 
    Making bound methods with class fields

    As we know that this in function call depends on the context of the call

    so if an object is passed around and called in another context , this wont be able to reference its object


*/
class Button {
    constructor(value) {
        this.value = value;
    }

    click() {
        alert(this.value);
    }
}

let button = new Button("hello");

setTimeout(button.click, 1000); // undefined

/* 
    Possible solutions
    1. usesing cllaback arrow and calling inside that 
    2. using bind in constructor 
    3. we can use class fields as alternate

*/
class Button {
    constructor(value) {
        this.value = value;
    }
    click = () => {
        alert(this.value);
    }
}

let button = new Button("hello");

setTimeout(button.click, 1000); // hello

/* 
    The class click = ()=>{} is created on per object basis, there a seperate function for each 
    Button object with this inside it referencing that object.
*/