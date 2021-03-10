/* 
    WeakMap and WeakSet

    Whenever the objects reference is removed and object becomes unreachabel it will be
    garbage collected

*/

let test = { name: 'hai' };

test = null;

// the object will be garbage collected

/* 
    There are certain cases that javascript dont garbage collect few things
    
*/

let arr = [test];

test = null;

// even though test is null arr[0] hold the reference so it is not garbage collected


/* 
    Like above case if we use object as key for Map then it will not be garbage collected
*/

let test = { name: 'john' };

let map = new Map();

map.set(test, 1);

test = null;

// the obejct still lives in memory and it can be collectes using Map.keys()

// Weak Map is different in this aspect it doent prevent grabage collection of key objects

/* 
    Weak map vs map

    => The first difference is weakmap allow us to use only objects as keys

    => if primitive is used in weakmap then it will be an error

*/

let weakMap = new WeakMap();
let user = {};
weakMap.set(user, 'hai');
weakMap.set(1, 'hai'); // error because weakmap only allow objects


/* 
    In the above example if we remove user object from memeory
    then it is allowed to garbage collect that particular object
    
    => It will be removed from weakmap also
*/

user = null;

// weakmap is also cleared 

/* 
    Since to obatin this feature in weakMap
    It doesn't allow keys(),values(),entries()

    weakMap has only following methods

    weakMap.set()
    weakMap.get()
    weakMap.has()
    weakMap.delete()


    Why size is not there ?

    Technically we cant predict when javascript garbage collection occurs
    => So we may not know what is the proper size

*/

/* 
    use case of weakMap

    => lets say when we need to work with some third party object
    and store some data on top of it 
    => If we need to remove the stored data after that object becomes null
    => we need to do it manually

    => We can use weakMap at that place since it will be automatically cleaned up

*/

weakMap.set(thirdPartyObj, "store data on top of it ");


/* 
    Another use case is we need to keep the count for user visiting 


    => If we use regualer map then we need to clean manually after user leaves

*/

let userMap = new Map();

const counter = (user) => {
    let count = userMap.get(user) ?? 0;
    userMap.set(user, count + 1);
}

let john = { name: 'john' };
counter(john);
john = null;

// map holds the count still even though object refrence becomes null

// we can avoid manual clean up when we use weakMap
let userMap = new WeakMap();

const counter = (user) => {
    let count = userMap.get(user) ?? 0;
    userMap.set(user, count + 1);
}

let john = { name: 'john' };
counter(john);
john = null;

// Now if the bj becomes unreachabel then it is cleared from weakmap and avoid manual clean up

/* 
    Use case caching we can use for caching the calculation 

*/

let cache = new Map(); // let cache = new WeakMap()

const storeCache = (obj) => {
    if(!cache.has(obj)){
        cache.set(obj,'do some complex calc and store')
    }
    return cache.get(obj);
};


let john = {test:123};

let result1 = storeCache(john);// first time cached
let result2 = storeCache(john); // second time return cahced value

john = null;
// The above soltion works fine but we need to clean up memeory
// here if obj becomes unreachable then cache still remembers the obj 
// manual clean up is needed


//if we use weakMap in above case then manually clean up is not necessary


/* 
    WeakSet

    => similiar to above weakmap it only allow to store objects in it
    => if stored object becomes unreachabel it is removed from set
    => it dont have any iteration methods in it
    => methods are add,has,delete, (no size,no keys)
    
    WE cant iterate over weakmap or weakset becuase it dont suppoert any iertaion protocols
    or oteration possiblities

*/

let visited = new WeakSet();

let john = {name:'john'};
let pete = {name:'Pete'};
let mary = {name:'mary'};

visited.add(john);
visited.add(pete);
visited.add(mary);

john = null;

// then the weakset will remove from it