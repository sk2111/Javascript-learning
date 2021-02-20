/* 
    Functions: Functions helps to keep the code together so that we can avoid repation
    and call as many times we needed

    Function Declaration

    function functionName ([paramaters]){
        function body
    }

    parameters are comma seperated 

*/

//local varaibles

function a(){
    let user = 'hai';
    console.log(user);
}
console.log(user) // error
//here the user varaible is only visible inside the function



// Outer variables or global varibales

let hello = 'hello';

function a(){
    let user = 'hai';
    console.log(hello+''+user);
}

//Here the function has full access to the oueter variable and it can even modify it 

let hello = 'hello';

function a(){
    let user = 'hai';
    hello = 'welcome'; // assigning value to outer variable
    console.log(hello+''+user);
}

console.log(hello); //hello
a();
console.log(hello); // welcome

// IMPORTANT : the outer varibale is used if there is no such local varibale declared inside function

// If local varibale is declared it shadow the outer variable

let hello = 'hello';

function a(){
    let user = 'hai';
    let hello = 'welcome'; // decalring local variable
    console.log(hello+''+user);
}

console.log(hello); //hello
a();
console.log(hello); //hello


//paramaters

// we can pass any values to the function via arguments or so called paramaters

function a(greet,msg){
    greet = 'hai'; // P1
    console.log(greet,msg);
}

let user = 'manu';
let greet = 'hello'
a(greet,manu);
console.log(greet); //hello;
/* 
    Here the values greet,msg are local variables to function
    and values are copied to those during function call

    P1 -> Even though the greet is changed it doesn't reflect outside beacuse 
    greet is local to that function
*/

//DEFAULT paramters

//If a value is not provided the paramter become undefined

function a(greet = "Default welcome"){ // greet becomes undefined and so that default welome is assigned
    console.log(greet);
}

a(); // calling without paramters

// Its is also possible to give more complex evaluation as default argument

function a(greet = getMyGreet()){
    console.log(greet) ; // here whenever greet becomes undefined it calls getMyGreet()
}

// ALTERANTE to default parameters

function a(greet){
    //1 way
    if(greet === undefined){
        // do something
    }
    //2 way
    greet = greet || 'hai';
    //3way
    greet = greet ?? 'hello' ; //nullish coealesing is better than || beaucse it checks for defined value
}

// Return from function

function sum(a,b){
    return a+b;
}

let result = sum(2,3);console.log(result);

// return can be placed at any point in the function 
// once the function reached return it stop excuting function code and return the value
// if only retutrn ; is used the value will be undefined
// if the function does not use return , calling the function result would give us undefined
//

// Naming the functions

// For example 
/* 
    create -> create a form or so
    show  -> show  somethign to user
    get   -> get a value
    calc  -> calculate something and return value
    check -> check for somethign adn return boolean
*/
