/* 
    Programmers oftern make mistakes in wiritng code, that can be runtime error
    or an error from user input

    Whenever an error occurs in jaavscript usally the script dies and exist out immediately

    But have try/catch syntax which will be helpful to catch runtime error and run gracefully
    instead of the script dying 
*/


try {
    alert("hai")
}
catch (e) {
    alert(e);
}

//e is the error object which contains the error message


/* 
    Try catch block works in synchronusyly manner
*/

try {
    setTimeout(() => {
        noSuchVaribale; // script will die here
    });
}
catch (e) {
    alert(e);
}

/*
    The reason why script dies in above code is because when the time setTimeout executes
    javascript already crosses the try catch block
   
    To handle the error in such timeout cases we need to cover the seTimeOut function with try catch block
*/

try {
    setTimeout(() => {
        try {
            lalala; // This would be the correct way
        }
        catch (e) {
            console.log(e);
        }
    });
}
catch (e) {
    console.log(e)
}


/*
    Error object has three main properties

    1) name  - error name => Eg Reference Error
    2) message - Error messagetells about error
    3) stack  - call stack at which the error occurs

*/

try {
    lalala;
}
catch (e) {
    alert(e.name); //
}


/* 
    Javascript Throw

    we can also throw our own error
*/


try {

    throw new Error();
}
catch (e) {
    console.log(e);
}

// We can use anything at the throw object like an string, number,boolean
//But it is recommeded to use erro object to stay compatible (name,message format)
// Different types are available like Reference error , syntax error , Type Error


//finally

try {

}
catch {

}
finally {

}


//try,catch can also have finally assocaiated with it
// As the name suggest it runs finnally even after error
// try-> catch -> finally
// try->finally
// We can have finally to do some task whether the above is successfull ot not

//optional we can omit catch and just write with try and finally

try {

}
finally {

}


//global error handling 

/* 
    we can isolate our error with try catch but what if it happens in anywhere in the script

    we cannot able to surrond every code within try catch block 

    But we also need a way to catch the error and send to log to developer where the error have occured
*/

window.onerror = function (message, url, line, col, error) {

}

/* 
    message : Error Message

    url : URL of the script error happended

    line,COL : Line and colum where the error happens

    Error : Error object

*/

