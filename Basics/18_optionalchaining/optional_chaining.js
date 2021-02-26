/* 
    Optional chaining is the safest way to access nested properties,
    even if intermediate property doesn't exist

*/

// The non existence problem

/* 
    this JS when we try to access nested path 
    if previous value is not exist then it throws an error
*/

let user = {};

user.address.street ;// result in error because  user.address become undefined 
//trying to read street on undefined throws an error

// to avoid such error we genrally use if conditons or ? operator

user.address ? user.address.street : null;

// But this approach leads to lot of repeated coding 


/* 
    To avoid this kind of checking and return false evaluate

    JS has introduced ?. operator

    The Optional chaining ?. stops the evaluation if the value before ?. is undefined
    or null and returns undefined

*/

value?.prop // means value.prop when value is there else return undefined

let user = {};

alert(user?.address?.street); 

/* 
    checks for user is valid value else return undefined
    user is valid got o user.address value if valid goto next else return undefined
*/

/* 
    IMPORTANT : ?. makes the values before it as optional not further it
    Eg; user?address.streeet.name
    
    only works if user is null or udnefined and retur undefined
    for other property it works in a simamilar and might be changes for error

    DONT OVERUSE ?. (use when needed and necessary only for optional properties)
*/

/* 

    OPTIONAL CHAINING : works in a short circuited way

    further lines of codes wont get executed

*/


/* 
    Other variants of optional chaning

    1) used for function calls
    2) used for property access with square brackets

*/

// function calls

let user = {
    admin:function(){
        console.log("test");
    }
}

let user2 = null;
user.admin?.(); //if admin exists and try to invoke it 

user2[1];// results in error
// safe way
user2?.[2]  ; // cheks user for value if its not null or undefined then try to access