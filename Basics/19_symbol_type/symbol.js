/* 
    By Javascript specification bject propertie can be only string or symbol

    Symbol

    *) Symbols are unique identifiers

*/

let id = Symbol(); //(Symbol() is used to create a symbol)

//while cretaing a symbol we can give description for debug purpose also

let id1 = Symbol('id1');
let id2 = Symbol('id1');

// Even though two symbols are created with same description they are not equal

alert(id1 == id2); //false


/* 
    Type conversion to string

    Almost all values in javascript convert to string type based on need

    But Symbol values dont auto convert and throws an error

    why ???

    Beacause symbol and string need to be seperate to avoid confusion and messing up and hence
    auto convert of symbol not allowed in the js language

*/

alert(id); // throws an error because alert normally converts to string
// TypeError: Cannot convert a Symbol value to a string

/* 
    IS there a way t convert symbol to string ?

    Yes we can explicity use toString method on symbol
    
    or we can use description property
*/

alert(id2.toString); //Symbol(id2); it works now

alert(id2.description); // id


/* 
    HIDDEN PROPERTIES

    1) Symbols allow us to create hidden properties in objects

    lets assume a scenerio where an object comes from thirty party module
and if we need to add a property to it for some reasone then if we use a string property there

are high chances that the property may already exist and we cna accidentally override
and also what if need to create hidden object property on thired party library?


Answer : We can use symbol property in that case ; Because symbols are always unique

and are hidden from normal Object methods 

*/


let user ={
    name:"jahn"
};

let id = Symbol('id');

user[id] = '123';

console.log(user[id]);


// symbols in object literal syntax

let a = {
    name:'hai',
    [id]:'123'
}

// if we dont use quare brckets "id" treated as a key here 

/* 
    Symbol property are skipped in for in loop

*/

for(let prop in a){
    console.log(prop);//only name will come
}

// Object.keys() also ignore them


/* 
    But Object.assign() will copy both property and symbols

    (it makes sense if we want to cretae new copy we may need symbols as well bu from iteration
    we want to hide it)
*/

/* 
    GLOBAL SYMBOLS

    sometimes we need to create a symbol and use it application wide
    
    we want a symbol "id" to access same property from wherever we call in code

    TO achieve this there  is a global symbol registry

    Symbol.for(key)
*/

// Hey i need a symbol from global registery of label "id"
// there is no such no , js create new one and return it
let id = Symbol.for('id');
// when accessing again js know it already exits so it return the same value
let test = Symbol.for('id');

alert(id == test); //true

// Symbol.keyFor

/* 
    when we wan tto retrive the symbol name we can use
    Symbol.keyFor
*/

let name1 = Symbol.for('name');

alert(Symbol.keyFor(name1)); // name will be printed
alert(Symbol.keyFor(test)); // id will be printed
/* 
    This type of Symbol for only works for global symbols
    If we try to use the same method in local symbol it return undefined


    Note : All symbols have description poperty to it

*/


/* 
    There are many system symbols which javascript uses internally 

    we can fine tune for our purpose as well

    some example are
     
    Symbol.hasInstance
    Symbol.isConcatSpreadable
    Symbol.iterator
    Symbol.toPrimitive
     
    For instance Symbo.toPrimitive allows us to describe what happens when object to primitive conversion happens

    Techincally Symbols are not 100% hidden we can use Object.getOwnPropertySymbols(obj)
    allows us to get all symbols
*/


