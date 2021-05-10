/* 
    Callbacks

    In javascript some of the functions provided by the host environment allows us to
    perform asynchronous actions. In other words actions that we initiate now but they 
    finish later

    One such exaple is setTimeout 

    Others example is by loading a script dynmaically
*/

function loadScript(src) {
    let script = document.createElement('script');
    script.src = src;
    document.head.append(script);
}

loadScript('some source');//example call

/* 
    so when we call the loadscript with valid path or URL the script will be loaded and run 
    in asynchronous mode 

    suppose we need to call a function which is present inside the loading script 
    if it write it below the function call i wont work properly because may or may not 
    loaded at the point of time 

    To handle such situations javascript comes with callback mechanism 

    The idea is to pass a callback function to the loadscript and invoke the callaback after the 
    resource loaded successfully
*/

function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    document.head.append(script);
    script.onload = () => {
        callback();
    }
}

loadScript('some source', () => {
    console.log("Called after script is loaded");
});//example call


/* 
    Callback in callback 

    What if we need to load another script sequentially after the first one 

    We can call it inside the callback of the first load 

    This pattern of nesting callback inside callabck to achieve sequential order 
    in asychrounus task is called a callback hell
*/
loadScript('some source', () => {
    console.log("Called after script is first loaded");
    loadScript('some source', () => {
        console.log("Called after second script is loaded");
    });//example call   
});//example call


/* 
    Error first callback

    In the above case we assumed that our script if always load correctly
    but there might be good chances that it can end up in error , so in javascript
    community there is an wide spread conventation of error first callback 
*/

function loadScript(src, callback) {
    let script = document.createElement(src);
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error('Script load with error'));
}


loadScript('./src.js', (error, script) => {
    if (error) {
        //handle error
    }
    else {
        // script load another
    }
});


/* 

    So as we keep nested callback it introduce us to more difficult to maintain pattern of code 

    it leads to callback hell or also called as pyramid of DOOM  

    TO avoid these patters javascript introduced promises

*/