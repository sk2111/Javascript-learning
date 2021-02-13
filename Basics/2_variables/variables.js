var $ = 1;
var _ = 2;
var $sajspajsjas12323 = 5;
var _Hai_ = 6;

// All the above are valid javascript variable names
// Javascript variable name can contain $,_,alphabets,numbers
// Varibales cannot start with numbers

let personName = 'sathish';
const BIRTHDAY = '21-11';
{
    //NOTE : This is a block scope 
    let personName = 'meow';
    console.log(personName);
}
console.log(personName);
/*
    There are difference between var and let,const
    1) The var are hoisted and are function scoped
    2) let and const will not be hoisted and are block scoped (block means if block ,loops etc);
    3) var in global space is attached to window object but let const wont do that
*/