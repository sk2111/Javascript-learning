/* 
    Currying 


    => Currying is the tranformation of converting the function(a,b,c) to function(a)(b)(c)

    => It helps to avoid keep pass same arguments to a function and we can use a curried version
*/


function curry(f) {
    return function (a) {
        return function (b) {
            return f(a, b);
        }
    }
}


function sum(a, b) {

}

let curriedsum = curry(sum);

alert(curriedsum(1)(2));//3


// The above is the basic example of currying loash offers more powerful currying 

//advanced currying function
function curry(func) {

    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function (...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    };

}

//usage examples
function sum(a, b, c) {
    return a + b + c;
}

let curriedSum = curry(sum);

alert(curriedSum(1, 2, 3)); // 6, still callable normally
alert(curriedSum(1)(2, 3)); // 6, currying of 1st arg
alert(curriedSum(1)(2)(3)); // 6, full currying