/* 
    OBJECTS : VALUE BY REFERENCE

    1) one of the important characteristics of objects when compared to primitive is it is called by reference

    For eg primitives are copied by value

    let a = 'hai';
    let b = a;

    Both a and b have seperate memory ie values are copied
    
    But when we declare an object usualyy it reference copied to variable 

    let obj = {
        1:'hai'
    }

    let obj2 = obj;

    Now both obj2 and obj are representing the same location in memory

*/

//proof
let obj = {
    1:'hai'
}

let obj2 = obj;

obj2[1] = 'hello';
alert(obj[1]); // hello (DUE TO REFERENCE BOUND)

/* 
    Comparison in object happens by reference

    let obj1 = {};
    let obj2 = {};

    if(obj1 === obj2) => false , Although both look same in structure they are different reference in memeory

    let obj1 ={};
    let obj2 = obj1;

    if(obj1 === obj2) => yes both are correct



*/

// cloing objects

// we can use shallow copy or deep copy to clone object by value

let a = {
    user:'heai'
}

let b = {...user}; // shallow copy spread syntax

let c = Object.assign({},b); // shallow copy traditional syntax

/* 
    Points to note both are fine for copying primitive 

    for nested objects aagain the reference problem will occur

    SO we need to implement deep cloning algo or use third party lib for deep cloning
*/

let a ={
    user:{
        name:'hai'
    }
}

let b = Object.assign({},a); // 

if(b.user === a.user){
    alert(true); // Because we only did shallow copy not deep copy
}