/* 
    Decorators 

    In javascript we can use decorator function to alter the function to behave in  aparticular way

    In javascript functions are objects so we can free assignt to other variables , add new properties,
    pass to another functions etc
    
    

*/

// EXample decorator function for caching
"use strict";
function intense(a) {
    // Function which takes a lot of time
    return a;
}


function cacheDecorator(func) {

    let cache = new Map();

    return function (x) {
        if (cache.has(x)) {
            return cache.get(x);
        }
        else {
            const result = func(x);
            cache.set(x, result);
            return result;
        }
    }
}


const intenseTest = cacheDecorator(intense);


intenseTest(1); // compute and return
intenseTest(1); // return from cache


/* 
    We are decorating some logic over the intense function and extending the feature using
    decorator function
    There is an advantage of writing cache in this way because it becomes
    reusable and we can use it for other functions also
*/


/* 
    The above method works fine but it fails when we try to chache some method in an object 

*/


let worker = {
    name: 'sathish',
    intense: function (x) {
        // assume doing some intense work
        return '1' + x + this.name;
    }
}


worker.intense = cacheDecorator(worker.intense)

worker.intense(1); // error cannot read name of undefined
console.log("test", worker.intense(1))


/* 
 Here since value of this is assigned dynamically  when the function is called

 The value of this will be undefined (strict mode) for when the actual work.intense (inside decorator)
 is called
  
 To avaoid this we can use function call method to pass the context explicitly 

*/

//function.call(context,arg1,arg2...)

// we can use function call and pass context to the function to work in all cases

function cacheDecorator(func) {

    let cache = new Map();

    return function (x) {
        if (cache.has(x)) {
            return cache.get(x);
        }
        else {
            const result = func.call(this, x);
            cache.set(x, result);
            return result;
        }
    }
}


// usage of call 

function sayHi() {
    alert(this.name);
}

let user = { name: "John" };
let admin = { name: "Admin" };

// use call to pass different objects as "this"
sayHi.call(user); // John
sayHi.call(admin); // Admin

/* 
Till now we are working with single argument value 

But we can make the decoratore mmore universal to get as may arguments it like

But we need to deal with how to store the key in map for multi arguments

1) Way one we can use our own hash function to has the arguments and use a key
2) Way 2 we can use "arg1,arg2" as a string to do tha hash


So a better way to handle multi arguments is like
*/

let worker = {
    slow(min, max) {
        alert(`Called with ${min},${max}`);
        return min + max;
    }
};

function cachingDecorator(func, hash) {
    let cache = new Map();
    return function () {
        let key = hash(arguments); // (*)
        if (cache.has(key)) {
            return cache.get(key);
        }

        let result = func.call(this, ...arguments); // (**)

        cache.set(key, result);
        return result;
    };
}

function hash(args) {
    return args[0] + ',' + args[1];
}

worker.slow = cachingDecorator(worker.slow, hash);

alert(worker.slow(3, 5)); // works
alert("Again " + worker.slow(3, 5)); // same (cached)


/*
  Function apply

    Instead of using call we can also use apply

    syntax : function.apply(context,args)

    Here the args is an array like object

    But in call method the args is an list 

    function.call(context,...args)
    function.apply(context,args) // we can use array or array like object bot are valid
*/