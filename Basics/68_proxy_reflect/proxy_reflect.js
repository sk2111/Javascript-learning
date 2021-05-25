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


/* 
    Reflect

    Reflect is a built-in object that simplifies the creation of proxy

    Previous we saw that we cant able to access the internal methods [[Get]] [[Set]] and others
    are spec defined and we cant able to access them directly

    The Reflect object makes it somewhat possible to access them , They provide an wrapper
    around the internal methods


Operation	        Reflect call	                Internal method
obj[prop]	        Reflect.get(obj, prop)	        [[Get]]
obj[prop] = value	Reflect.set(obj, prop, value)	[[Set]]
delete obj[prop]	Reflect.deleteProperty(obj, prop)	[[Delete]]
new F(value)	    Reflect.construct(F, value)	    [[Construct]]

*/

let user = {}

Reflect.set(user, "name", "sathish");

alert(user.name); //sathish

/*  
    Each trap method name has a corresponding method name in the Reflect object
    and the arguments same as Proxy traps

*/

let user = {
    name: "John",
};

user = new Proxy(user, {
    get(target, prop, receiver) {
        alert(`GET ${prop}`);
        return Reflect.get(target, prop, receiver); // (1)
    },
    set(target, prop, val, receiver) {
        alert(`SET ${prop}=${val}`);
        return Reflect.set(target, prop, val, receiver); // (2)
    }
});

let name = user.name; // shows "GET name"
user.name = "Pete"; // shows "SET name=Pete"

/* 
    Reflect.get reads an object property
    Reflect.set writes an object property and return true if successfull , false otherwise

    If a trap want to pass the call to the target ,its enough to call Reflect methods
    and pass the arguments as it takes care of everything

    But as we saw earlier its possible to just use target[prop] instead of Reflect methods 

    But they have some differences
*/


/* 
    Proxying a getter 

    Lets see an example that demonstartes why Reflect.get is better. And we will also see why get/set
    have an third argument receiver 

*/

let user = {
    _name: 'Guest',
    get name() {
        return this._name;
    }
};

user = new Proxy(user, {
    get(target, prop, receiver) {
        return target[prop];
    }
});

user.name;// Guest

/* 
    Everythign works correctly here but if we do an inheritence from user
*/

let admin = {
    __proto__: user,
    _name: "admin"
};

admin.name; // Guest 

/* 
    But how Guest appeared here ?

    when admin name is called the prototype getter is called which is user here

    the proptotype getter passes the target as the user not admin 

    But if we look at the receiver it holds the proper value of "this"

    So to avoid such confusion developers can transparently pass the call to Reflect

    which takes care of dealing with things easily

*/

user = new Proxy(user, {
    get(target, prop, receiver) {
        return Reflect.get(target, prop, receiver); // even after inheritance eveything will be normal
    }
});


/* 
    Proxy limitation

    Proxy provide a low level unique way to alter the behaviour of the exisiting object
    at the lowest level. still,its not perfect. there are limitations


    Many built in objects like Map,Set,Date,Promise and others make use of "internal slots"

    For example Map use an internal slot something like [[MapData]] but proxy with [Get] [Set]
    dont have access to them directly

    Due to that we can have some issues



*/
let map = new Map();

let proxy = new Proxy(map, {});

proxy.set('test', 1); // Error

//Here the set method is called on proxy object and there is no such method available to it throws an error

//Way to fix

let map = new Map();

let proxy = new Proxy(map, {
    get(target, prop, receiver) {
        let value = Reflect.get(...arguments);
        return typeof value == 'function' ? value.bind(target) : value;
    }
});

proxy.set('test', 1);
alert(proxy.get('test')); // 1 (works!)

/* 
    Now its works fine because get trap binds the function properties, such as map.set
    to the target object (map) itself

    Array has not such internal slots

    Arrays are from early days and there was no such internal slots to them

    So Proxying an array will not be an problem


*/

/* 
    Private fields

    Private properties in classes breaks after proxying
    The reason is that private fields are implemented using internal slots. 
    JavaScript does not use [[Get]]/[[Set]] when accessing them.

*/
class User {
    #name = "Guest";

    getName() {
        return this.#name;
    }
}

let user = new User();

user = new Proxy(user, {});

alert(user.getName()); // Error

// the workaround solution is 

class User {
    #name = "Guest";

    getName() {
        return this.#name;
    }
}

let user = new User();

user = new Proxy(user, {
    get(target, prop, receiver) {
        let value = Reflect.get(...arguments);
        return typeof value == 'function' ? value.bind(target) : value;
    }
});

alert(user.getName()); // Guest

//The above solution has its drawbacks also because it exposes original object to the method
//potentially allowing it to passed furthur and breaking other proxied functionality


/* 
    Proxy != target

    The proxy and the original objects are different objects.

    So if we use the original object as a key and then proxy it, then the proxy cant be found
*/

let allUsers = new Set();

class User {
    constructor(name) {
        this.name = name;
        allUsers.add(this);
    }
}

let user = new User("John");

alert(allUsers.has(user)); // true

user = new Proxy(user, {});

alert(allUsers.has(user)); // false

// /As we can see, after proxying we can’t find user in the set allUsers, because the proxy is a different object.

/* 
    Revocable proxies 

    A revocable proxy is an object that can be disabled

    Lets say we have an resource and we like to close it any moment

    After calling the revoke the entire reference to the target is removed 
    and they are no longer connected 
    
*/

let { proxy, revoke } = Proxy.revocable(target, handler);

let object = {
    data: "Valuable data"
};

let { proxy, revoke } = Proxy.revocable(object, {});

// pass the proxy somewhere instead of object...
alert(proxy.data); // Valuable data

// later in our code
revoke();

// the proxy isn't working any more (revoked)
alert(proxy.data); // Error