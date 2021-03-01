/* 
    Javascript allows us to work with primitives as if they are objects

    1) They provide methods to call on primitive


*/

/* 
    1) They are clear distinction between primitives and object

    2) Primitives are light weight but objects are heavier

    3) Object can contain function which can help in many ways

    4) Objects can conain complex data type

Javascript creater thought of primitives can have useful methods to work on them
but at the same time it need to be light and fast

So How if works?

primitives have methods which we can call on them 

*/

let str = 'abc';
str.toUpperCase();

let num = 231.212323;
num.toFixed(2); // calling method on primitve js create special object wrapper


/* 
    Note : Here we are calling method on primitive and OMG how it works????

    1) To achieve this javascript cretor have one idea in mind

    2) primitive is still a primitive of light weight

    3) When we call a method on primitve JS cretes a special "object wrapperr"
    and the object wrapper will be different for number,boolean,string,symbol,bigint
    each have its own methods for that particular type and the method is called return some value
    and the Object wrapper is deleted

    4) Javascript engines highly optimizes the process of creating the wrapper object
    so it will be fast and light wihut any overhead
*/

// IMPORTANT : Dont use primitve constructors like new Number(),new String() it may mess up

/* 
    null,undefined have no methods

    an attempt to read property on them will result in error
*/

