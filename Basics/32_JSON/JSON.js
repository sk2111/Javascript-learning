/* 
    JSON

    Often we need to print certain properties of object as strings
    send over network or just output for logging purpose

    => One solution is to use toString method 

    => Or we could use JSON stringify method avaliable in javascript
*/

/* 
    JSON.stringify

    Javascript Object notation is a general format to represent values and objects

    => Initially it was designed for Javascript and many language have librarires to work with JSON

    JSON.stringify() => Take an JS obj and convert to JSON string

    JSON.parse() => Take JSON string and convert back to javascript Object

*/


let student = {
    name: "sathish",
    class: 12,
    isPassed: true,
    subject: ['Math', 'sciene'],
    arrear: null
}


JSON.stringify(student);
/* JSON-encoded object:
{
    "name":"sathish",
    "class": 12,
    "isPassed": true,
    "subject": ["Math", "sciene"],
}
*/


/* 
    Some Gotcha between JS object and JSON

    => strings use double quotes always no single or backticks
    => Object property name also surronded by double quotes

    JSON stringify support following primitives

    => null,
    => numbers
    => boolean,
    => string,

    Supports following non primitives
    => array
    => object

    JSON stringify ignores
    => functions
    => symbol keys
    => properties that store undefined

IMPORTANT There must be no circular dependencies in Object
*/
let user = {
    sayHi() { // ignored
        alert("Hello");
    },
    [Symbol("id")]: 123, // ignored
    something: undefined // ignored
};

alert(JSON.stringify(user)); // {} (empty object)


// JSON.strinfigy(value[,replacer,space]);

/* 
  value 
    => value to be encoded
  replacer
    => array of properties to encode or a mapping function function(key,value) 
  space
    => Amount of space used for formating

*/

// if we pass only array of properties only those will be encoded


let user = {
    name: 'sathish',
    age: 21
}

JSON.stringify(user, ['name']);// {"name":"sathish"}


// we can also use a replacer function instead of passing array of properties which gives us more control


JSON.stringify(user, function (key, value) {
    console.log(key, value);
    return value;
})


// The above function will be called with all key and value even nested ones also for more control

// If the return value is undefined then the property will be ignored or it will be there



/* 
    Formating space

    =>The last argument is used to format the JSON object for nice output
    => space tells how to indent the object
    => suppose space is 2 then properties are placed in new line and 2 space are used for intent
*/
let user = {
    name: "John",
    age: 25,
    roles: {
        isAdmin: false,
        isEditor: true
    }
};

alert(JSON.stringify(user, null, 2));
/* two-space indents:
{
"name": "John",
"age": 25,
"roles": {
  "isAdmin": false,
  "isEditor": true
}
}
*/

/* for JSON.stringify(user, null, 4) the result would be more indented:
{
    "name": "John",
    "age": 25,
    "roles": {
        "isAdmin": false,
        "isEditor": true
    }
}
*/


// WE can also use toJSON method in our object 

/* 
    JSON.stringify calls toJSON explicitly for the process if available
*/

let date = {
    time: new Date()
}

JSON.stringify(date);
//{"time":"2020-10-01T00:00:00.000Z"}

// Here date objecte has inbuilt toJSON method in it


let test = {
    number: 23,
    toJSON() {
        return this.number;
    }
}

let meetup = {
    title: "conference",
    room
}

JSON.stringify(test); // 23

JSON.stringify(meetup); // {"titile":"conference",room:23}



/*
    JSON.parse(str[,reviver])

    => we can use JSON.parse() to decode a JSON string

    reviver 

      => function(key,value) that will be called for each key,value

*/

let a = "[0]"
JSON.parse(a);// [0]


// reviver will be helpful to add more functionality

let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

// Imagine we received above string from server we need to access data.getDay()
// it will be an error because date is an sting now


JSON.parse(str, (key, value) => {
    if (key === 'date') {
        return new Date(value);
    }
    return value;
})

// Its is possible to add such flexiblity in parsing object occurding to our needs
// reviver will be called for nested objects as well
