/* 
    Arrow functions

    Apart from shorter from syntax arrow  functions will help us to hold the context
    of "this" binding  => current context

    Like normal function ("this" is deteremined during the calling time)

    Arrow functions dont have "this" set by calling nature
    But it takes the value of "this" from outer normal function
    
*/


let group = {
    msg: 'hai',
    names: ['jonh', 'mary'],
    greet() {
        this.names.forEach((name) => alert(this.msg + name));
    }
};

group.greet(); // works without any problem  beacuse "this" is bounded to outer normal function

// If we have used a regular function in this case then it will throw an error
// By default foreach runs with "this" undefined for normal functions 
// They dont affect arrow functions because they dont have "this"

/* 
    Note:
    
    Arrow functions can't run with new operator
    since arrow functions dont have "this" adhered to them we cannot use them as constructors
*/

/* 
    Arrow functions vs Bind

    There is a subtle difference between arrow function  => and a regular function called with .bind(this)

    .bind(this) creates a "bound version" of a function

    The arrow => doesn't create any binding . The function simple doesn't have this. the lookup 
    of this is exactly made the same way as regular variable in search in outer lexical environment
*/


/* 
    With arrow functions we have have decorators with few lines of code compartive to traditional 
    functions

*/

function defer(f, ms) {

    return function () {
        setTimeout(() => f.apply(this, arguments), ms);
    }
}

function test(name) {
    alert('hai', name)
}

const deffer = defer(test, 1000);

deffer("Hello");

/* 
    Here since we have pass arrow function to the setTimeout it take "this"
    value from outer normal function 
*/

function defer(f, ms) {

    return function () {
        const context = this;
        setTimeout(function () {
            f.apply(context, arguments)
        }, ms);
    }
}

// Traditional way 


/*
    Takeaway

    1) Arrow functions dont have "this"
    2) Arrow functions dont have arguments
    3) They cannot be called with "new"
    4) They also dont have super in class

*/