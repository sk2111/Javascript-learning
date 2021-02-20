/* 
    ARROW functions

    There are a much easy and alternate synatx to functions 

    they are arrow function 

    (Note : arrow function vs normal function have this scope changes )

    example 
    
    let sum = (a,b)=>a+b
     
    1) Implicit return -> meaning if its one line it evaluates and automatically return the value

    2) If only one argument paranthesis is optional

       let a = a=>a*2;

    3) If no paramters parathesis is needed
    
       let a = ()=>alert("hai");
*/

// Mutliple line arrow functions

const a = (a,b)=>{
   let sum = a+b;
    return sum; // explicit return is required in this case beaucse of multiline
}