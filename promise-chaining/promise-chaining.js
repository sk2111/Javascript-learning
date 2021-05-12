/* 
    Promises chaining 

    For instance we can add more than one .then to the promise chain
*/

new Promise(function (resolve, reject) {
    setTimeout(() => resolve(1), 1000); //1 step
})
    .then(function (result) {
        return result * 2; //2 step
    })
    .then(function (result) {
        return result * 2; //3 step
    })
    .then(function (result) {
        return result * 2; //4 step
    })

/* 
    After the one second timeout the setTimeOut will get resolved 

    After resolving it calls the .then method on it which will do some
    calcaulation and again return some new result and this keeps going on

    The idea of chaining works because the whole call to .then will return a
    promise again so that we can call .then again on it


*/

//Returning a promise

/* 
    We can also return a promise from the .then in that case the following .then will wait 
    until the promise get resolved and execute afterward
*/

new Promise(function (resolve, reject) {
    setTimeout(() => resolve(1), 1000); //1 step
})
    .then(function (result) {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(result), 1000);
        }); //2 step
    })
    .then(function (result) {
        return result * 2; //3 step will wait for 1 second and execute afterwards
    })
    .then(function (result) {
        return result * 2; //4 step
    })

/*
    Returning a Promise helps to chain asynchronous actions

    To be precise the returning object is not need to be always a new promise it can be 
    a thenable object , the main idea is javascript check for the return object with the then method
    and call the method using resolve,reject 

*/

class Thenable {
    constructor(num) {
        this.num = num;
    }
    then(resolve, reject) {
        alert(resolve); // function() { native code }
        // resolve with this.num*2 after the 1 second
        setTimeout(() => resolve(this.num * 2), 1000); // (**)
    }
}

new Promise(resolve => resolve(1))
    .then(result => {
        return new Thenable(result); // (*)
    })
    .then(alert); // shows 2 after 1000ms

/* 
    Note , .then,.catch,.finally all returns Promise object 

    Once the state change from pending to fuflfilled or rejected

    the next .then start executing

*/


/* 
    A typical example using fetch 

    In the frontend programing promises are always used for network request

    let promise = fetch(url);


    The above call will make a network request to the  remote server , the network request resolves
    the url and return a promise , the promise resolves with response object when the remote server
    responds with headers but before the full response is downloaded

    To read the full response we need to call the method response.text() or response.json()

    it returns a promise that resolves when the text is fully downloaded from the remote server
    with the text as result.

*/

fetch('/article/promise-chaining/user.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (text) {
        alert(text)
    })

// Make a request for user.json
fetch('/article/promise-chaining/user.json')
    // Load it as json
    .then(response => response.json())
    // Make a request to GitHub
    .then(user => fetch(`https://api.github.com/users/${user.name}`))
    // Load the response as json
    .then(response => response.json())
    // Show the avatar image (githubUser.avatar_url) for 3 seconds (maybe animate it)
    .then(githubUser => {
        let img = document.createElement('img');
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img);

        setTimeout(() => img.remove(), 3000); // (*)
    });

/*
    In the above case if we need to do something after the image has been removed then 

    we need to wrap it as a promise and return that promise

*/
fetch('/article/promise-chaining/user.json')
    .then(response => response.json())
    .then(user => fetch(`https://api.github.com/users/${user.name}`))
    .then(response => response.json())
    .then(githubUser => new Promise(function (resolve, reject) { // (*)
        let img = document.createElement('img');
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img);

        setTimeout(() => {
            img.remove();
            resolve(githubUser); // (**)
        }, 3000);
    }))
    // triggers after 3 seconds
    .then(githubUser => alert(`Finished showing ${githubUser.name}`));
/* 

    A good rule of thumb would be asynchronous action should always return 

    a Promise so that it will be easy for us to keep adding .then or any further methods 

    easily after its completion

*/

function loadJson(url) {
    return fetch(url)  // Always return new promise for async actions
        .then(response => response.json());
}

function loadGithubUser(name) {
    return fetch(`https://api.github.com/users/${name}`)
        .then(response => response.json()); // Always return new promise for async actions
}

function showAvatar(githubUser) {
    return new Promise(function (resolve, reject) { // Always return new promise for async actions
        let img = document.createElement('img');
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img);

        setTimeout(() => {
            img.remove();
            resolve(githubUser);
        }, 3000);
    });
}

// Use them:
loadJson('/article/promise-chaining/user.json')
    .then(user => loadGithubUser(user.name))
    .then(showAvatar)
    .then(githubUser => alert(`Finished showing ${githubUser.name}`));
    // if needed we can add .then method here easily