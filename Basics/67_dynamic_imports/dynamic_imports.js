/* 
    Dynamic imports

    The module system we saw import {} from './path' is static and it cannot be used inside
    conditional etc

    for example 

    if(somecondition){
        import {} from '.path.js' wont work 
    }

    But what if we need to import some modules dynamically how we can achieve that ?

    import() module expression comes into rescue

    import() modules returns a promise to which we can append then and catch 


*/

//say.js

export function hi() {

}

export function bye() {

}


//The dynamic import will be like

let { hi, bye } = await import('./say.js'); //use inside async function

//Promise based syntax
import('./say.js').then((obj) => console.log("test module", obj)).catch(err => console.log(err));

//Default export can be in

let obj = await import('./say.js');
let say = obj.default;


//Import note

// Dynamic imports work in regular scripts , they dont require type="module"

// Although import looks like function call, its special syntax that is simila rto super()
//We should not assign to variable and reusable or dont want to bind to call,apply



