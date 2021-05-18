/* 
    Promisification 

    "Promisification" is process of converting a normal callback based function 
    to a Promise based function 



*/

//callback based approach

function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));

    document.head.append(script);
}

// usage:
// loadScript('path/script.js', (err, script) => {...})

//Promise based approach
//Here we have converted an exisitng function using a wrapper promise based 
// This approach is often needed for third party libs 
let loadScriptPromise = function (src) {
    return new Promise((resolve, reject) => {
        loadScript(src, (err, script) => {
            if (err) reject(err);
            else resolve(script);
        });
    });
};

  // usage:
  // loadScriptPromise('path/script.js').then(...)


/* 
    An important difference to note is callabck based functions can call the callback 
    many times if needed

    But promise can have only one result that can be rejected or resolved

*/