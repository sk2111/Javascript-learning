/* 
    Scrips , async defer

    In general the browser when it sees the script it stops the parsering the HTML 
    downloads the script and then then start executing it and after completing it 
    will again resuming DOM creation 

    But this has a problem because the script cant see the elements below it 
    due to bloacking nature

    The aleterante commonly used is to put script at the end of body but this solution works good
    but for long HTML pages the script need to wait until it seen to download and use


    defer attribute

        The defer attribute tells the broswer that not to bloack the DOM creation but 
        the script will start to download in background and after it downloaded it wait until
        the DOM creation is done and runs the script before the DOMContentLoaded

        <script defer src="https://javascript.info/article/script-async-defer/long.js?speed=1"></script>
        <script defer src="https://javascript.info/article/script-async-defer/small.js?speed=1"></script>

        Defer scripts never block the page

        Defer script mains the order so two or three defer scripts comes then each will be executed
        in thier order eventhough below script finish downloading fast
        
        In above case small will run only after large runs eventhough it downloaded first

    async attribute

        The async attribute also allows the script to download in parallel 
        but DOMContentLoaded and async script dont wait for each other

        The async will download in background and run as soon as the download is ready 

        so it may or may not happen before DOmContentLoaded event 

        It is suitable for third party analytics script etc

    Dynamic script

        The script we dynamically create are async nature by default
        
        If we need defer nature then we need to set the async attribute to false

        let script = document.createElement('script');
        script.src = "/article/script-async-defer/long.js";
        document.body.append(script); //
    
        function loadScript(src) {
            let script = document.createElement('script');
            script.src = src;
            script.async = false;
            document.body.append(script);
        }

        // long.js runs first because of async=false
        loadScript("/article/script-async-defer/long.js");
        loadScript("/article/script-async-defer/small.js");

*/


/* 
    Resource Loading : onload and on error

    when dynamically loading a script we need to call the functions inside the script
    after its loaded

    To do that we can use add onload listener to the script and run our code inside it

    We can also attach onerror handler if something went wrong and script is not loaded 
    properly
*/

let script = document.createElement('script');

// can load any script, from any domain
script.src = "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.3.0/lodash.js"
document.head.append(script);

script.onload = function () {
    // the script creates a variable "_"
    alert(_.VERSION); // shows library version
};

script.onerror = function () {
    console.log('Error occured');
}

/* 
    The onload and error events can occur also for other resources like image

    One thing to note is image is special and it starts loading the content 
    when the src is set before attaching to document

*/

let img = document.createElement('img');
img.src = "https://js.cx/clipart/train.gif"; // (*)

img.onload = function() {
  alert(`Image loaded, size ${img.width}x${img.height}`);
};

img.onerror = function() {
  alert("Error occurred while loading image");
};

/* 
    crossorigin policy

    Script that are present inside the HTML cant access resources from another site due to
    Crossorigin policy

    <script src="https://cors.javascript.info/article/onload-onerror/crossorigin/error.js"></script>

    And also if we use window.error to capture the details we may not get full information in it

    To allow the cross-origin access , the script tag needs to have the crossorigin attribute 
    plus the remote server must provide special headers


    No crossorigin attribute => access prohibited
    
    crossorigin="anonymous" => access allowed if the server responds with the header 
    Access-Control-Allow-Origin with * or our origin. Brodwser dont send the cookies or
    auth information to the server

    crossorigin="use-credentials" - Access allowed if the server sends back the header 
    Access-Control-Allow-Origin with our origin and Access-Control-Allow-Credentials: true. 
    Browser sends authorization information and cookies to remote server.



*/