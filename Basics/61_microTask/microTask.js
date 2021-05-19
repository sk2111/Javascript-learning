/* 
    Promise .then,.catch,.finally always runs in a microTask queue 

    But the promise executor runs in synchrnous way in order there is no magic there
*/

console.log("I am first");  //run1 
const promise = new Promise((resolve, reject) => {
    console.log("I am executor"); // run 2
    resolve();
})
console.log("I am second");// run 3 

// In above code all runs in order 

console.log("I am first");  //run1 
const promise = new Promise((resolve, reject) => {
    console.log("I am executor"); // run 2
    resolve(); // Even though we resolve immediately it run
});

promise.then(() => console.log("Helllo")); // runs last
console.log("I am second");// run 3 


/* 
    The reason why it runs late is even though the promise is immediately resolved

    The handler functons are pushed into microTask queue where they wait until the javascript 

    executes the current code and completes

    Once the javacript is free it will run the MicroTask handlers one by one in an FIFO order

    The microTask queue is also called as Promise Jobs
    The queue is first-in-first-out: tasks enqueued first are run first.
    Execution of a task is initiated only when nothing else is running.
*/


//Unhandled rejection 
//If all methods are async then how .catch is doing its job?
//An “unhandled rejection” occurs 
//when a promise error is not handled at the end of the microtask queue.

let promise = Promise.reject(new Error("Promise Failed!"));
promise.catch(err => alert('caught'));

// doesn't run: error handled
window.addEventListener('unhandledrejection', event => alert(event.reason));

//Below we forgot to add .catch then , 
//So after the microtask queue is empty , the engine triggers the event
let promise = Promise.reject(new Error("Promise Failed!"));

// Promise Failed!
window.addEventListener('unhandledrejection', event => alert(event.reason));

