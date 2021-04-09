/* 
    Prototype methods, Objects witout __proto__

    There are modern ways to set up a prototype

    The __proto__ is considered as outdated and deprecated (in browser side atleaset)

    The modern ways are

    Object.create(proto,[descriptors]) - creates an empty object with given proto as [[Prototype]]
    and optional property descriptors

    Object.getPrototype(obj) - returns the [[ptototype]] of obj

    Object.setPrototype(obj) - set the [[Prototype]] of obj to proto

    These methods should be used instead of __proto__

*/

let animal = {
    name: 'monkey'
}


let rabbit = Object.create(animal);

alert(rabbit.name); //true

alert(Object.getPrototypeOf(rabbit) === animal);
alert(Object.setPrototypeOf(rabbit, {})); // change the prototype to empty object

/* 
    Object.create has an optional second argument property descriptors . we can provide
    additional properties to the new object there like this

*/

let animal = {
    eats: true
}

let rabbit = Object.create(animal, {
    jumps: {
        value: true
    }
});

alert(rabbit.jumps); // true

/* 
  This will make true copy of object including all properties enumerable and non-enumerable,
  data properties and setters/getters - everything and with the right prototype
*/
let clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));

/*

Breif history

    If we count all the ways to manage [[Prototype]] there a lot! Many ways to do same thing

    Why?

    Thats is for historical reasons

    The "prototype" property of constructor function has worked since very ancient times

    Later in the year 2012, Object.create appread in the standard . It gave the ability to create
    Objects with a given prototype , but did not provide the ability to get/set . so browser implemmeted
    non standard __proto__ accessor method that allowed user to get/set prototype at any time


    But in 2015 Object.setPrototypeOf and Object.getPrototypeOf were added to the standard to
    perfom the same functionality as __proto__. As __proto__ was de-facto implemented everywhere


    Important : Changing the prototype of existing objects will result in drop of
    performance optimization and so Object.setPrototypeOf or obj.__proto__ is very slow
    operation as it breaks internal optimization

*/


/* 
    Very plain objects

    Aas we know objects are used to store key/value pairs

    But what happens when we set "__proto__"

*/


let obj = {};

let key = prompt("whats the key ?", "__proto__");

obj[key] = "somee";

alert(obj[key]) // [object Object]

/* 
    Here assignment to prototype is ignored

    As we know __proto__ property is special. It must be either null or Object

    Here string assignment is ignored.

    So thats impossible to set __proto__ with values other than Object or null
    (Thats a bug with objects!)

    So its better we can use Map which avoid these kinds of drawbacks using Map

    __proto__ is not equal to prototype / It acts as an setter/getter for [[Prototype]]

    So __proto__ acts as an getter/setter for the prototype when trying to access the getter/setter


*/

let obj = Object.create(null);

let key = prompt("What's the key?", "__proto__");
obj[key] = "some value";

alert(obj[key]); // "some value"

/* 
    Explicitly set the __proto__ to null creates an emoty object without a prototype [[Prototype]]
    is null

    null
    
     ||
    
    object 

   Here there is no getter/setter for __proto__ . Now it is processed as a regular property
*/

let obj = Object.create(null);

alert(obj); // Error (no toString)


// But methods like Object.keys() like so work without any problem

