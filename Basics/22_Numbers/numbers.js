/* 
    In modern javascript there are two kinds of number

    1) Regular numbers 64 bit number maximum value is 2^53 or -2^53

    2) We have Bigint to hold the value of arbitary length. They are needed in special 
    cases when we want to hold information more than 2^53
*/

// Different ways to write number

let billon = 1000000000; // 9 zeros 

let billionReadable = 1_000_000_000; // syntactic sugar 
// The above format also implies the same number but it allows more readablity

let billon = 1e9; // This is aloso correct means 1 * 9 zeros;

//1e3 = 1* 1000

let microSecond = 0.0000001;

let microReadable = 1e-6; /// when we use negative it means we divide the number 1/ 1000000

/* 
    Hex,Binary,Octal number systems

    Hex => 0x
    Binary => 0b
    Octal => 0o

*/

let hex = 0xff; //decimal value is 255
let hex1 = 0xFF; //decimal value is 255 // case doent't matter

let binary = 0b11111111; //decimal 255
let octal = 0o377; //decimal 255

alert(binary === octal) ; //true

/* 
    Javscript only supports these three basic types in number sytem
    for all others we need to use parseInt()
*/

/* 
    toString(base)  method

    1) Return the string representation of number with given base

    2) base can vary from 2 to 36

    3) Default base value is 10 , which is decimal
*/

let num = 255;
num.toString(16); // ff
num.toString(2); // 11111111

/* 
    common use cases for base

    base 2 => (0 or 1) Mostly to debug binary operation values

    base 16 =>(0 to 9 & A to F) Hex color code and character encoding

    base 32 =>(0 to 9 & A to Z) by using this base 32 we can turn larger number into short one

    alert(123456..toString(36)); // 2n9c
*/

/* 
    Two dots to call a method

    WE used tow dots to call a method above which is not an error

    if we use one dot js think the next value is decimal so we use another dot 

    to explicitly say js that decimal is over

    alternate to this is we can use brackets (12345).toString()

*/


/* 
    One of the common operations with number is Rounding off

    we have different methods for that

    1) Math.floor => 3.1 ... 3.9 become 3 , -1.1 become 2 
    2) Math.ceil  => 3.1 ... 3.9 becomes 4, -1.1 becomes 1
    3) Math.round => 3.1 become 3 , 3.5 ... 3.9 become 4
    4) Math.trun => Removes decimal part without rounding 3.1 become 3 , -1.1 become 1

        Math.floor	Math.ceil	Math.round	Math.trunc
3.1	        3	        4	        3	        3
3.6	        3	        4	        4	        3       
-1.1	    -2	        -1	        -1	        -1
-1.6	    -2	        -1	        -2	        -1

what if we want to round n-th digit after decimal ?

Two ways to do it

1) multiply and divide

let num = 255.3323;

 Math.floor(num*100)/100  ; Answer 255.33

2) toFixed => round the numbers to n digits and returns string representation of the number

let num = 12.36;

num.toFixed(1); // "12.4" // Note : To fiexed will round the decimal

// If the decimal places is shorter than n in toFixed then zeros are appended

we can convert back to number by Number() or unary plus
*/


/*
    Imprecise calculations

    Inernally javascript use IEEE-754 64bit integer format to store the numbers

    52 bits are used to store the digits and 11 bits are used to store decimal point position and
    1 bit for sign 

 */

alert(1e500); // Infinity => It overflow the 64 bit representation

// Loss of precision

alert(0.1+0.2 === 0.3); //false

/* 
    What ? Why 

    aler(0.1+0.2) => 0.0.30000000000000004 

    OMG => What if we display in an ecommerce application then everything is changed the game


    Why this happens

    In practicallly decimal numbers which are divided by 10 can be easily represented 

    But internally all numbers are stroed as binary 1 and 0 , Binary numbers are precision 

    stored if its a power of 2 , for others its never ending fraction 
    
    same as 1/3 in decimal never endning fraction


    IMPORTANT : THere is no way to store 0.1 or 0.2 excatly in binary system
    example alert( 0.1.toFixed(20) ); // 0.10000000000000000555

    So what would be the best soltion for this problem

    using toFixed prior to adding and rounding off fraction to fixed length


*/

let sum = 0.1 + 0.2;
alert( +sum.toFixed(2) ); // 0.3 

/* 
    Two zeros in javascript 

    0 and -0  are valid in javscript 

    because sign is a seperate bit and can be used to represent the negative seperately
*/

/* 
    Tests: isFinite and isNaN

    1) Infinity , -Infinity is a special numeric value which is greater(less) than anything

    2) NaN represnts an error

    Two useful function avaliable for testing numbers

    isNaN() // convert the argument to number and test for being NaN

    isFinite() // converts the arguments to regular number and return true for regular number

    not for Onfinity,-Infinity,NaN
*/

alert(isNaN('str')); //true
alert(isFinite('0121221')); //true
alert(isFinite(Infinity)); //false
alert(isFinite(Infinity)); //false

alert(NaN === NaN); //false every NaN is unique
// isFinte will be helpful to validate the string to check its a number

/* 
    There is a builtin method in js Object.is

    Mostly compares as === but sutiable for two edge cases

    Object.is(NaN,NaN)  true

    Object.is(0,-0 ) => false 

    SO object.is is like excalty checking the same in value
*/

/* 
    ParseInt and PareFloat

    Number("123px") => Is like strict conversion so it result in NaN
    
    But what  if we need to take to 123 , ie only parse meaningful numbers

    thats where parseInt and parseFloat helps

*/

parseInt("123px"); // 123
parseInt("123.1212px"); // 123
parseFloat("123.12px"); // 123.12
parseFloat("123.12.123"); // 123.12

// parseInt only takes out the valid interger
// parseFloat only take along with fraction


// Sometimes parseInt and parseFloat fails also

parseInt('a123'); //NaN
parseFloat('a123') //NaN

// first alphabet stops the process of parsing


/* 
    we can pass second argument to parseInt() which is radix

    so parseInt() can be useful for parsing hex string also

    parseInt('0xff',16); // hex parsing
    parseInt('ff',16); // hex parsing ,without suffic also works
    alert( parseInt('2n9c', 36) ); // 123456
*/


// Other math functions

// Math.random , Math.max , Math.min ,Math.pow and lot are there





