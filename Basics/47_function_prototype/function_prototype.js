/* 
    F.prototype

    Objects can be created using Object literal syntax and also using new Func()

    IF F.prototype is an Object then javascript uses it to set [[Prototype]] for the new object


    Note : 
        Javascript had prototype inheritance from the beginning. It was one of the core features 
        of the language
        
        But in old times there was no direct access to it and the only reliable way it worked 
        was using a "prototype" property of the constructor function, So there are many scripts 
        that still use it

    The F.prototype is a normal property on the function and it sounds similar to term "prototype"

*/

let animal = {
    eats: true
}

function Rabbbit(name) {
    this.name = name;
}

Rabbbit.prototype = animal;

let rabbit = new Rabbbit("White Rabbit"); // during this step rabbit.__proto__ == animal is set internally

alert(rabbit.eats); // true


/* 
    Setting Rabbit.prototype = animal literally states the following, "when a new Rabbit is created 
    
    assign its prototype to animal"


    Rabbit Func  =>>>>   animal(obj)

                             ^
                             |                             
                        rabbit Instance created from Rabbbit function

   
    Prototype is a property in function and when objects are created it looks up to that property
    and if it is an object then set them as prototype (__proto__) to instance objects

    Note : Function prototype is used only when new Function is called and it assign the prototype
    of the instance to that property

    If after the creation F.prototype property changes (F.prototype = <another object>) then new 
    Objects created by new F will have another object as [[Prototype]], but already exisiting objects keep the old one

*/

/* 
    Default prototype and constructor property

    Every function has the "prototype" property even if we dont supply one

    The default prototype is an object with the only property constructor that points back to the 
    function itself




*/

function Rabbit() {

}
/* default prototype
Rabbit.prototype = { constructor: Rabbit };
*/

let rabbit = new Rabbit();

alert(rabbit.prototype.constructor === Rabbit);// true

// WE can use constructor to furthur create the objects

let rabbit2 = new rabbit.constructor('Another rabbit');

// This is helpful when we dont know how we cretaed that object (Third party library and we need to create
// the same object like that then we can use the constructor property to look up and creta one)

/* 
    But it totally depend on us whwether we keep the constructir proprty or we can override one also


*/
function Rabbit() { }
Rabbit.prototype = {
    jumps: true
};

let rabbit = new Rabbit();
alert(rabbit.constructor === Rabbit); // false

// Here we have replace the entire default prototype itself

// To avoid such cases we can use something like this


Rabbit.prototype.jumps = true;

// Alternate way

Rabbit.prototype = {
    jumps: true,
    constructor: Rabbit
}