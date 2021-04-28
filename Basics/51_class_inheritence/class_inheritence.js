/* 
    Class Inheritence 

    Its is the way of extending one class to another class

    so we can extend functionality on top of exisiting
*/

class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run() {
        this.speed = speed;

    }
    stop() {
        this.speed = 0;
    }
}

/* 
    Animal.prototype => constructor
                     => run
                     => stop
   
    Animal
        name :"", speed:0;

    we can extend another class using extends keyword
*/

class Rabbit extends Animal {
    hide() {
        console.log("rabbit hides");
    }
}

let rabbit = new Rabbit("white rabbit");
rabbit.run(5); // white rabbit runs with speed 5
rabbit.hide(); // white rabbit hides!

/* 
    Internally extends keyword works with using good old prototype,
    It sets Rabbit.prototype.[[prototype]]  === Animal.prototype

    so when method not found in rabbit class it check in prototype chain to
    find other methods
*/


/* 
    Dynamic Extending class is also possible

    We can write any expression to the right side of extend keyword

    For example we can write a function which returns the class

*/

function f(phrase) {
    return class {
        sayHi() {
            alert(phrase)
        }
    }
}


class Test extends f("hai") {

}

new Test().sayHi(); // "hai"

//These things will be helpful in dynamic assigning the class

/* 
    Overriding the method

    By default if some methods are missing in child class it is taken 
    from parent class if available

    But if we specify own method in child it will be used instead
*/

class Rabbit extends Animal {
    stop() { }
}


/* 
    But when we want to call the parent class or some reasons

    we can use super keyword inside the class to  access the parent prototype

    super.method() to call parent method
    super() to call the parent constructor
*/

class Rabbit extends Animal {
    hide() {
        console.log("I am ", this.name);
    }
    stop() {
        super.stop(); //calling parent method by using super
        this.hide();
    }
}

/* 
    Arrow functions has no super associated with it 

*/

class Rabbit extends Animal {
    stop() {
        setTimeout(() => super.stop(), 1000); // call parent stop after 1sec
    }
}

/* 
    But if we use normal function then it lead to an error

*/
setTimeout(function () { super.stop() }, 1000); // error 

/* 
    Because when a variable is not found usually it look for lexical environment scope 
    and prototype if it is an obj or function  ,here the inner function() has its own proototype
    which dont have super but wehn Class created super is created in prototype 
*/


/* 
    Overriding construtor

    With constructor it gets a little tricky

    Until above exaple Rabbit do not have its own constructor

    According to javascript specification if a class extends another class and has no constructor
    then following empty constructor is generated

*/

class Rabbit extends Animal {
    constructor(...args) {
        super(...args)
    }
}

/* 
    So when we dont write our own construtor then basically the above thing happens
*/

class Rabbit extends Animal {
    constructor(name, ear) {
        this.name = name;
        this.ear = ear;
    }
}

new Rabbit("white", 4);  // throw error this is not defined


/* 
    Why it went wrong?

    In javascrip the constructor of the derived class is named internally with a special property called
    [[ConstructorKind]] : "derived". Thats is a special internal label

    That label affects its behaviour with new 

    * when a regular fuction is called with new , it creates a empty object and assign it to this

    * But when a derived construtor runs, it doesn't do that , It expects parent construtor to do the job

    so we need to call super in derived constructor befor accessing this
*/

class Rabbit extends Animal {
    constructor(name, ear) {
        super(name);
        this.ear = ear;
    }
}


// overriding class fields

class Animal {
    name = "animal"

    constructor() {
        console.log(this.name);
    }
}

class Rabbit extends Animal {
    name = "rabbit"
}

new Animal(); //animal
new Rabbit(); // animal


/* 
    Why methods are using derived class methods properly but class fields wont?
    
    It depends on the field initialization order

    * Because class fields get initialized before the super call for parent class hat dont extend anything

    * And class fields gets initialized after super call for derived


*/

/* 
    super,internals, [[HomeObject]]

    If we think about how super is implemented behind the scenes we may think

    if this is know then this.__proto__.method() will call the parent 

    It works for one hierarchy but if we have multiple inheritence 3 or more level

    Then going up to the top is a problem and calls recursively again and again 

    calling method and throw error


    To sort out this javscript uses special property called [[HomeObject]]


    When a function is specified as a class or object methd its [[HomeObject]] property becomes
    the Object

    The super call use it to resolve the parent prototype and its methods


*/

let animal = {
    name: "Animal",
    eat() {         // animal.eat.[[HomeObject]] == animal
        alert(`${this.name} eats.`);
    }
};

let rabbit = {
    __proto__: animal,
    name: "Rabbit",
    eat() {         // rabbit.eat.[[HomeObject]] == rabbit
        super.eat();
    }
};

let longEar = {
    __proto__: rabbit,
    name: "Long Ear",
    eat() {         // longEar.eat.[[HomeObject]] == longEar
        super.eat();
    }
};

// works correctly
longEar.eat();  // Long Ear eats.

// Now super uses homeObject property to correclty call the parent chain and it wont use this


/* 
    As we know function in javscript are free and get "this" based on call 

    But [[HomeObject ]] violates this and so we should use it carefully inside methods

    The [[HomeObject]] is initialiaed once and it remebers forever

    Super is the only thing that use [[HomeObject]] , so if a method doesnt use super then things may go 
    wrong


*/

let animal = {
    sayHi() {
        alert(`I'm an animal`);
    }
};

// rabbit inherits from animal
let rabbit = {
    __proto__: animal,
    sayHi() {
        super.sayHi();
    }
};

let plant = {
    sayHi() {
        alert("I'm a plant");
    }
};

// tree inherits from plant
let tree = {
    __proto__: plant,
    sayHi: rabbit.sayHi // (*)
};

tree.sayHi();  // I'm an animal (?!?)


/* 
Since [[HomeObject]] remebers to which object it is created it produces wrong output

*/

/* 
    Methods not function properties

    [[HomeObject]] is defined for methods in classes and for object , bUt for object it should be
    method()  not function property like methd:function(){}
    
    
    If we use non method syntax then the [[home Obj property]] is not set and 
    the indheritance doesn't work
    
    
*/
let animal = {
    eat: function () { // intentionally writing like this instead of eat() {...
        // ...
    }
};

let rabbit = {
    __proto__: animal,
    eat: function () {
        super.eat();
    }
};

rabbit.eat();  // Error calling super (because there's no [[HomeObject]])