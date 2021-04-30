/* 
    In class there are some methods which are need to be kept internal and
    some need to to exposed to outer for public use


    In javascript it is a wide know convention to use _ for protected properties

    It means it should be accessed from outside but the language didint prevent if we try 
    to access it

*/

class Test {
    constructor() {

    }

    _hello() {
        // _ indicates private methd that should be called by other function of class
        //not from outside
    }
}


// As a new languagae addition to javascript now protected methods and properties are suppoted at
//the language level for that we need to use polyfill

class CoffeeMachine {

    #waterAmount = 0; // protected property using #

    get waterAmount() {
        return this.#waterAmount;
    }

    set waterAmount(value) {
        if (value < 0) value = 0;
        this.#waterAmount = value;
    }
}

let machine = new CoffeeMachine();

machine.waterAmount = 100;
alert(machine.#waterAmount); // Error



/* 
    Instance of operator is used to check whether the object 
    is an instance of another object 

    It usally uses the prototype chain to take the decision and 
    return true or false depending upon the context

*/