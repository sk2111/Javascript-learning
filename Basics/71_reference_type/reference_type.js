/*
    Reference Type

    A dynamically evaluated method can lose "this"

    For instance

*/
let user = {
    name: "John",
    hi() { alert(this.name) },
    bye() { alert("Bye") }
};

user.hi();

(user.name === 'John' ? user.hi : user.bye)(); //Error!

/* 
    Why this is not working?

    The reason is . operator will return an reference Type => Only used by inernal spec of
    language and we cannot access those 

    The reference type will look like (obj,property,strict) (base,name,strict)

    base => Object
    name => property name
    strict => use strict is in effect or not


    So we know the value of "this" is object before dot so only when we assign it to
    variables we lose "this" binding 

    The do operator will always return a reference type and not a property value 

    so when () sees the reference type it will bind the object to "this"

    But if the reference type is used with other assignments like = or || 

    other than brackets then it will be converted to ordinary value and will lose this scope

    so calling obj.method() (obj.method)() and obj['method']() will work fine 

    But if we introduce any expression then we may lose this
*/

/* 
Reference Type is an internal type of the language.

Reading a property, such as with dot . in obj.method() returns not exactly the property value,
but a special “reference type” value that stores both the property value and 
the object it was taken from.

That’s for the subsequent method call () to get the object and set this to it.

For all other operations, the reference type automatically becomes 
the property value (a function in our case).

The whole mechanics is hidden from our eyes. 
It only matters in subtle cases, 
such as when a method is obtained dynamically from the object,
 using an expression.

*/

let obj, method;

obj = {
  go: function() { alert(this); }
};

obj.go();               // (1) [object Object]

(obj.go)();             // (2) [object Object]

(method = obj.go)();    // (3) undefined // reference type is lost due to expression

(obj.go || obj.stop)(); // (4) undefined // reference type is lost due to expression