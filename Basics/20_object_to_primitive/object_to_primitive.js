/* 
    Object to primitive

    What happens when to try to add two objects obj1+obj2 , obj1-obj2 ?

    In that case Objects are converted to primivite values and operation is carried out

    1) All objects are tru true i boolean context
     
    2) The numeric conversion happens when we subtract or add objects .

        for eg Date objects in javscrit can be subtracted 
    
    3) String conversion happens when we use in like alert(Object);

*/

//TO Primitive

/* 
    There are three variants of type converion in javascript objects happens

    They are called as "hints"

    "string" = hint

       while we are doing obj to string conversion like
       alert(obj);

       anotherObj[obj] = 123; (Object keys are converted to string )

    "number" = 'hint'

       occurs when we are doing math operations

       let num = Number(obj);

       let n = +obj;
       let delta = obj1 -obj2;

       let greater = user1 > user2

    "default" = "hint"

        Occurs in rare cases when javascript is not sure what type to expects

        For example binary + can work with both strings and numbers

        so it we use two obj to add then "default" hint is used
        since js  dont know whether to call number or string 
        
        let result = obj1 + obj2;

    Note there is no boolean hint
*/

/* 
    To do these conversion javscript trieds to find and call three object methods

    1) call obj[Symbol.toPrimitive](hint) - call the method if such symbolic key exists

    2) Otherwise if the hint is "string" 
       -> try obj.toString() and obj.valueOf() whatever exists

    3) Otherwise if hint is "number" or "default"
       -> try obj.valueOf() and obj.toString() whatever exists

*/

// If we need to use first method Symbol.toPrimitive

obj[Symbol.toPrimitive] = function(hint){
    // hint value is "string" or "number" or "default"

    // must return a primitive value or error is thrown 

    // can return any type of primitive value
}

// If we define symbol.toPrimitive it can hadle all hint cases
let user = {
    name: "John",
    money: 1000,
  
    [Symbol.toPrimitive](hint) {
      alert(`hint: ${hint}`);
      return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
  };
  
  // conversions demo:
  alert(user); // hint: string -> {name: "John"}
  alert(+user); // hint: number -> 1000
  alert(user + 500); // hint: default -> 1500

/* 
  Methods toString and valueOf come from ancient times. they are not symbols
  and are normal string based methods

  if thers is no symmbo.toPrimitive conversion they js tries to find them and try in the order

  1) toString -> valueOf for "string" hint
  2) valueOf -> toString for "number" hint

  These methods must return a primitive value if obj is returned then its ignoreed

  By default a plain obj has followinf methods to it

  toString method return "[object object]"
  valueOf method return object itself

*/


let user = {name: "John"};

alert(user); // [object Object] // alert converts to string so toString is called
alert(user.valueOf() === user); // true


// we can overwrite toString an valueOf if needed

let user = {
    name:'john',

    toString(){
        return `${this.name}`;
    },

    valueOf(){
        return `${this.name}`; // Not needed to be an number we can return any primitive value
    }
}

/* 
    Furthur conversions

    What happens if we pass an obj to multiplication

    Obj * 2 

    Here the object is first converted to primitve type and called with toString or valueOf method
    
    let obj = {
    // toString handles all conversions in the absence of other methods
    toString() {
        return "2";
    }
    };

    alert(obj * 2); // 4, object converted to primitive "2", then multiplication made

    Multiplication again converts string 2 to number 2 and result becomes 4
*/