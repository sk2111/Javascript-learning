/* 
    Proxy & Reflect

    Proxy is an wrapper object around the exisiting object which can ble to intercept 
    operations like reading /writing or sometimes allow transparently to interact with 
    underlying object

    Proxy has the ability to intercept and handle the behaviour on its own

    The proxy technique is used in many javascript library and frameworks
*/

//Proxy syntax

let proxy = new Proxy(target, handler);

/* 
    target => Can be any object to wrap, it can even a function 
    handler => proxy configuration , so called "traps" , method to intercept operations
               "get" trap for reading a property on target,
               "set" trap for writing into target and so on

    For operations if there is no corresponding traps then proxy allows transparently to perfomr
    operations on target
*/

let target = {};

let proxy = new Proxy(target, {});

proxy.test = 5; // writing to proxy 
console.log(target.test); // 5

console.log(proxy.test);//5

for (let key in proxy) console.log(key);// test, iteration also works 

/* 
    In the example above as there are no traps all operation are forwared to target

    1) writing on proxy writes on target
    2) Reading on proxy reads on target
    3) Iteration on proxy return values from target
*/

/* 
    For most operations in javascript objects there is an low level internal method associated
    with it such low level method is used for setting a value on object , get an value on the object etc
    These low level methods are provided by the specification and we can't call then directly 
    
    But proxy have the ability to intercept these low level calls and it happens by declaring 
    corresponding traps in the proxy handler , there  is a lot of methods we can watch on 

    lets see the use case

    
Internal Method	 Handler Method	    Triggers when…
[[Get]]	            get	            reading a property
[[Set]]	            set	            writing to a property
[[HasProperty]]	    has	            in operator
[[Delete]]	        deleteProperty	delete operator
[[Call]]	        apply	        function call
[[Construct]]	    construct	    new operator
[[GetPrototypeOf]]	getPrototypeOf	Object.getPrototypeOf
[[SetPrototypeOf]]	setPrototypeOf	Object.setPrototypeOf
[[IsExtensible]]	isExtensible	Object.isExtensible
[[PreventExtensions]]	preventExtensions	Object.preventExtensions
[[DefineOwnProperty]]	defineProperty	    Object.defineProperty, Object.defineProperties
[[GetOwnProperty]]	getOwnPropertyDescriptor	Object.getOwnPropertyDescriptor, for..in, Object.keys/values/entries
[[OwnPropertyKeys]]	ownKeys	                Object.getOwnPropertyNames, Object.getOwnPropertySymbols, for..in, Object.keys/values/entries

Javacript invariants

Javascript enforces some conditions to be fulfilled by internal methods and traps for consistent behaviour
For example 
    => [[set]] must return true if the value is written successfully or false
    => [[Delete]] must return true if the value is deleted successfully or false

    => some others like [[GetProtototypeOf]] applied to proxy object must return the same values 
    as [[GetPrototypeOf]] applied to proxy objects target object

    So traps can intercept these methods but must follow the rules
*/

/* 
    Using get trap 

    To intercept reading we can use get trap

    get(target,property,receiver)

    It triggers when the property is read, with following arguments


    target - is the target object, the one passed as the first argument to new Proxy
    property - property name 

    receiver - if the target is an getter then receiver is the object that is going to be used as "this" in its call

    lets see get proxy in practice

*/

let numbers = [0, 1, 2];

numbers = new Proxy(numbers, {
    get(target, prop) {
        if (prop in target) {
            return target[prop];
        } else {
            return 0; // default value
        }
    }
});
//Instead of returning undefined we return some custom value
alert(numbers[1]); // 1
alert(numbers[123]); // 0 (no such item)


// Dictionary word when not match return undefined instead we return the same value
let dictionary = {
    'Hello': 'Hola',
    'Bye': 'Adiós'
};

dictionary = new Proxy(dictionary, {
    get(target, phrase) { // intercept reading a property from dictionary
        if (phrase in target) { // if we have it in the dictionary
            return target[phrase]; // return the translation
        } else {
            // otherwise, return the non-translated phrase
            return phrase;
        }
    }
});

// Look up arbitrary phrases in the dictionary!
// At worst, they're not translated.
alert(dictionary['Hello']); // Hola
alert(dictionary['Welcome to Proxy']); // Welcome to Proxy (no translation)

//Please note we always replcae the declaration with porxy or else it will be eay to mess up
// If we reference up the target after proxy then it is messed up

/* 
  Validation with set trap

  [[set]] trap triggers when a property is written

  set(target,property,value,receiver)
  => target = value passed as first argument for new proxy
  => property = property name
  => value = value to write into property
  => receiver = same as get trap matters only for set trap 

The set trap should return false when write not success or true when write success
otherwise there will be an TypeError
*/

let numbers = [];

numbers = new Proxy(numbers, { // (*)
    set(target, prop, val) { // to intercept property writing
        if (typeof val == 'number') {
            target[prop] = val;
            return true;
        } else {
            return false;
        }
    }
});

numbers.push(1); // added successfully
numbers.push(2); // added successfully
alert("Length is: " + numbers.length); // 2

numbers.push("test"); // TypeError ('set' on proxy returned false)

alert("This line is never reached (error in the line above)");

/* 
    The built in functionality of arrays is still working and methods like push pop
    use [[set]] internally thus we dont need to extent anything but write a clean wrapper
    around existing methods
*/

