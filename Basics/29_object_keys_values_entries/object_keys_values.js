/* 
    Object keys,values,entries

    => Lets step away from individual data structure and see iteration over them
    => In javascript its common agreement to implement keys() , values(),entries()
       for all the data structures
    => So map,set,array have these methods

    => Objects also have them but the syntax is bit different
*/

// Object methods

let user = { name: 'sathish', age: '25' };

// Note : Object methods return array not iterable
Object.keys(user); // [name,age]
Object.values(user);//[sathish,25]
Object.entries(user);//[[name,sathish],[age,25]]

/* 
                       Map                 Object
call syntax        map.keys()          Object.keys(obj)
returns              iterable               "real" array

    why we need to call Object.keys ? because there might be high chance we can have our
    method named keys in our own object so to allow that flexiblity 

    Note : Symbolic properties are ignored by object methods
    => To retrive symbolic properties we can use Object.getOwnPropertySymbols
    which returns an array of only symbolic keys
    => Reflect.ownKeys(obj) that returns all keys
*/

// Transforming objects

/* 
    Objects lack many methods taht exist for array like map,filter

    => If we need such operation then we need to convert obj into array first
         Object.entries()
    => then we can use map,filter etc
    => Next we need to use Object.fromEntries() to convert back to object

*/

let prices = {
    orange: 4,
    meat: 5
}

const doublePrices = (obj) => {
    return Object.fromEntries(Object.from(obj).map(([key, value]) => [key, value * 2]))
}

prices = doublePrices(prices); // {orange:8,meat:10}
