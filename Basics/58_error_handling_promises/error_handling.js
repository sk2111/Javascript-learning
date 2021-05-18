/* 
    Promise are good at error handling , When apromise got rejected it moves into
    closet rejection handler

    consider a case when we use fetch and something goes wrong , then the catch block executes
    and catch the errror

    We can also add .catch to chained .then promises so in this case if anything goes wrong in
    the any then chain it will go into catch  
*/


fetch('unknown-site')
    .then((res) => res.json())
    .catch(err => console.log(err))

fetch('unknown-site')
    .then((res) => res.json())
    .then((res) => 1)
    .then((res) => 2)
    .catch(err => console.log(err))


/* 
    Implicit try...catch
    
    The code of a promise executor and promise has an  invisible try...catch around it . If an
    exception happens it gets caught and treaed as rejection
*/

new Promise((resolve, reject) => {
    throw new Error('Whooops!');
}).catch(alert); //Whoops!

//The above is equal to 
new Promise((resolve, reject) => {
    reject('Whooops!');
}).catch(alert); //Whoops!


// So not only in executor but also any of the handler promise has impicit try/catch block

new Promise((resolve, reject) => {
    resolve('done')
}).then(() => {
    throw new Error("Helllo") // Error thrown so implicit try catch make promise as rejected
}).catch((e) => alert(e));

// The above try catch rule applies for programmer error also
new Promise((resolve, reject) => {
    resolve("ok");
}).then((result) => {
    blabla(); // no such function
}).catch(alert); // ReferenceError: blabla is not defined


/* 
    Rethrowing 

    We already saw we can have as many .then handlers and at last can have a catch block 
    to catch all errors

    But what if we want to handle the error and execute some code as a fallaback

    Or what if we couldn't handle the again and not execute some code 

*/


new Promise((resolve, reject) => {
    resolve("Helllo");
})
    .then(() => 1)
    .then(() => { throw new Error("hello") })
    .catch(() => {
        console.log("Handled the error properly")
    })
    .then(() => console.log("since above error is handled I runs properly"))

new Promise((resolve, reject) => {
    resolve("Helllo");
})
    .then(() => 1)
    .then(() => { throw new Error("hello") })
    .catch((err) => {
        if (err instanceof URIError) {
            console.log("Handled the error properly")
        }
        else {
            throw new Error();
        }
    })
    .then(() => console.log("since above error is not handled I may or may not run properly"));


/* 
    unhandled rejections

    In case of an error , the promise becomes rejected and the execution should jump into
    the closest rejection handler

    What happens when a regular error occurs and is not caught by try...catch ? the script will die
    with a message in the console 

*/


new Promise(function () {
    noSuchFunction(); // Error here (no such function)
})
    .then(() => {
        // successful promise handlers, one or more
    }); // without .catch at the end!


// We can have global unhandeled rejection to catch all such errors
window.addEventListener('unhandledrejection', function (event) {
    // the event object has two special properties:
    alert(event.promise); // [object Promise] - the promise that generated the error
    alert(event.reason); // Error: Whoops! - the unhandled error object
});

new Promise(function () {
    throw new Error("Whoops!");
}); // no catch to handle the error