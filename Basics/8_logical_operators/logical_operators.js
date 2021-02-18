/* 
    Logical Operators

    &&(AND),||(OR),!(NOT),??(Nullish coalescing)

    //Logical OR operators  ||

    We can use logical operators to check multiple condition in statement

    use case 1:

    if(age > 18 || age <10){
        //Do domething
    }
     
    Truth Table 
    true + true = true
    true + false = true
    false + true = true
    false + false = false

    we can applly OR as a shothand 
    let a = inputVal || 18;
    (Hera input Val is evaluated as boolean and if ite true it is returned or 18 is returned)
    (Old js code use this technique a lot)
    (But it wont work for inputVal = 0 , becasue it is converted as boolean false)

*/

let value1 = false;
let value2 = 0;
let value3 = 3;

const result = value1 || value2 || value3;

//OR Finds thte first truthy value and return that value without any conversion
//If value1 is true then it wont evaluate value2 and value 3
// If all values are false it return the last one

alert(1 || 0) // 1   
alert(null || 1) // 1 
alert(null || 0 || 1) // 1 
alert(undefined || null || 0) // 0  (No truthy values foudn so return last) 


/*
    similar to OR | AND operators has it won behavious

    1) AND return first falsy value
    2) Once false value is found it wont execute code after that
    3) If all values are true it return last value

    Truth table

    true + true = true
    true + false = false
    false + true = false
    false + false = false

    if( 1 && 2){
        alert("hai") // will display hai
    }

*/

const result1 = value1 && value2 && value3;  // false (return first falsy value)

// NOT OPERATOR  !

// Not operator inverses the value to a boolean and return boolean

alert(!null) // true (false -> true)
alert(!1) // true
alert(!false) // true

// sometimes there is shorthand way to convert a value to BOOLEAN

// !! double bang

alert(!!null); //false === alert(Boolean(null))

// IMPORTANT : Precedece of AND is greater than OR
// IMPORTANT : Precedece of NOT is greater than AND and OR


/* 
    NULLISH COALESCING

    THis is a recent addition to the language . Old browser may need polyfills

    ?? operator

    ?? operator return the first defined value
    defined -> meaning if the value is not null or undefined the it is defined

    use case 

    let height = input ?? 10;
    // if input is null or undefined then return 10

    let height = (input !== null && input !== undefined)?input:10;
    
    Its just a  syntax sugar for above case

    Does || and ?? work same ?

    No , || checks for first truthy value 

    it cannot distibguish 0,"",null,undefined,false

    But ?? work for defined value

    it only checks for null or undefined

*/
let height = 0;

alert(height || 100); // 100 (0 is falsy so output is 100)
alert(height ?? 100); // 0 (0 is defined)
