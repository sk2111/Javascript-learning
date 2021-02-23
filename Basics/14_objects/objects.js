/* 
    Objects

    1) Objects are used to store complex data types
    2) Its is different from other primitive data types
    3) Primitive can store one data type at a time but objects can store different data types
    4) Object sotre the value as  key:value pair
    5) properties is common name used to specify particular value in object (keys are properties)
    6) Keys are converted to string and stored in object
    7) Properities name cna be symbol as well
    
    Objects is created using two types of suntax
    1) let obj = {} object  //literal notation
    2) let obj = new Object() // constructor notation

*/

// simple example

let user = {
    name: 'sathish',
    age: 25
}

/* 
    The above object has two properties name and age (keys also called)

*/

console.log(user.name) // to get a property value
console.log(user.age) // to get a property value

user.isAdmin = true; //adding new property to exisiting objecte

delete user.isAdmin;   // deleting a object property

// Multi word property names
let user1 = {
    name: 'sathish',
    age: 25,
    "is admin": true,
}
/* 
    why given inside quotes ?
    Beacause javascript convertes the name into string for keys
    so its not needed to continuos character but for space seperated we needed one
    Note: last property can end with comma as it makes all lines end with comma makes it easier to include,delete
*/

/* 
    SQUARE BRACKETS

    It will not be possible to read "is admin" with . notation

    user1.is admin -> will result in error(Because javascript wont understand space between name and throw error)

    For dot notation to work it need to be a valid variable name
      -> no space,no num first,only incudes $,_ as special char,any letters

    So square brackets come for rescue
*/

console.log(user1["is admin"]); // This works perfor

// square brackets compute the value inside it and return the result 

const key = "is admin";

console.log(user1[key]); // true 

// This type of dynamic behaviour helps in great deal of flexiblity
// we can get the key from user in run time as well

// Note : dot notation do not do this computaion

console.log(user1.key); // undefined because it search for property name key in user1

/* 
    COMPUTED properties

    we can use square brackets in object literal while creating an object.

    This is called as computed properties

*/



let fruit = prompt("Which fruit to want to buy")

let obj = {
    [fruit]: 6
}

console.log(obj[fruit]);

// square brackets evalautes the expression and return the final value

let fruit = prompt("Which fruit to want to buy")

let obj = {
    [fruit + 'blabla']: 6
}

console.log(obj[fruit + 'blabla']);


// property value shorthand

function user(name, value) {
    return {
        name: name,
        value: value,
    }
}

let user = user('1', 20);

// the above user function can be written using property shorthand


function user(name, value) {
    return {
        name,  // Implicitly it means name:name
        value, // Implicitly it means value:value
    }
}

/* 
    property name limitation

    1) THere is no restriction in naming objects
    2) We can user reserved keys like for,let as object properties
    3) Properties are converted to string 
*/

let test = {
    for: 1,
    let: 3,
    0: 5
}

alert(test.for) // works fine 1
alert(test.let) // works fine 3
//alert(test.0) // error numeric value start is not a valid name for dot notation
alert(test[0]) // 5
alert(test["0"]) // 5 because interanlly 0 is converted to string

/* 
    Property name existence

    // when we try to read an property that not exists we get undefined as result
*/

let user3 = {};
user3.isSomething // result in undefined

// Mostly we can use this for testing purpose in code
// But there might be gotcha as well
// what if isSomething is actually undefined in value

let user3 = { isSomething: undefined }

// in opertor for rescuse

alert("isSomething" in user3) // false 

const userKey = "isSomething";

alert(userKey in user3); // true or false returns [userkey is computed for value]


// For in looop

// To loop over object we have special variable called for in loop

for (let prop in object) {
    //alert(Object[prop])
}

// IMPORTANT Topic 

/* 
    Are objects keys are ordered 
    -> the answer is yes but in a special way

    -> Interger keys are order in ascending way

    what is a integer key ?

    An interger is something when we converted to string and to number rsult in same values

    Eg : 1 ,2 ,3

    But +1,2.5 are not integers when converted it becomes(1,2)

*/

let codes = {
    5: 'hai',
    1: 'hello',
}
//integer keys sorted in ascending 
for (let code in codes) {
    console.log(code) // key-1,key-5 
}

// For non intergers the objects mainatain insertion order
let user = {
    name: "John",
    surname: "Smith"
};
user.age = 25; // add one more

// non-integer properties are listed in the creation order
for (let prop in user) {
    alert(prop); // name, surname, age
}

// so to fix the code issue in above case we can cheat like


let codes = {
    "+5": 'hai',  //  other than interger so it mainatains insertion order
    "+1": 'hello',
}

for (let code in codes) {
    console.log(+code) // 5,1  // maitains order workaround
}