/* 
    Async/Await

    Theres a special syntax to work with promises in a more comfortable fashion,
    called "asyn/await"


    Async functions

    => async keyword is added before to function 
    => The return value of a async function is always a Promise
    => Whatever inside the async function will be wrapped inside a 
       resolved promise automatically
*/


async function f() {
    return 1;
}

f().then((val) => console.log(val)); // 1

// we could explicitly do the same by returning Promise
async function f() {
    return Promise.resolve(1);
}

f().then(alert); // 1

/*  

    Await 

    => Await only works in javascript async functions
    => It helps to write promise based code more flat way
    => It will start to look like synchronous code
    => when await got a promise it suspends the current executing function
    => It waits for promise to settle and after that ir resumes the execution

*/

async function a() {
    let value = await promise;
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000)
    });

    let result = await promise; // wait until the promise resolves (*)

    alert(result); // "done!"
}


/* 
    async method can be also used in class

    To declare an async class method, just prepend it with async
*/

class Waiter {
    async wait() {
        return await Promise.resolve(1);
    }
}

new Waiter().wait().then(alert)

/* 
    Error handling in promises

    If a Promise resolves normally,then await promise returns the result.
    But incase of rejection it throws an error , just as if there were a throw statement at 
    that line
*/

async function f() {
    await Promise.reject(new Error("Whoops!"));
}

// In above code when error occurs it will be equivalent to below code
async function f() {
    throw new Error("whoops!");
}


// So a general practice will be to wrap it with try...catch block


async function f() {
    try {
        let test = Promise.reject(new Error("Whoops"));
        let json = test.json(); // this line wont execute when there is an error
    }
    catch (e) {
        console.log("Error occured", e);
    }
}

//another way
f().catch(alert);

//If above two types are missing then there will be an unhandled rejection


// wait for the array of results
let results = await Promise.all([
    fetch(url1),
    fetch(url2),
  ]);