/* 
    Iteration with "ownKeys" and "getOwnPropertyDescriptor"

    Object.keys(), for..in loop and most other methods that iterate ovr object porperties use
    [[ownPropertyKeys]] internal method (ownKeys  trap) to get a list of properties

    But such method differ in details

    Object.getOwnPropertyNames(obj) returns non-symbol keys.
    Object.getOwnPropertySymbols(obj) returns symbol keys.
    Object.keys/values() returns non-symbol keys/values with enumerable flag (property flags were explained in the article Property flags and descriptors).
    for..in loops over non-symbol keys with enumerable flag, and also prototype keys

    But to note all of them starts with a list

*/

//using own keys trap to skip _ in object

let user = {
    name: "John",
    age: 30,
    _password: "***"
};

user = new Proxy(user, {
    ownKeys(target) {
        return Object.keys(target).filter(key => !key.startsWith('_'));
    }
});

// "ownKeys" filters out _password
for (let key in user) alert(key); // name, then: age

// same effect on these methods:
alert(Object.keys(user)); // name,age
alert(Object.values(user)); // John,30

//Although we return keys that not exist in object, Object.keys() wont list it

let user = {};

user = new Proxy(user, {
    ownKeys(target) {
        return ['a', 'b', 'c'];
    }
});

alert(Object.keys(user)); // <empty>

/* 
    Why its is not lisiting ?

    Object.keys() return only properties with enumerable flag , To check that
    it calls internal method [[GetOwnProperty]] for every property to get its descriptor

    And since here there is no property no enumerale flasg and its skipped

    If we really wanted that then we can use our own custom get

*/

let user = {};

user = new Proxy(user, {
    ownKeys(target) { // called once to get a list of properties
        return ['a', 'b', 'c'];
    },

    getOwnPropertyDescriptor(target, prop) { // called for every property
        return {
            enumerable: true,
            configurable: true
            /* ...other flags, probable "value:..." */
        };
    }

});

alert(Object.keys(user)); // a, b, c

/* 
    Implementing own protected properties with "delete Property" and other traps

    There is an widespread convention that Prperties with _ is internal and it should 
    not be accessed by outside although technically its possible

*/
let user = {
    name: "John",
    _password: "secret"
};

alert(user._password); // secret

let user = {
    name: "John",
    _password: "***"
};

user = new Proxy(user, {
    get(target, prop) {
        if (prop.startsWith('_')) {
            throw new Error("Access denied");
        }
        let value = target[prop];
        return (typeof value === 'function') ? value.bind(target) : value; // (*)
    },
    set(target, prop, val) { // to intercept property writing
        if (prop.startsWith('_')) {
            throw new Error("Access denied");
        } else {
            target[prop] = val;
            return true;
        }
    },
    deleteProperty(target, prop) { // to intercept property deletion
        if (prop.startsWith('_')) {
            throw new Error("Access denied");
        } else {
            delete target[prop];
            return true;
        }
    },
    ownKeys(target) { // to intercept property list
        return Object.keys(target).filter(key => !key.startsWith('_'));
    }
});

// "get" doesn't allow to read _password
try {
    alert(user._password); // Error: Access denied
} catch (e) { alert(e.message); }

// "set" doesn't allow to write _password
try {
    user._password = "test"; // Error: Access denied
} catch (e) { alert(e.message); }

// "deleteProperty" doesn't allow to delete _password
try {
    delete user._password; // Error: Access denied
} catch (e) { alert(e.message); }

// "ownKeys" filters out _password
for (let key in user) alert(key); // name

/* 
    Private properties of a class

    Modern javascript engines natively support private properties in classses, prefixed with # 


*/

/* 
    Using "has" trap for object "in" operator
*/
let range = {
    start: 1,
    end: 10
};

//has(target,property)
// target => is the target object, passed as the first argument to new Proxy
// property - property name

let range = {
    start: 1,
    end: 10
};

range = new Proxy(range, {
    has(target, prop) {
        return prop >= target.start && prop <= target.end;
    }
});

alert(5 in range); // true
alert(50 in range); // false

/* 
    Wrapping functions: "apply"

    we can wrap a proxy around a function as well

    The apply(target,thisArgs,args) trap handles calling a proxy as function

    target is the target object (function is an object in javascript)
    thisArg is the values of "this"
    args is a list of arguments
*/

//Normal delay decorator 
function delay(f, ms) {
    // return a wrapper that passes the call to f after the timeout
    return function () { // (*)
        setTimeout(() => f.apply(this, arguments), ms);
    };
}

function sayHi(user) {
    alert(`Hello, ${user}!`);
}

// after this wrapping, calls to sayHi will be delayed for 3 seconds
sayHi = delay(sayHi, 3000);

sayHi("John"); // Hello, John! (after 3 seconds)


//The problem with above is after wrapping it loses length value etc 

//But with roxies everything is preserved nicely
function delay(f, ms) {
    return new Proxy(f, {
        apply(target, thisArg, args) {
            setTimeout(() => target.apply(thisArg, args), ms);
        }
    });
}

function sayHi(user) {
    alert(`Hello, ${user}!`);
}

sayHi = delay(sayHi, 3000);

alert(sayHi.length); // 1 (*) proxy forwards "get length" operation to the target

sayHi("John"); // Hello, John! (after 3 seconds)