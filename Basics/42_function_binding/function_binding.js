/* 
    Function Binding

    When we pass object methods as callbacks for instance to setTimeout , the reference to
    "this" is lost 

*/



let userObj = {
    name: 'helllo',
    sayHi() {
        console.log(this.name);
    }
};


setTimeout(userObj.sayHi, 1000);// logs undefined

/* 
    Since when the function is called seperately from setTimeout object we need to
    
    expliclity bound this to work correctly

    SetTimeout is special => it sets this to  window in browser and this becomes the timer object in node js
*/


//solution 1 - wrapper

setTimeout(function () {
    userObj.sayHi();
}, 1000);

// But there can be unceratinity if the userObject changes

// Solution 2 - bind

/* 
    Function have another method associated with them called bind

    It is actually used to bind the "this" to a predefined object of user choice

    func.bind(context)
*/


let user = {
    name: 'helo',
    sayHi() {
        console.log("hi");
    }
}


let greet = user.sayHi.bind(user);

greet(); // helo

/* 
    When we use bind it creates a special function object which is callable with fixed this always

*/

let user = {
    firstName: "John"
};

function func(phrase) {
    alert(phrase + ', ' + this.firstName);
}

// bind this to user
let funcUser = func.bind(user);

funcUser("Hello"); // Hello, John (argument "Hello" is passed, and this=user)


let user = {
    firstName: "John",
    sayHi() {
        alert(`Hello, ${this.firstName}!`);
    }
};

let sayHi = user.sayHi.bind(user); // (*)

// can run it without an object
sayHi(); // Hello, John!

setTimeout(sayHi, 1000); // Hello, John!

// even if the value of user changes within 1 second
// sayHi uses the pre-bound value which is reference to the old user object
user = {
    sayHi() { alert("Another user in setTimeout!"); }
};


/* 
    If an object has many methods and if we like to bind them all we can use a loop 
    to do that

*/

function bindAll(obj) {
    for (let key in obj) {
        if (typeof key === 'function') {
            obj[key] = obj[key].bind(obj);
        }
    }
}


/* 
    Partial functions

    Till now we use bind for only setting this 

    But bind can be also used to fix the arguments to the functions as well
    (something like currying)

*/

let bound = func.bind(context, [arg1], [arg2]);

// above will bind this and also arguments passed


function multi(a, b) {
    return a * b;
}

let double = multi.bind(null, 2);

double(3); // 2*3 = 6
double(4); // 2*4 = 8

// here a is set to 2 during bind step and we can pass remaining param 
/*
    Use case is when we pass a lot of similar paramters to a function

    then first step we can bind and pass the different paramaters alone for convience

*/



/* 
    Setting the partial without the context

    When we need to fix some arguments but not want to set the context to this

    We can use a partial function our own custom version to do that
*/

function partial(func, ...argsBound) {
    return function (...args) {
        return func.call(this, ...argsBound, ...args)
    }
}

let user = {
    msg: 'hello',
    sayHi(name, lastName) {
        console.log(this.msg + ' ' + name + ' ' + lastName);
    }
}


user.sayHi = partial(use.sayHi, 'sathish');


user.sayHi('kumar');// hello sathish kumar
