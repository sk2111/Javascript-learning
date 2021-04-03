/* 
    Property flags and descriptors

    Apart from storing key-value pair objects are powerful that it can have some configuration 
    as well

    property flags

    Object properties besides value, have three special attributes (so-called flags)

        writable : if true , we can write some values to the object , otherwis its read only

        enumerable : if true , then listed in loops otherwise not listed

        configurable : if true, the propery can be deleted and these attriutes can be mdified as well

    When we create an property all of them are true by default
*/


// To get the property flags we can use Object.getOwnPropertyDescriptors

let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);

// Params
// Object to get information from
// Property Name => Name of the property 
// return value is so called property descriptor object. It contains the value and all flags

let user = {
    name: "John"
};

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

alert(JSON.stringify(descriptor, null, 2));
/* property descriptor:
{
"value": "John",
"writable": true,
"enumerable": true,
"configurable": true
}
*/

// Object.defineProperty => to change the flags

Object.defineProperty(Obj, proertyName, descriptor);

// descriptor => object to apply

/* 
    if such property already exists then define property updates it or else it will create
    and new property with supplied flags

    if flags are empty then all are false by default
*/

let user = {};
Object.defineProperty(user, "name", { value: 'john' });

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

alert(JSON.stringify(descriptor, null, 2));
/*
{
  "value": "John",
  "writable": false,
  "enumerable": false,
  "configurable": false
}
// we not passed any flags so all flags are set to false (if this is not we need then we need to pass the flasg properties and value)
 */


/* 
    Non writable
*/

let user = {
    name: 'john'
};

Object.defineProperty(user, "name", {
    writable: false
})

user.name = 'test'; // error 

/* 
    TO Note error appear in only strict Mode , in non strict mode 
    without any error the process is silently ignored
*/


let user = {};

Object.defineProperty(user, "name", {
    value: "John",
    // for new properties we need to explicitly list what's true
    enumerable: true,
    configurable: true
});

alert(user.name); // John
user.name = "Pete"; // Error



// Non - enumerable

/* 
    We can add our own toString property to user

    Nomrally built in toStirng doesnt show up in enumeration (for ...in). But if we add a toString of our own 
    then by default it shows up in for...in like this
*/

let user = {
    name: "John",
    toString() {
        return this.name;
    }
};

// By default, both our properties are listed:
for (let key in user) alert(key); // name, toString


/* 
    To avoid such behaviour we can use enumerable property flag

*/

Object.defineProperty(user, "toString", {
    enumerable: false
});


for (let key in user) alert(key); // name

// Non enumerable properties are excluded from Object.keys as well
alert(Object.keys(user)); // name


/* 
    Non configurable
    
    If we set an object property to non configurable 
    then we cannot delete or redefine object.defineProperty

    It is an one way
*/

// Eg Built in Math.pi

let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');

alert(JSON.stringify(descriptor, null, 2));
/*
{
  "value": 3.141592653589793,
  "writable": false,
  "enumerable": false,
  "configurable": false
}
*/

// so we dont do something like below

Math.PI = 2; // error
delete Math.PI;

// Restriction of non configurable property
/*
    1) Cant change configurable flag
    2) Cant change enumerable flag
    3) cant change writable : false to true (true to false is possible)
    4) cant change get/set for an accessor property (but can assign them if absent)
*/

/* 
    The main idea of configurable false is to prevent deletion and property flasg changes
    while allowing the value to change
*/

let user = {
    name: 'john'
}

Object.defineProperty(user, 'name', {
    configurable: false
})

user.name = "test";
delete user.name;


// To make name forever sealed 

Object.defineProperty(user, "name", {
    writable: false,
    configurable: false
})


// The we cant able to do
user.name = "Pete";
delete user.name;
Object.defineProperty(user, "name", { value: "Pete" });


// Object.defineProperties()
/*
    Object defineProperties allows many properties to be defined at once

    Object.defineProperties(obj, {
        prop1: descriptor1,
        prop2: descriptor2
        // ...
    });

*/
Object.defineProperties(user, {
    name: { value: "John", writable: false },
    surname: { value: "Smith", writable: false },
});


// Object.getOwnPropertyDescriptors

/* 
    To get all the descriptors at once we can use Object.getOwnPropertyDescriptors

    Together with Object.defineProperties it can be used to "flags aware way f cloning object"
*/

let clone = Object.defineProperties({},Object.getOwnPropertyDescriptors(obj));


// Traditionaly way of cloning dont take flasg

for(let key in obj){
    clone[key] = obj[key];
}

/* 
    So its better to use Object.definePropeties to clone
    Another difference is for in loop avoid symbolic property but getOwnPropertyDescriptors consider
    symbol property  as well
*/

/* 
    Property Descriptors works at property level

    we can also seal the object global level as well

*/

Object.preventExtensions(obj)
    //Forbids the addition of new properties to the object.
Object.seal(obj)
    // Forbids adding/removing of properties. Sets configurable: false for all existing properties.
Object.freeze(obj)
    // Forbids adding/removing/changing of properties. Sets configurable: false, writable: false for all existing properties.
    //And also there are tests for them:

Object.isExtensible(obj)
    // Returns false if adding properties is forbidden, otherwise true.
Object.isSealed(obj)
    // Returns true if adding/removing properties is forbidden, and all existing properties have configurable: false.
Object.isFrozen(obj)
    //Returns true if adding/removing/changing properties is forbidden, and all current properties are configurable: false, writable: false.
    //These methods are rarely used in practice.