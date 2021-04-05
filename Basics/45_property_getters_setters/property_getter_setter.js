/* 
    There are two kind of object properties

    1) Data properties : Nomral object properties
    2) Accessor properties : Looks like functioonthat execute on getting and setting a value,
    but look like regular properties in external code

*/


/* 
    Getters and setters

    Accessor properties are represented by getter and setter methods . In object literal they are deonted
    by get and set 

*/

let obj = {
    get propName() {
        // code is executed on getting obj.propName
    },
    set propName() {
        // setter , the code executed on setting obj.propName = value
    }
}

// The gtter works whe obj.propName is read , the setter when its assigned


let user = {
    name: 'test',
    lastName: 'hello'
}

// Adding setter and getter suppose for a fullname will look like

let user = {
    name: 'test',
    lastName: 'hello',
    get fullName() {
        return `${this.name} ${this.fullName}`;
    }
}

alert(user.fullName); // Test hello

// From outside we call the accessor property like regular data property ,
// But behind the scenes getter function runs 
// WE only have getter now when we try to set the fullname it will throw an error


user.fullName = "Test"; // Error (property has only a getter)

let user = {
    name: "John",
    surname: "Smith",

    get fullName() {
        return `${this.name} ${this.surname}`;
    },

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    }
};

// set fullName is executed with the given value.
user.fullName = "Alice Cooper";

alert(user.name); // Alice
alert(user.surname); // Cooper


/*
    Accessor descriptors

    Decriptors for accessor properties are different form those for data properties

    Accessor properties dont have value, writable , but instead there are get and set functions

    The accessor descriptor may have

    get – a function without arguments, that works when a property is read,
    set – a function with one argument, that is called when the property is set,
    enumerable – same as for data properties,
    configurable – same as for data properties.

    For instance we can have a accessor property full name  with define property
*/

let user = {
    name: 'john',
    surname: 'smith'
};

Object.defineProperty(user, "fullname", {
    get() {
        return this.name + ' ' + this.surname;
    },
    set(val) {
        [this.name, this.surname] = val.split(' ');
    }
});

alert(user.fullName); // john smith

/* 
    To note a property can have eiter get/set or a data property => not both

    If we try to supply both get and value in the same descriptor there will be an error

*/

// Error: Invalid property descriptor. (cannot have both value and setter/getter)
Object.defineProperty({}, 'prop', {
    get() {
        return 1
    },

    value: 2
});


/* 
    Smart setters/getters

    Getters/setters can be used as wrappers for real property value to gain control over operations
    with them 

    For instance if we need to forbid short names we can use getter and setters
*/


let user = {
    get name() {
        return this._name;
    },
    set name(val) {
        if (value.length < 4) {
            console.log("Name need to be greater than 4 char");
            return;
        }
        this._name = val;
    }
}


user.name = "pete";

alert(user.name);

user.name = ""; // Name is too short 
/*
    Here Technically we can access _name property like user._name , But the comvention of "_" underscore
reminds it like a private property which should be only accessed using set and get and not directly
*/

/* 
    Using for compatiblity

    Let consider we have a user function that takes the name and age
*/

function User(name, age) {
    this.name = name,
        this.age = age;
}

const newUser = new User('test', 21);

console.log(newUser.age); // 21


// But in future for some reasons we need to store the birthday not age ,
// we can replace all age code to work with birthday or we can add a age getter property 
// to keep the compactability
function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;
    Object.defineProperty(this, "age", {
        get() {
            let todayYear = new Date().getFullYear();
            return todayYear - this.birthday.getFullYear();
        }
    });
}

let john = new User("John", new Date(1992, 6, 1));

let john = new User("John", new Date(1992, 6, 1));

alert(john.birthday); // birthday is available
alert(john.age);      // ...as well as the age
