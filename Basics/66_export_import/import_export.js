/* 
    Export and Import

    => There are few different varieties available for export and import 
    => Export variants => we can export class,function,variables etc
*/

//exmaple.js 
export let helllo = 'tests';
export const HELLO_ALL = 'dsdkd';
export function hello() {

}
export class Meow { }

// we can append export infront of these is one way 
// or we can export them at the end like

export { helllo, HELLO_ALL, hello, Meow };

/* 
    Import ways
*/

import { hello } from './example.js'
//specify what exactly to import within curly braces
// But if the import list is very long we can import all as one object

import * as module from './example.js';

module.hello(); // works the same 

/* 
    => Eventhough importing all looks easy it can be avaoided for few reasons
    => Build tools will usually see what packages are imported {} when we use {}
       and it can do tree shaking to remove unused dependencies
       Thus helps to minize dependencies bundle
    => It increase more readablity
    => It helps to refactor easily 
*/

//aliasing import

import { helllo as greet } from './say.js';

// alisaing export

export { hello as meow }; // export alias is also possible

//default exports

/* 
    There are two types of export default export and named export

    => Named export we saw earlier
    => Default export is starts with export default
    => A module can have only one default export
*/
//example.js
export default [1, 2, 4];
//sample.js
export default class User { }

//For export default names are optional since module only contain one export

// while importing them we dont want to use {}

import User from './sample.js';
/* 
    Ist good practice to make a module with default or named export
    Not to mix and match both although it is technically possible
*/
/* 
    The default keyword

*/


function test() {

}

export { test as default }; // exporting default at the end is also possible


// import default export along with named export

import { default as User, sayHi } from './sample.js';

// when we use * it will go inside default property

import * as module from './sample.js';
module.default; //contains the default export 


/* 
    Re-export

    sometimes we may work on some package modules and we like to publish our package

    if we have lot of helper files and other module in our file
    we dont want the user to go into our folder structure and search what to import

    often we need to provide them a single entry point we thery can import all of our module

    Re-export is a nice way to achieve that
*/

//example.js
export function hello() {

}
//util.js
export function login() { }
export function logout() { }
//say we have two file and we need to export them in single entry file

//lets create a entry.js file
import { hello } from 'example.js';
export { hello };

import { login, logout } from 'util.js';
export { login, logout };

//This is one way of re-export all modules user needed

//There is another shorter syntax export ... from 

export { hello } from 'example.js';
export { login, logout } from 'util.js';
export { default as User } from './user.js';
/*
    In export ... from syntax it is not possible to access the exported modules in that file
    because we are just use them to export only
*/

/* 
    Re-exporting default values
    
*/

//lets say we need to reexport default export 
export default class User {
    // ...
}

// the belo export wont work
export User from './users.js'; // syntax error

export * from './users.js'; // will work but ignore default export

//ideal way
export * from './user.js'; // to re-export named exports
export { default } from './user.js'; // to re-export the default export


/* 
    The above mentioned types dont work for conditional imports

    like if we mentioned inside curly braces

    if(someCOnditon){
        import {hai} from 'hello'; //will fail
    }
*/