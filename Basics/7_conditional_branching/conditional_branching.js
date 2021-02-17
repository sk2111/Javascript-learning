/*  
    If statement 

    -> If statement evaluates the expression inside the parenthesis and returns true or false
    -> Else is optional in conditional branching
    -> TO check multiple conditions we can use if elseif .... else
    -> the expression is converted into BOOLEAN 
    -> 0,null,undefiend,'',false,NaN ->falsy
    -> All others become truthy value -> even "0"
*/
const year = 2020
if(year === 2020){
    alert("hai");
}

//conditional ternary operator ?
//sometimes we need to evaluate a expresion and store the result ternary comes in handy for that
// We can use multiple ternary operator as well
const age = 20;
const result = age>18? 'Vote':'Not Vote';