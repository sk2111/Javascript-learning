//8 Basic Data types

//--------------PRIMITIVES ---------------------
// Javscript is dynamically type meaning we can assign  a number and can reassign with string later etc

//1) Number  Max value (2power53-1)
// integer and float are called number aprt fromthat Infinity,-Infinity and Nan

alert(1/0); //Infinity; [not an error]
alert(Infinity);

//Nan represents a computational error and its sticky 
alert("hai"/2); //Nan

//2) Big Int
//Used to store number greater than 2 power 53 -1 in javascript
let bigBingNumer = '9999999999999999999999999999999999999999999n';
// we need to use n at the end to denote it as big int

//3) String
let str = "hai";
let str2 = 'hai';
let str3 =  `hai ${str}`; //all are valid strings

//4) Boolean

let isDone = false; // two states true and false
//Booleans are result of comparisons eg : 4>1 return true

//5) Null
//In javascript  null represnt empty ,nothing value , null is ites own type
let age = null;

//6) undefined
// when variables are declared and not assigned its default value is undefined
let age1; // console.log(age) ==> undefined

//Advanced data types

//7,8) Object and symbols
//Object is sed to store collection of values
//symbol is used to create inique identifiers for objects

//type of operator | function

typeof 10; // 'number'
typeof 10n; // 'bigint'
typeof 'hello'; // 'string'
typeof true; // 'boolean'
typeof undefined; // 'undefined'
typeof alert; //'function' => type of handles function diffently and return function (functions are objects tin js)
typeof null; // 'object' => considered bug in language kept as such for compatibility
typeof Symbol("id") //'symbol'
