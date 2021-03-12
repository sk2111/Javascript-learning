/* 

    Destructing assignment

    => Destructuring is a syntax sugar for easy retrival of values 
*/
//Array destructing 

let a = ['john', 'mart']

let b = a[0];
let c = a[1];

/* 
    The above scenerio is normal way of taking out values from array
*/

let [b, c] = arr;

// Array destructing used here first value in arr => b , secod value => c


let [firstName, surname] = "John Smith".split(' ');
alert(firstName);
alert(lastName);

/* 
    Destructing doen't mean destructive 

    => The values are copied and the original array remains same
*/


// Ignoring lements using comma

let [num1, , num2] = [3, 4, 5];

// here we extract only 3 and 5 and we ignored 4 by using optional comma


// Destructing works with any iterable on right side

let [a, b, c] = 'abc'; // string is an iterable


/* 
    For our convience we can assume whatever works with for of loop 
    works with array destructing as well
*/


// Assigning any assignable in left

let user = {};

[user.name, user.age] = "john 25".split(' ');


// loop with Object.entries

let user = {
    name: 'john',
    age: 24
}

for (let [key, value] of Object.entries(user)) {
    alert(`${key} ${value}`);
}


// swap variables trick

let guest = "hello";
let admin = "john";

[guest, admin] = [admin, guest];


/* 
    Rest operator ...

    => What if the array size of 100 and i need first 2 variable and 
    remaning as seperate array

    => We can use the rest operator
*/


let [name1, name2] = ["john", "dog", "goee", "test", "extra"];

// Now we have name1 and name 2 but what if we need remaining values

[name1, name2, ...rest] = ["john", "dog", "goee", "test", "extra"];


/* 
    In above case the variable rest holds all the value 
    after index 1
    ["goee","test","extra"];
*/


// Default values

/* 
    If the arrays is shorter then left destructing then there will be nor error

    => the value will be assigned as undefined
    
*/

let [firstName, lastName] = [];

console.log(firstName); // undefined
console.log(lastName); // undefined

// we can also use default value in such cases if will be used when there is no value

let [firstName = "test", lastName = "test"] = ['hai'];

console.log(firstName); // hai
console.log(lastName); // test

// we can also use function calls in default values



/*
    Object destructing

    => Similar to array we can also use Object destruting

    let {var1, var2} = {var1,var2};

    => TO note is the left side name must be equal to key name of object
*/

let user = {
    name: 'john',
    age: 25,
    address: 'New york'
}


let { name, age, address } = user;

// here the left side name must be equal too key name , so chaning order also works

let { age, name, address } = user;


// what if we need to store values in different variable name
// we can use : syntax for this
let { age: a, name: n, address } = user;

console.log(a, n, address);

// we can also use default values as well if needed

let { mobile: a = 20, name: n, address = "US" } = user;


// we can also use rest pattern to collect remaining properties
let user = {
    name: 'john',
    age: 25,
    address: 'New york'
}

let { name, ...rest } = user;

console.log('rest', rest); // {age:25,address:'New york'}


/* 
    Gotcha

    => without let keyword there will be an error
    because javascript treate { as a opening of block scope

    so avoid that we need to use () towrap the assignment
*/
let name;

({ name, ...rest } = user);


/* 
    Nested destructing
    
    If an object contains another object or array we use depper nested level of
    destructing in the left side
*/


let options = {
    size: {
        width: 100,
        height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
};


let { size: { width, height }, items: [item1, item2], title = "menu" } = options


/* 
    Better way of writing functions

    suppose a function has may paramters and passing them seprately

    we can use an object and object destruting for that purpose
*/

function showMenu({ height = 30, width = 40, items: [item1, item2] } = {}) {

}


showMenu(); // works 
showMenu({ height: 20, width: 30, items=[1, 2] }); // works 

/* 
    This is a better way of writing function rather than passign individual 
    paramters

*/


