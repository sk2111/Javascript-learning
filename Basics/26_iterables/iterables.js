/* 
    Iterables objects are generalization of arrays.

    That means it is a concept which allows us to make any object useable in a for... of loop

    Arrays are iterable by nature but there are many objects which are also iterable as well.

    For instance strings are iterable

    If object is not technically an array but represents a collection of something, then for of is 
    great syntax to loop over it.

*/

/* 
    Symbol.iterator

    we can understand how iterable works by making one of our own

    For eg we have an object that is not an array , but looks suitable for for..of loop

    like a range object that represents an interval of numbers


    let range = {
        from:1,
        to:5
    }
    if we want to make a iterable like
    for(let num of prop){
        alert(num); // 1 , 2 , 3 , 4, 5 
    }
*/

/* 
    To make our own iterable we need to add Symbol.iterator function to the object
 
    1) When for of loop starts it calls the method this method once and it need to return an object
    with next method 
    2) After that for...of loop only works with returned object
    3) when for of loop want next value it call next()
    4) the result of next must have the form {done:Boolean,value:any} where done true means that
    iteration is finished , otherwise the value is next value

*/

let range = {
    from: 1,
    to: 5
  };
  
  // 1. call to for..of initially calls this
  range[Symbol.iterator] = function() {
  
    // ...it returns the iterator object:
    // 2. Onward, for..of works only with this iterator, asking it for next values
    return {
      current: this.from,
      last: this.to,
  
      // 3. next() is called on each iteration by the for..of loop
      next() {
        // 4. it should return the value as an object {done:.., value :...}
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  };
  
  // now it works!
  for (let num of range) {
    alert(num); // 1, then 2, 3, 4, 5
  }


/* 
  To Note : range itself does not have next() method
  another object a so called "iterator" is created by call to range[Symbol.iterator]() and its next() 
  generated value for the iteration
  
  so iterator is seperate from object it iterates over

  (Techincally we can merge them as well)


*/
let range = {
    from: 1,
    to: 5,
  
    [Symbol.iterator]() {
      this.current = this.from;
      return this;
    },
  
    next() {
      if (this.current <= this.to) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
  
  for (let num of range) {
    alert(num); // 1, then 2, 3, 4, 5
  }

/* 
  
  Actually the above is also value since Symbo.iterator rule is to return a iterable object with next method in it

  The above case is valid only
  
  Infinite iterators
  => Next method can return values keep on 
  => there is no need it need to end and it can be infinite
  => For the cases like this we can use break
*/

/* 
   String is iterable

   Arrays and Strings are most widely used built-in iterables

   For a string , for...on loops over its characters

   for(let char of "test"){
       alert(char); // t, then e,then s ,then t 
   }

   And it works correctly with surrogate pairs!

   let str = '𝒳😂';
   for (let char of str) {
    alert( char ); // 𝒳, and then 😂
   }

*/

/* 
   calling the iterator explicitly

   Let see how string use internal iterator for their purpose

   let str = 'hello'

   let iterator = str[Symbol.iterator]();

   while(true){
      let result = iterator.next();
      if(result.done) break;
      alert(result.value); // outputs characters one by one
   }

   This is rarely used but gives us mor fine control on how we process large string 
   if needed we can hold and resume
*/

/* 
   Iterable and Array-likes

   These two are entirely diffrent

   1) Iterables => are Objects that implement Symbol.iterator method
   1) Array like => are Objects that has indexes and length, so they look like arrays

   when we use practically for javascript taks in browser we may meet this objects that are iterables 
   or array like or both

   For instance, strings are both iterable(for of loop works) and array-like(have length and indexes)
   
   There also cases where iterable may not be array like or array like may not be iterable

   Here is another example

   let arraylike = {
       0:'Hello',
       1:'world',
       length:2
   }

   // Error (no Symbol Iterator)
   for(let item of arrayLike){

   }
   
   Both iterables and arry-likes are not arrays
   they dont have push , pop , But what if we need array methods in iterables or arraylike
*/

//Array.from(obj[,mapFun,thisArg])

/* 
   There is an universal method that takes iterables or arrayLike and converts tehm to arrya
*/
let arraylike = {
    0:'Hello',
    1:'world',
    length:2
}

alert(Array.from(arraylike));

// array.from looks for arraylike or iterable and use them interanlly to convert into array
// Here array like is converted into array ["helllo","world"]
// Hello , world 


// we can use map to mapover each item and return new element also

let str ='ABCD';
Array.from(str);//['A','B','C','D'] // replies only iterable nature of string 

//Array from support surrogate pair in strings and works correclty




