/* 
    Promise has 6 static methods available in it

    Promise.all

      => This takes a array or iterable of promises and wait for all of them to settle 
        and return a result 

      => If any one of the promise if rejected and Promise.all immediately jumps to catch 
      and not wait for other results and it will be completely ignored 

      => The output will be a result array of promises which we given in order



*/
let promise = Promise.all([...promises]);

promise.then((resultArr) => { console.log(resultArr) });

Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
    new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
    new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
]).then(alert); //[ 1,2,3]

// a more practical example of such promise usage

let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig'
];

// map every url to the promise of the fetch
let requests = urls.map(url => fetch(url));

// Promise.all waits until all jobs are resolved
Promise.all(requests)
    .then(responses => responses.forEach(
        response => alert(`${response.url}: ${response.status}`)
    ));

// Another example
let names = ['iliakan', 'remy', 'jeresig'];

let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));

Promise.all(requests)
    .then(responses => {
        // all responses are resolved successfully
        for (let response of responses) {
            alert(`${response.url}: ${response.status}`); // shows 200 for every url
        }

        return responses;
    })
    // map array of responses into an array of response.json() to read their content
    .then(responses => Promise.all(responses.map(r => r.json())))
    // all JSON answers are parsed: "users" is the array of them
    .then(users => users.forEach(user => alert(user.name)));

// Example of rejecteing all promise
Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).catch(alert); // Error: Whoops!


// Promise.all is good for all or one 

/* 
  But what if we need a promise which will give sucessful result as well as why things failed
  
  We can use Promise.allSettled

  => The all setteled wait for all the promise to settle either success or failure
  => It gives us back the object {status:"fulfilled", value:result} for success response
  => It gives us back {status:"rejected", reason:error} for error response

*/
let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://no-such-url'
];

Promise.allSettled(urls.map(url => fetch(url)))
    .then(results => { // (*)
        results.forEach((result, num) => {
            if (result.status == "fulfilled") {
                alert(`${urls[num]}: ${result.value.status}`);
            }
            if (result.status == "rejected") {
                alert(`${urls[num]}: ${result.reason}`);
            }
        });
    });
    // [
    //     {status: 'fulfilled', value: ...response...},
    //     {status: 'fulfilled', value: ...response...},
    //     {status: 'rejected', reason: ...error object...}
    //   ]

/* 
    Promise.race

    Promise.race waits for the first setteled Promise and get its result or error

    let promise = Promise.race(iterable);

    Promise.race([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
    ]).then(alert); // 1


*/


/* 
    Promise.any

    Similar to Promise.race, but waits only for the first fulfilled promise and gets its result.
    If all of the given promises are rejected, then the returned promise is rejected with
    AggregateError – a special error object that stores all promise errors in its errors property.



*/

Promise.any([
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 1000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
  ]).then(alert); // 1

//The first promise here was fastest, but it was rejected, 
//so the second promise became the result. After the first fulfilled promise “wins the race”, all further results are ignored.

/* 
    Promise.resolve/reject


    Promise.resolve(value) creates a resolved promise with the result value

    It is same as 
    let promise = new Promise(resolve => resolve(value));

    Practically example would be instead of using new Promise((res)=>resolve )

    It comes in handy in some case like below

*/
let cache = new Map();

function loadCached(url) {
  if (cache.has(url)) {
    return Promise.resolve(cache.get(url)); // (*)
  }

  return fetch(url)
    .then(response => response.text())
    .then(text => {
      cache.set(url,text);
      return text;
    });
}

//Promise.reject

/* 
    Promise.reject(error) created a rejected promise with error

    let promise = new Promise((resolve, reject) => reject(error));


*/