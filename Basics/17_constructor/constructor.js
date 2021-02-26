/* 
    Constructor , Operator "new"

    The regular {...} synatx allows us to create one object. But often we need 
    to create many similar objects like multiple users or menu items and so on

    constructor function

    These are regular functions but consturctor function have two conventions
    1) They are named with Uppercase first letter
    2) They should be executed with "new" operator 
*/


function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User('John');

alert(user.name); // John

/* 
    What happens under the hood
    1) When the function is called with new operator
    2) A new object is passed to the value of this
    3) The function body executes usually it will add property to that object
    4) The object is returned
*/
// so whenever invoking something like this happens
function User(name) {
    // this = {}; // implicitly

    this.name = name;
    this.isAdmin = false;

    // return this; // implicitly 
}


/* 
    Having a constructor function helps to create new users easily
    everytime without the need for using object literals everytime

    Techinally any function can be called with new operator but only the usage of this
    inside it matters 
*/

/* 
    Constructor mode test : new.target

    Inside a function , we can check whether it is called with new operator or without it

    using new.target

*/

function User() {
    alert(new.target);// undefined for normal call 
    // equals to the function if called with new: 
}
//without new
User(); // undefined
// with "new":
new User(); // function User{}


/* 
    This new.target can be useful to check whether the function is called with new op or not
    helps to provide dynamic behaviour depending upon called with new or not
    Some libraries take advanteg of it to create easy syntax code

    use case

    function Username(name){
        if(!new.target){
            return new User(name); // i will call new operator for you
        }
        this.name = name;
    }

    let john = User("John");
    alert(john.name);
*/

/* 
    Return in constructor functions

    usally constructors do not have a return statement. They writ all the stuffs into "this"
    and automatically return "this"  as a result

    But what if we use return explicitly ?

    if the explicit return returns a object then that object is used

    if it is a primitive type then it is ignored

*/

function User() {
    this.name = 'hai';
    return { name: 'hello' };
}

const user = new User();
user.name // hello instead of hai

function User() {
    this.name = 'hai';
    return 1;
    //return ; empty return both are same
}

const user = new User();
user.name // hai // primitive return is ignored

/* 
    We can also add methods in the constructor funtion


*/

// Example of methods inside the constructor
function User(name) {
    this.name = name;

    this.sayHi = function () {
        alert("My name is ", this.name);
    }
}

let user = new User("hello");

user.sayHi();