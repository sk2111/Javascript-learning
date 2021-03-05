// Add / Removing items in array
let a = [];
a.push(); // add element to last 
a.pop(); // remove element from last
a.shift(); // remove element from first
a.unshift(); // add element to the front

/* 
    Array splice method id used to delete ,replace and insert elements

    arr.splice(startIndex[,deletecount,elem1,...,elemN]);

    splice returns deleted elements

*/

let arr = [1, 2, 3];

// delete only
arr.splice(1, 1); // start at index 1 delete 1 elements // [1,3]

arr = [1, 2, 3];
// delete and insert
arr.splice(0, 2, 5, 6); // start from index 0 delete 2 elements and insert 5,6
//[5,6,3]

// can be used for insert without delete
let a = [1, 2, 3];
arr.splice(0, 0, 1, 2);
// [1,2,1,2,3]

//( Note : we can use negatives values in array splice to represent from end)


/* 
    Array slice 

    => Array slice method is used to get a copy of array from start to end -1 
    => negative values are also allowed to slice fron end
*/

let arr = [1, 2, 3, 4];

arr.slice(1, 3);  // e,s (copy from 1 to 3)

// Note : arr.slice() can be called without argument to return an full copied array , many times it is used


/* 
    Array concat

    let arr = [1,2,3]

    concat take n number of arguments arguments can be array or Number

    Nomrally concat works with arrays if we give object then it adds the object straightaway unless

    Symbol.isConcatSpreadable property is specified
*/

alert(arr.concat([3, 4])); // [1,2,3,3,4]

arr.concat([3, 4], [5, 6], 5, 6, 7); // [1,2,3,3,4,5,6,5,6,7]

let arrayLike = {
    0: "something",
    1: "helllo",
    [Symbol.isConcatSpreadable]: true
};

arr.concat(arrayLike); // [3,4,'something','helllo']

// forEach , helpful to iterate over every element in array

arr.forEach((item, index, array) => {

});


/* 
    Array indexOf ,lastIndexOf , includes

    indexOf(index,from) => look for item from index 'from' , if found return found index or -1  
    lastIndexOf(index,from) => look for item from index 'from' right to left , if found return found index or -1  
    includes(index,from) => look for item from index 'from' , if found return true else false  

*/

let arr1 = [1, 2, true, 0];

arr1.indexOf(1); //0
arr1.indexOf(5); //-1
arr1.includes(true); //true


// array find and array findIndex

/* 
    Imagine we have a array of object and we find to find specific Object in it ;

    we can easily do this with array find

    if we return true the current element is returened and iteration stopped or else keeps going
*/

let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" }
]

let user = users.find(item => item.id == 1);

// user will be object with id 1

// find Index does the same thing but it return index 

// array filter

/* 
    Array find will return only one element but what if we need array of matching values

    we can use filter

*/

let userFilter = users.find(item => item.id < 3);

userFilter.length; // 2 contains array of objects of mathcing critertia


/* 
    Array map

    Map overs each item in the array and values beign return are collected and given out

*/

let result = arr.map((item, idx, arr) => {
    // we can retur something here
})

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5,7,


// arr sorting

/* 
    arr.sort(compareFunction)
    sorting of array happens in place changing element order

    it also returns the sorted array but usually ignored as arr 

*/

let arr = [1, 2, 15];
arr.sort();
arr;//1,15,2

/* 
    What sorted in wrong order?

    The arr sort uses string comparison by defualt(because array can contain anything like objects boolean)

    so it is essential for us to provide a compare function

*/

function compare(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

/* 
    If value is positive then it means a i sgreater than b 
    if negative a is less than b 
    if 0 both are equal
*/

arr.sort(compare); // 1,2,15 works correct

//interanlly it may use Timsort or quicksort 

arr.sort((a, b) => a - b); // same as compare function


// to revers an array we can use array.reverse

let arr = [1, 2, 3, 4, 5];
arr.reverse();
alert(arr); //5,4,3,2,1

/* 
    Array split('') and join('')

    string split is used to split string with delimiter

    let a = 'hello,hai,pa'

   
    join is reverse of  split combine arry of values with deleimiter
*/

a.split(','); // [helllo,hai,pa] ; strings

a.split(',').join('-');//hello-hai-pa


/*
    Array reduce

    Array reduce is used to obtain single value from the array

    1) initial value is set to accumulator
    2) each iteration return result goes into accumulator
    3) at the end last retur value is returned as result

    Array reduce right

    1) same to reduce but starts from right and ends at left
*/


let value = arr.reduce(function (accumulator, item, index, array) {
    // ...
}, [initial]);


/* 
    Type of vs Array.isArray()

    since array is type of object we we use type of then it result in Object


*/

typeof []; // object
typeof {}; // object


// to avoid this case we can use 

Array.isArray([]);// true
Array.isArray({});// false


// support for thisArg

/* 
    Most array functiosn accept thisArg paramater to work with objects without any issue

    It will be helpful to work with object generally

*/

let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
        return user.age >= this.minAge && user.age < this.maxAge;
    }
};

let users = [
    { age: 16 },
    { age: 20 },
    { age: 23 },
    { age: 30 }
];

// find users, for who army.canJoin returns true
let soldiers = users.filter(army.canJoin, army); // if we dont pass ary here then this becomes undefined and error thrown

alert(soldiers.length); // 2
alert(soldiers[0].age); // 20
alert(soldiers[1].age); // 23

//another way is

let sol = users.filter(user => army.canJoin(user)); 
// now this represnt the army


/* 
    Few  other methods

    arr.every() ; if evrything matches the condition return true => works like &&
    arr.some() ; if somethign matches the condition return true => works like ||

    arr.fill(value,start,end); fill array from start to end with the value 
    
    arr.flat(depth)l arr.flatMap(fun);

    arr.copyWithin(target,start,end); 

    copies the element from position start till position end within itself, at position target
    
    Creates a flattened array from multidimensional array
*/
