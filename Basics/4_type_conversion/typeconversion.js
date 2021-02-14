// Most of the time operators and functions convert the values given to them to right type

//String conversion

let a = true;//boolean
let str = String(a); // string = "true"
//Note : false becomes "false" ,null becomes "null"


//Numeric conversion

// Numeric conversion happens in mathematical functions and expressions automatically

//For example when division / is applied to non numbers

alert("6"/"2") //=>automatic type conversion to numbers and output is 3

// If the str is not valid the result of such a conversion is NaN

alert("hai"/"2"); // NaN
/*
    null ----> 0
    undefined ----> NaN
    true,false ------> 1,0
    stringg -------> whitespace from both ends will be removed and converted to Number 
    (If empty string it will be zero,Not a valid number string i will be NaN)
*/

//Boolean conversion
//Occurs in logical operations or can be perfomred with Boolean()

/*
    Rules 
    0,null,undefined,NaN,""                =    false
    any other value (even =>"0")           =  true (All non emepty strings become true)
*/