/* 
    BigInt

    Bigint is a special numeric type that support for intergers of arbitary length

    A bigint is created by appending a n to the number are created from string using Bigint


*/

let bigNum = 1232376298734872384823749834783748347283742837482374723748n;

const bigNum1 = BigInt("12128129128718278127871827817287127187281728172817288n");


const bigNum2 = BigInt(10); // normal numbe rto big int conversion


//Math operations

//add is possible
console.log(1n + 3n); //4n
//divison is possible but converted to integer value
console.log(5n / 2n); //2n


//mixing numbers and bigint

alert(1n + 2); //results in error 

// We need to explicitly convert if we are planning to use numbers and bigint

console.log(1n + BigInt(12)); //13n

console.log(Number(12n)); //12
//care must be taken while converting into Number or else
//we may lose the trailing values for big big values

//comparisons

// < , > work well with bigint and numbers just fine

alert(2n > 1n); //true

alert(2n > 1); //true


// for equality comparison we need to == for Number and BigInt comparison
// If we use === then they will be always false

console.log(1n === 1); //false
console.log(1n == 1); //true








