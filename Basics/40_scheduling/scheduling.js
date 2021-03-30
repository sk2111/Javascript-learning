/* 
    Scheduling : SetTImeout and setInterval

    Sometimes we need to execute a function at a certain point of time in future

    This is called scheduling a call


    There are two methods available

    1) setTimeout
    2) setInterval

    These are not a specification of javascript but most environments hava the internal scheduler
    and provide these methods (supported in both Node js and broswer)

*/


//setTimeout(func|code,timeout,arg1,arg2...)

setTimeout(function () {
    //do something
}, 1000);


function hello(hai) {
    alert(hai);
}


setTimeout(hello, 1000, 'sathish');// passing arguments

/*
    We can also pass a string to setTimeout function or a function

    Timeout is in ms 1000ms = 1second
*/


//canceling with clear timeout
/*
    A call to setTimeout returns a timerId that we can use to cancel the execution
    
    let timerId = setTimeout(...);
    clearTimeout(timerId);
*/

let timerId = setTimeout(() => alert("never happens"), 1000);
alert(timerId); // timer identifier

clearTimeout(timerId);
alert(timerId); // same identifier (doesn't become null after canceling)

/* 
    In broswer the timer ID is an number but it can be different for different environment 

    For example in node js the timeId is an object  
*/

/* 
    setInterval(func|code,time,arg1,agr2..)
    
    setInterval has the same syntax as setTimeout but

    it runs the function periodically at the given interval of time 

    We can use clear interval to cancel when not needed 
*/

// repeat with the interval of 2 seconds
let timerId = setInterval(() => alert('tick'), 2000);

// after 5 seconds stop
setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);


/* 
    Nested Timeout Pattern to mimic setInterval

    The below function exactly works like setInterval but we can fine tune the control
    of the time param in this case
*/


let timerId = setTimeout(function request() {
    alert("hai");

    timerId = setTimeout(tick, 2000);
}, delay);


/* 
 For instance we need to write a sservice that sends a request to the server evry 5
 seconds asking for data , but in case the sever is overloaded, it should increase the interval to 10,20,40 seconds
*/

let delay = 5000;

let timerId = setTimeout(function request() {
    //...send request...

    //   if (request failed due to server overload) {
    // increase the interval to the next run
    delay *= 2;
    // }

    timerId = setTimeout(request, delay);

}, delay);


/* 
    Nestign setTimeout allows to set the delay between the execution more precisely than 
    setInterval



*/

let i = 1;
setInterval(function () {
    func(i++);
}, 100);

let i = 1;
setTimeout(function run() {
    func(i++);
    setTimeout(run, 100);
}, 100);
/*
    In the above case suppose the func take more than 100ms then setInterval dont wait for previous

    call to complete the scheduler will run at the specified interval no matter what


    But what if we want to execute thee function at 100 but after completing the first function

    Then we need to use nested setTimeOut because it actually waits for the first timeout to complete
    and then start with next set of timeout so there will be guranteed gap of 100ms between the next code run
*/

/* 
    Garbage collection 

    When is function is passed to setTimeout/Interval an internal reference is created to it
    and saved it to scheduler . it prevents the function from being garbage collected even if there are no other reference to it

*/
// the function stays in memory until the scheduler calls it
setTimeout(function () { }, 100);

// For setInterval the function statys in memory until clearInterval is called

/* 
    There a side effect . A function refernecs the outer lexical environment , so while it lives,
    outer variables live too. They take more memeory than the actual function itself. So when we dont need
    the scheduled function anymore its better ti cancel it even if its small
*/

/* 
    Zero delay catch 

    Sometimes even the setTimeout /Interval timeout is zero 

    After four nested calls there will be +4ms delay between the invocations

    It actaully still exists in broswer for historical resons and may scripts rely on that

    So zero delay is not a real zero delay in browser

*/

let start = Date.now();
let times = [];

setTimeout(function run() {
    times.push(Date.now() - start); // remember delay from the previous call

    if (start + 100 < Date.now()) alert(times); // show the delays after 100ms
    else setTimeout(run); // else re-schedule
});

// an example of the output:
// 1,1,1,1,9,15,20,24,30,35,40,45,50,55,59,64,70,75,80,85,90,95,100