/* 
    Rest and Spread syntax

    Many javascript function has arbitary length of parameters to support like

    => Math.max(max1,max2,max3,max4,max5,max6...maxN)
    => Object.assign(dest,obj1,obj2,obj3,obj4,...objN)
    
    Here we can provide as many arguments as we like to above cases


    Rest paramters


*/

function sum(a, b) {
    return a + b
}
sum(1, 2);
sum(1, 2, 3, 4, 5); // it wont throw any error and it considers only first two paramters 
sum(1, 2, 3, 4, 5, 6); // it also wont throw any error 

// Then how can we predict how many parmaters are there and how to get them all

function sum(a, b, ...arr) {
    return a + b;
}
function sum(...arr) {
    return arr[0] + arr[1];
}

// ... collect other params and put it inside an array

// Rest paramters should be always at the end 

// In older times there was arguments variable used for this purpose
// arguments is array-like and iterable object


function sum() {
    let a = arguments.length;
    let b = arguments[0];
}

// Still this type of arguments is supported

/* 
    Note: Arrow functions dont have arguments

    It takes from outer normal functions
    

*/
function f() {
    let showArg = () => alert(arguments[0]); // takes from outer normal functions 
    showArg();
}

f(1); // 1

/* 
    Spread syntax

    We can accumulate argumenst using rest syntax

    But sometimes we need to do the opposite

    For an function call we need to call with arbitary parameters

    Lets say Math.max(arg1,arg2...)

    we cannot pass array into it beacuse it expects numeric property

    To recuse we can use spread syntax

*/

let arr = [1, 2, 3]
let arr1 = [1, 2, 3]
Math.max(...arr)//equivalent to Math.max(1,2,3)

Math.max(...arr, ...arr1); // we can combine two things
Math.max(1, ...arr, 2, ...arr1); // we can use with numric values also


let arr3 = [...arr, arr1]; // creating new array

// spread synctax works with ITERABLES

// so we can also use string in this case

let word = 'hello';
let strArr = [...word];

// same as Array.from() but it works it both iterable and array like but spread works with iterable only


// copying object and array made easy by spread

let arr = [1, 2, 3];
let arr1 = [...arr];


// copying object

let obj = { a: 1, b: 2 };
let obj1 = { ...obj };



