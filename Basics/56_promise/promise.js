/* 
    Promise 

    In javascript promise object helps to link the asynchronous code , for example 

    Making a network request and it will run in background and gives the result

    If we want to consume such results we can use promise at this situation


*/

const promise = new Promise(function (resolve, reject) {
    //producer code 
});

/*
    We can create a new promise by calling Promise constructror

    And it accepets a function as a parameter which gives us two callback functions

    resolve and reject

    Once the producer code executed successfully we need to call resolve(result)

    If something goes wrong then we need to call reject(error) error is error object

    The promise object returned by constructor have these internal properties

    state - initially "pending" , then changes to either "fulfilled" when resolve is called
    "rejected" when reject is called

    result - initially undefined , then changes to "value" when resolve(value) called or 
    "error" when reject(error) is called
*/

const promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve('done'), 1000);
});

/* 
    The above promise will resolve after 1 second so it makes 
    the promise from pending to fullfied state with value done
*/

const promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve('done'), 1000);
});

/* 
    The above promise will resolve after 1 second so it makes 
    the promise from pending to fullfied state with value done
*/

const promise = new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error('whhops')), 1000);
});

/*
    The above promise will rejct after 1 second so it makes
    the promise from pending to rejected state with value of error object
*/

/* A promise that is either resolved or rejected is called "settled", as opposed to initially "pending" promise */

/*
    There can be only a single result or an error

    The executor can call either result or error

    And if once called it is done ,recalling it again is ignored

    And resolve and reject accepts only one argument or none and ignores the rest
*/
let promise = new Promise(function (resolve, reject) {
    resolve("done");

    reject(new Error("…")); // ignored
    setTimeout(() => resolve("…")); // ignored
});

/*
    We need to call reject with always error Object , technically we can use resolve
    but it needs to be avoided
*/
/*
    We can immdeiately call resolve/reject thats not a problem

    the state and result property are internal , we cant directly access then ,
    we need to use methods like .then,.catch,.finally for that
*/

/* 
    consumers 

    Promise object resolve and reject will give result or error which then be used  by consumers
    like .then,.catch,.finally

*/

/* 
    then

    It accepts two arguments result function and error handle function

    The first paramter is called when there is an result

    The second paramter is called when there is an error
*/

promise.then(
    function (result) {
        //handle the successfull result
    },
    function (error) {
        //handle the error
    }
)


let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("done!"), 1000);
});

// resolve runs the first function in .then
promise.then(
    result => alert(result), // shows "done!" after 1 second
    error => alert(error) // doesn't run
);


let promise = new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// reject runs the second function in .then
promise.then(
    result => alert(result), // doesn't run
    error => alert(error) // shows "Error: Whoops!" after 1 second
);


/*
    If we are only instrested in successful completions , then we can provide only one function argument to .then

*/

promise.then(alert);

//catch 
// if we are only insterest in error then we can make null as first argument for then and pass error function alone
// or we can use .catch methos specially avaliable for this

promise.catch(erro => console.log(console.error(erro))); //same as promise.then(null,errorHandler)


/* 
    .finally 

    finally helps to run a piece a code after the promise is settled

    It is a good place to perform clean up thing like stop the loading bar 

    finally transparently passess the result to nex .then method 

    finally has nor arguments of result or error 

    
*/


new Promise((resolve, reject) => {
    /* do something that takes time, and then call resolve/reject */
})
    // runs when the promise is settled, doesn't matter successfully or not
    .finally(() => 'stop loading indicator')
    // so the loading indicator is always stopped before we process the result/error
    .then(result => 'show result', err => 'show error')


new Promise((resolve, reject) => {
    setTimeout(() => resolve("result"), 2000)
})
    .finally(() => alert("Promise ready"))
    .then(result => alert(result)); // <-- .then handles the result

new Promise((resolve, reject) => {
    throw new Error("error");
})
    .finally(() => alert("Promise ready"))
    .catch(err => alert(err));  // <-- .catch handles the error object


/*
    Javascript promise is more than susbcription

    We can attach handlers to setteled promises as well

    Even thought the executor immediatley executes the constructor function 

    and resolves /rejects 

    we can add .the.to that promise object anytime later , so if such promise is
    settled it will run the .then method
*/

// the promise becomes resolved immediately upon creation
let promise = new Promise(resolve => resolve("done!"));

promise.then(alert); // done! (shows up right now)

/*
    This makes promises more powerful than real life "subscription list" scenerio. Because

    subscription needs to be done before the actual event

    But promises are flexible we can add listeners to any time and if the result is ready they
    just execute
*/