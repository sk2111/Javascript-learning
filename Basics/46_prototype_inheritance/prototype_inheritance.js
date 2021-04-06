/* 
    Prototype Inheritance

    In programming we often take something and extend it

    For instance we have a user object with its properties and methods and we want to make 
    admin and guest as a slightly varied version of user object (Not to copy/reimplement all that prop
    methods again)

    We can use prototype Inheritance in this case
*/

/* 
    [[Prototype]]

    In Javascript objects have a special hidden property [[Prototype]] that is either null or reference
    to another object . The another object here is called as prototype

    Prototype Object

        ^
        |
    
    Object


    When we try to read a property from object and its missing javascript will look into
    the prototype chain to find the property if it not exists in the prototype chain then throw an error or undefined

    The property [[Property]] is hidden and internal , there are many ways to set it

    One of them to use __proto__
*/

let animal = {
    eats: true,
    walk() {
        alert("Animal walk");
    }
};
let rabbit = {
    jumps: true
};

rabbit.__proto__ = animal; // set prototype of rabbit to animal

// Now if we read from rabbit for eats property it will be received from animal object(protoytype)

alert(rabbit.eats); //true
alert(rabbit.walks); // alert Animal walk // borrows methods also from prototype

/* 
    Animal
        eats:true
        walk:function
        ^
        |
    rabbit
        jumps:true

    The prototype chain can be longer as well
    WE can have three or more level depth prototype also
*/
let animal = {
    eats: true,
    walk() {
        alert("Animal walk");
    }
};

let rabbit = {
    jumps: true,
    __proto__: animal
};

let longEar = {
    earLength: 10,
    __proto__: rabbit
};

// walk is taken from the prototype chain
longEar.walk(); // Animal walk
alert(longEar.jumps); // true (from rabbit)

/* 
    To Note:

    1) The reference can't go in circular. Javacript will throw an error if we try to assign 
    __proto__ in circle 

    2) The value of __proto__ can be either null or object. Other types are ignored

    3) As we seen there is only one protype so we cannot actually inherit from two objects 

    __proto__ vs Prototype

    __proto__ is not as same as internal Prototype property. Its a getter/setter for [[Prototype]]

    __proto__ is bit outdated and javascript suggests that we should use 
    Object.getPrototypeOf / Object.setPrototypeOf functions to get/set the protype

    __proto__ must support by all browsers 


*/


/* 
    Writing doesn't use prototype

    The prototype is only used for reading properties

    writing directly works with object 

*/


let animal = {
    walk() {
        console.log('walking');
    }
}

let rabbit = {
    __proto__: animal
}

rabbit.walk = function () {
    alert("Rabbit walking")
};

rabbit.walk(); // Rabbit walking is called

/* 
    Accessor properties are an exception , as assignment is handled by setter function. writing to such a 
    property is actually thr same as calling a function

*/
let user = {
    name: "John",
    surname: "Smith",

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    },

    get fullName() {
        return `${this.name} ${this.surname}`;
    }
};

let admin = {
    __proto__: user,
    isAdmin: true
};

alert(admin.fullName); // John Smith (*)

// setter triggers!
admin.fullName = "Alice Cooper"; // (**)

alert(admin.fullName); // Alice Cooper, state of admin modified
alert(user.fullName); // John Smith, state of user protected
/* 
    Even though the fullName has a getter in the prototype user , tha admin object
    access this using a prototype chain 
*/
/* 
    The "this" during prototype calls

    "this" is not affected by protypes at all

    No matter where the method is found : in an object or it protoype. In a method call
    this is always the object before the dot

    Important thing to note here is the prototype methods are called with "this" instance 
    of caller object object before dot . So it actuallt modifies the calller object not the 
    object of the prototype
*/
// animal has methods
let animal = {
    walk() {
        if (!this.isSleeping) {
            alert(`I walk`);
        }
    },
    sleep() {
        this.isSleeping = true;
    }
};

let rabbit = {
    name: "White Rabbit",
    __proto__: animal
};

// modifies rabbit.isSleeping
rabbit.sleep();

alert(rabbit.isSleeping); // true
alert(animal.isSleeping); // undefined (no such property in the prototype)
/* 
    animal
        walk:function
        sleep:function

        ^
        |

    rabbit
        name:"white rabbit"
        isSleeping:true

    As a result , methods are shared , but the object state is not
*/

/* 
    for...in loop

    The for in loop iterates over inherited properties too
*/
let animal = {
    eats: true
};

let rabbit = {
    jumps: true,
    __proto__: animal
};

// Object.keys only returns own keys
alert(Object.keys(rabbit)); // jumps

// for..in loops over both own and inherited keys
for (let prop in rabbit) alert(prop); // jumps, then eats

/*
    If we dont wan this behaviour ten what we can do is we can exclude this
    by using type check Object.hasOwnProperty(key)

    Here rabbit ==> animal => Object.prototype

    animal is literal object and so it points to Object.prototype and then null above it

    null
     ^
     | [[Prototype]]
    Object.prototype
     toString:function
     hasOwnPropertyOf:function
     ^
     | [[Prototype]]
    animal
    eats:true
     ^
     |[[Prototype]]
    rabbit
    jumps:true

    Now we can understand from where rabbit.hasOwnProperty is coming from it actually lives in 
    the prototype chain but why hasOwnProperty not appread in for in loop ?

      Thats the use case of property descriptors flag enumerable:false

      By default Object.prototype is set to enumerable false thats why its not listed in
      for..in loop

    Almost all other key/value-getting methods ignore inherited properties
    
      Almost all other key/value-getting methods, such as Object.keys, Object.values 
      and so on ignore inherited properties.

      They only operate on the object itself. Properties from the prototype are not 
      taken into account. 
*/

