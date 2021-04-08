/* 
    Native prototypes

    The "prototype"  property is widely used by the core of javascript itself.
    All built in functions use it


    Object.prototype

    Lets consider we have an empty object
*/
let obj = {};
alert(obj); // "[object Object]"

/*
    If we pay close attention where does the code for toString methods comes from??

    So when an object is generated using object literal syntax {} it will be similar to
    obj = new Object() , we know that whenever we cretae an object using new keyword
    it has some default prototype value here the prototye will contain toString and other methods

    Object  ====>    Object.prototype
                     constructor:Object
                     toString:function

                          ||

                    obj = new Object()
*/

let obj = {};

alert(obj.__proto__ === Object.prototype); //true

alert(obj.toString === obj.__proto__.toString); // true

alert(obj.toString === Object.prototype.toString); //true


// TO note that there is no more [[Prototype]] in the chain above Object.prototype

alert(Object.prototype.__proto__); //null


/* 
    Other built in prototypes 

    Other Built in Object such as Array,Date,Functios and others keep methods in prototype

    FOr instance we can take an array [1,2,3] the default new Array() constructor is used internally. 
    So Array.prototype becomes its prototype amd provide methods.Thats is er memory effficeient

    By specification all of the built in prototypes have Object.prototype on the top.
    Thats why we hear "Evrything is object in javascript"
*/

let arr = [1, 2, 3];

// it inherits from Array.prototype?
alert(arr.__proto__ === Array.prototype); // true

// then from Object.prototype?
alert(arr.__proto__.__proto__ === Object.prototype); // true

// and null on the top.
alert(arr.__proto__.__proto__.__proto__); // null

// some methods in prootype may override for example Array.prototype has its own 
// to string that lists comma-delimited elements

let arr = [1, 2, 3]
alert(arr); //1,2,3

// others also have prototype chain 
function f() { }

alert(f.__proto__ == Function.prototype); // true
alert(f.__proto__.__proto__ == Object.prototype); // true, inherit from objects

/* 
    Primitive 
    
    The most inticate that happens with strings,numbers and booleans

    As we know they are not objects . But if we try to access their properties , a temporary object
    are created and deleted later

    But From where those methods come from 

    String.prototype, Number.prototype and Boolean.prototype

    null and undefined standa apart . They have no bject wrappers so method and properties are not 
    avaliable for them . So there are no prototype for them

*/


/* 
    Modifying a native prototype

    Native prototype can be modified . For instance if we add a method String.prototype
    it becomes available to all strings

    We may be temped to add more methods  to native prototype 
    but it is generally a bad idea

    Prototypes are global, so it’s easy to get a conflict. 
    If two libraries add a method String.prototype.show, then one of them will be overwriting the method of the other.

    So, generally, modifying a native prototype is considered a bad idea.
*/
String.prototype.show = function () {
    alert(this);
};

"BOOM!".show(); // BOOM!

/* 
    In modern programming thers is only one case 
    where modifying native prototype is approve. Thats polyfilling



*/


if (!String.prototype.repeat) { // if there's no such method
    // add it to the prototype

    String.prototype.repeat = function (n) {
        // repeat the string n times

        // actually, the code should be a little bit more complex than that
        // (the full algorithm is in the specification)
        // but even an imperfect polyfill is often considered good enough
        return new Array(n + 1).join(this);
    };
}

alert("La".repeat(3)); // LaLaLa


// Borrwing methods from another prototype

let obj = {
    0:"hello",
    1:"world",
    length:2
}


obj.join = Array.prototype.join('');