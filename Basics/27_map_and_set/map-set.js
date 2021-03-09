/* 
    Array => used to store ordered collections
    Objects => used to store key value pair (keyed collections)

    We have also map and set in javascript 
*/

/* 
    Map
     => Map is a collection of keyed items just like object 

     => The main difference is it allows Key of any type 

     Note: Objects allow only string and symbol as keys

     => Map also has size property but object dont have them
     
     => Map comes with own iteration protocol but Objects dont have them
    
    Map Methods and properties
     => new Map() - creates the map
     => map.set(key,value) - stores the value by the key
     => map.get(key) - returns the value by the key,undefined if key doesn't exist
     => map.has(key) - returns true if key exists else false
     => map.delete(key) - remove the key by value
     => map.clear() - remove everything from map
     => map.size - returns the current element count
*/


let map = new Map();

map.set(1, 'hai'); // not allows any data type as key
map.set('1', 'helllo');
map.set(true, 'cat');

map.get(1); // hai
map.get('1');// 'helllo'  these are different because map internally stores type

alert(map.size); // 3 



/* 
    IMPORTANT:

    map[key] = 2 => dont do this technically we can but it makes map to 
    behave like object and that is bad 

*/


let john = { name: "johnny bravo" };

map.set(john, 9628);

map.get(john);

// We can use objects as keys in map in normal obj they are converted to strings
/* 
    Key comparison
      => Map uses roughly strict coparison for key check

    Chaining

    since map.set returns this we can chain multiple functions 

    map.set().set()...
*/

/* 
    Iteration over Map 

    => map.keys() returns an iterable for keys
    => map.values() returns an iterable for values
    => map.entries() returns an iterable for entries [key,value]
*/

let recipeMap = new Map([
    ['cucumber', 500],
    ['tomotoes', 5],
    ['onion', 50]
])

for (let key of recipeMap.keys()) {
    alert(key); // cucumber,tomotoes,onion ...
}

for (let value of recipeMap.values()) {
    alert(value); // 500,5,50
}
// same as map.entries
for (let [key, value] of recipeMap) {
    alert(key + value); // cucumber500
}

// map also has forEach for convinence
// Map preserves the insertion order unlike objects (numeric sorted and string in insertion order)


/* 
    creating Map from objects

*/

let obj = {
    name: 'test',
    value: 123
}

let e = obj.entries(); //[['name','test'],['value',123]]

let mapTest = new Map(e);

// creating object from map

let a = Object.fromEntries([
    ['test', '1'],
    ['value', 123]
]);

a;// {test:'1','value':123}

// so we can pass map directly to object from entries and convert it 

let b = Object.fromEntries(myMap); // 
//since obj.entries expect an iterable myMap return an iertable [[],[]] by default 

/* 
    Set 

    => set is a special value of collection - ste of values where each value occurs only once

    Its main methods are

    => new Set(iterable) - creates the set and if an iterable object is provided , copies values fro it

    => set.add(value) - adds a value , returns the value itself
    => set.delete(value) - delete a value , returns the value true if element found & deleted,else false
    => set.has(value) - returns true if the value exists in the set otherwise false
    => set.clear() - removes everything from set
    => set.size - is the elements count 

    set store only unique value that is the highlight

    set can store data of any type 
*/

let john = { name: 'john' };
let pete = { name: 'pete' };
let mary = { name: 'mary' };

set.add(john);
set.add(pete);
set.add(mary);
set.add(mary);
set.add(mary);

alert(set.size); // 3

// stores only unique value

for (let user of set) {
    alert(user.name); // John ,pete,mary
}

// Iteration over set

// set has forEach and for of loops

/* 
    for(let value of set) alert(value);

    set.forEach((value,valueAgain,set)=>{
        alert(value);
    });

    // set also has 

    set.keys() => retruns iterable of values
    set.values() => same as above kept for compactablity
    set.entries() => return [value,value] also kept for compactability
*/