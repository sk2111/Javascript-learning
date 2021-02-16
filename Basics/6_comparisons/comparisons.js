/*
    Javascript comparisons
    gretaer or less than > ,<
    greater or less than equals >= ,<=
    Equlas a == b
    no equal !=

*/

/* 
    Boolean is the result of all comparison operators
    true,false
*/
alert(2 > 1) //true
alert(1 > 1) //false
//comparison can be assigned to variable 
let a = 2>1;
console.log(a); //true

/*
    string comparison 
    1) Javascript comparese string by char by char usig Unicode table as ref
    2) If first char in a string is > first char in b string then a is bigger
    3) If both first char are same then moved to next char
    4) If both string end at the same length thery are equal or else larger one is greater
*/
alert('A'>'a') // false because A = 65 in unicode but a = 97 in unicode

// Comparison of different types

//IMPORTANT : Javascript converts the different types to number and compare

alert('2' >1) ; //convert '2' to number and check to comparison 
alert( '01' == 1 ); // true, string '01' becomes a number 1
alert( true == 1 ); // true (true is converted t number as 1)
alert( false == 0 ); // true (false is converted t number as 0)

//strict equality

/*   
    The regular equality check has a problem . It cannot differentiates false from 0
    Beacuase == converts  both to numbers and check for equality

    To avaoid such type conversion check comparison 
    javascript has === and !==
    Strict equality works like this check for type if bth are different type return false
    else do compariosn
*/

alert(false == 0) ; //true (Type convert to numbers)
alert(false === 0) ; //false (strict equlas check for types first)

// there is also strict inequality and it works the same way

/* 
    Comparison with null and undefined

    Now lets see some different behavious when null and undefined are compared

*/
//For strict equality === 

alert(null === undefined); // false beaucse strict equlaity check for types
alert(null == undefined); // true in non strict mode both are sweet couples
// they are equal to each other but no to any other value

//For math comparison >,<,>=,<=

//null/undefined is converted to 0 and NaN

//strange result

alert(null > 0) ;//false null become 0 
alert(null == 0) ;//false //(special case for equality comparison read below)
alert(null >= 0) ;//true null become 0 

/*
    For the above the reasons why null is false i two case and true in one case is
    1) comparisons like >,< generally convert null to zero
    2) But equality operators treates null and undefined in special way
    3) The rules in double equal == , both null and undefined are equal to each other
    but they are not equal to anything else that why null == 0 become false 
*/

//Now lest see undefined
alert(undefined >0); //false
alert(undefined <0); //fasle
alert(undefined  == 0); // false

// for 1 and 2 undefine dis converted to number as NaN and NaN return false for all numeric
// in 3 only null and undefined are equlas in == and they are not equal to any other value


/*
    common take away
    1) use strict equlity wherever possible
    2)  Dont use >,<,>=,<= with variables which may result in null/undefined
*/