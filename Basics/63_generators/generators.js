/* 
    Generators

    => Regular function wiill be called and return value only once ,single value or nothing
    => Generators can yield multiple values on demand one after another,
    => They work grat with iterables 

    => when a generator function runs it does not return a calue , but instead it returns a
       generator object to manage the execution
    => The return object has next() methd which we when we call run the generator
       until it meets the nearest yield 
    => Once it meets the yield statement it pause the execution and returns the 
       control back to the calling code with yield value
    => When we call yield again it runs the code from where it has left off and until it meets 
       next yield or return
    => If no more yield is three it return done:true same as for return happens
*/

function* generator() {
    yield 1;
    yield 2;
    yield 3;
    return 4;
}

const gen = generator();
console.log(gen.next()); //1 {value:1,done:false}
console.log(gen.next()); // {value:2,done:false}
console.log(gen.next()); // {value:3,done:false}
console.log(gen.next()); // {value:4,done:true}
console.log(gen.next()); // {value:undefined,done:true}
console.log(gen.next()); // {value:undefined,done:true}

/* 
    Generators are iterables
    
    As we already know iterables (Symbo.iterator) which works with iterator object with next

    Generators also having next and iterable protocol implemented
*/

for (let value of generator) {
    console.log(value); // 1,2,3 (for of loop ignores last last when done:true)
}

// If we need that value then we need to add another yield instead of return 


// Genarators also work with ...spread syntax
function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
}

let sequence = [0, ...generateSequence()];

alert(sequence); // 0, 1, 2, 


// Generators helps us to implement 
// Iterables in a bteer and consice way

const obj = {
    from: 1,
    to: 5,
    *[Symbol.iterator]() {
        for (let value = this.from; value < this.to; value++) {
            yield value;
        }
    }
}

alert([...obj]);

/* 
    The above syntax works because for..of loop and spread ... works with iterables

    Iterables are nothing but which has Symbol.iterator protocol implemented in it

    When we call such function the exceptation is to return a object with next() method
    in it,which should return a value {done:true,value:something}

    In this above case the generator does the same this it returns a generator object
    which has a next method on it so spread and for of loop both works fine in this case


*/


/* 
   Generator composition

   It is a feature which allows generators to transparently embed generators in each other

   function* generateSequence(start, end) {
         for (let i = start; i <= end; i++) yield i;
    }
   
    For generators there is special yield* syntax to embed into another generator

    The yield* gives the control to another generator , the yield* iterates over the gen and
    transparently forwards ist yields otuside. 


*/

function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) yield i;
}

function* generatePasswordCodes() {

    // 0..9
    yield* generateSequence(48, 57);

    // A..Z
    yield* generateSequence(65, 90);

    // a..z
    yield* generateSequence(97, 122);

}

let str = '';

for (let code of generatePasswordCodes()) {
    str += String.fromCharCode(code);
}

alert(str); // 0..9A..Za..z


/* 
    Generator Yield is a two way street

    => Until now we saw the generator acts much like iterables 
    => Generator also has a special feature that not only allow it to return a value outside
    => But it can also get a value as argument from outside 

*/


function* gen() {
    let result = yield '5+5 ?';
    console.log("I am from generator", result);
}

const ins = gen();

ins.next(); //{ value: '5+5 ?', done: false };
ins.next(10); // pass the value to yield 


/* 
    This adds more power to generators 
    It acts like a ping pong game , passing a value getting a value

    We should not that we cannot pass argument in the first call of next
    If we pass it will be ignored

*/

/* 
    Generator throw

    As we saw earlier the outer code may pass a value into the generator , as a result of yield

    But we can also pass an error throw inside a generator 

*/
function* gen() {
    try {
        let result = yield "2 + 2 = ?"; // (1)

        alert("The execution does not reach here, because the exception is thrown above"); // not execute
    } catch (e) {
        alert(e); // shows the error
    }
}

let generator = gen();

let question = generator.next().value;

generator.throw(new Error("The answer is not found in my database")); // (2)

//Passing a error into generator will reach the like (1) and since its an expection
//It is cached directly by the catch block 
// It we dont wrap with try..catch then the exception propogates and kill the script

// Final note generator has two important methods on it .next and .throw

// Generators will be great to work with stream of data 