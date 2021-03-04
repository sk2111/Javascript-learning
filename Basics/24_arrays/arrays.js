/* 
    Object store keyed collection of values 
    
    But what if we need to store ordered collection of values 
    We need a special data structure called arrays

    (We cannot maintain order in Object , like we cannot insert into middle)
*/

// Basic Array operation 

// 1) Various type to declare an array
let fruits = new Array();
let fruits1 = [];

// addign elements during initialization

let fruty = ['apple', 'mango', 'orange'];

alert(furty[0]); // apple

fruty[0] = 'banana'; // modify the 0 element

fruty.length; // gives the length of the array


// array can store data of any type

let arr = [{ name: 'hai' }]
alert(arr[0].name);

/* 
    Methods in array push/pop , shift/unshift

    With these methods we can implemet other data structures
    like stack and queue

    stack => last In first out (push and taken from last)
    queue => first in firt out (element taken from front in queue and pushed at last)

*/

// pop

let fruits = ['Apple', 'Mango', 'Orange'];

alert(fruits.pop()); // remove orange 

// push

let fruits = ["Apple", 'Orange'];

fruits.push('banana');// ["Apple",'Orange','banana'];

// shift => removes first element of array and return it

let fruit = ['a', 'b'];

fruit.shift(); // return a 

alert(fruit); //b

// unshift => adds an element to the front of array

let fruits = ['Orange', 'Pear'];

fruits.unshift('apple');

alert(fruits);// [apple,Orange,Pear]

// push and unshift supports multiple elemnts to add at one

fruits.push('n', 'f'); // we can add as many as needed
fruits.unshift('a', 'c');


/* 
    Internals 

    An array is a special kind of object . The square brackets are used to access elements
    similar to objects in javascript arr[0] similar to obj['a']

    Array are special kind of objects with numeric key as property

    Arrays provide methods and other items to work with order collection of data 


*/

//arrays are copied by reference

let a = [1, 2];

let b = a;

b.push(3);

alert(a); //1,2,3

// If array are object then how order is mainiatned

/* 
    Arrays are usaually stored as contiguous memeory blocks inside the RAM

    Js provide optimizatioon to work with array in really fast manner
*/

/* 
    since array are object technically we can do this

    let fruits = [];
    fruits[99999] =5;

    fruits.age = 25;

    if above steps are performed then Js engine stop the array optimization and cut off optimization

    we need to use array for its purpose (Ordered collection of data)
*/


/* 
    PUSH, POP method run fast
        - because adding or removing from end doesnt require any index recalculation
    Shift,unshift metho run slow
        -  because adding to front or removing from front need other items index to move 

*/

/* 
    Loops in array
    
    // for loop 

*/

let arr = ['Apple', 'Orange', 'Pear'];
//classic way
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for(let fruit of arr){
    console.log(fruit); // of loop iterate over value
}

// Techinically we cna use for in loop also but we need to avoid it as its not optimzed for array


/* 
    Special case of length

    The length property denots the greatess number index in array

    let = [];
    a[1000] = []

    a.length => give 10001


    Array length is writable also

    let a = [1,2,3,4,5]
    arr.length = 2
    
    console.log(a) => [1,2]

    We can use length to truncate array also

    to make array emplty => arr.length = 0 ;
    // empty arrray
*/

/* 
    new Array()

    => we can use new Array to create an array but it can become tricky sometimes

    => new Array('a','b','c')

        create an array like [a,b,c]
    
    but when we give numeric property to it then 
       
        new Array(2);

        it sets the length property to 2 but a[0] will be undefined
*/

/* 
    Multidimensional array

*/

let martix =[
    [0,1,2],
    [0,1,2],
    [0,1,2],
];

matrix[1][2] ;// we can acces multidimesional array like this

/* 
    Arrays have their own implementation of to string method
    => it returns comman seperated list of elements
    => array dont have Symbol.toPrimitive or valueOf implemeted
    => it has only toString
*/

let arr = [1,2,3];

alert(arr); // 1,2,3
alert(String(arr) === '1,2,3');

alert([]+1); // '1'
alert([1]+1); // '11'
alert([1,2]+1); // '1,21'


// Array comparison 

let a = [];
let b = [];

alert(a===b) ; // false because similar to objects array are compared by reference

// Best way to compare array is loop over each item and compare one by one


