/*  
    Basic operators

    UNARY,BINARY,OPERAND

    OPERAND  = Operand is what operators are applied on
    ie 5 * 2 => left operand 5 and right operand 2

    UNARY = operators which work with only one operand is called unary
    ie -5, +5 are unary operators

    BINARY = operators which work with two operand are called binary
    ie 5 + 5  ar binary becuase (two opernads are there)

*/

/*
    Basic Math operators in JS
    +
    -
    /
    * 
    % remainder
    ** exponentiation
*/
//remainder operator

let a = 5 % 2; // 1 remainder
let b = 2 % 5; // 2 remainder (Remainder can be help to conatain a number within certain value)
console.log(a, b);

//exponnentiation (multiplies a by iteslef b times)
alert(2 ** 2); //square
alert(2 ** 3); // cube
alert(4 ** (1 / 2)); // square root
alert(8 ** (1 / 3)); // cube root

//string concatenation
/*   
    let see  some unique feature of javascript + operator
    
    usually + operator sums the number
    But is appliead to string it concatenes them

    Note: Unary plus is the only operator which works in this way
    others other operators convert to numbers irst and then work
*/

let a = 1 + 'hai'; //1hai

alert('6' / '2'); //number 3 (Beacuse convert to number first and then divide);

alert('6' + '2' + 1); // '621'
alert(1 + 6 + '2'); // '72' (since all operators are + by precedence rule left to right so 7+'2'='72')

//unary plus
/*
  unary plus when applied to numbers doesnt do anything but when applied to non numbers
  it will type convert to numbers

  can be useful to replce Number(...) as a shorthand
*/

alert(+true); //1
alert(+false); //0
alert(+(-2)); //-2

/*
    OPERATOR PRECEDENCE

    if an expression has more than one operator then execution order is defined by operator precedence
    parenthesis () can override any precedence 
    is operators are with same precedence then execute from left to right

    (unary higher precedence , follwed by binary,followed by assignment)

    
Precedence	Name	Sign
…	…	…
17	unary plus	+
17	unary negation	-
16	exponentiation	**
15	multiplication	*
15	division	/
13	addition	+
13	subtraction	-
…	…	…
3	assignment	=
…	…	…

Note assignment = is also an operator 
that why 
let x = 2*2 +1;
it evaluates 2*2+1 = 5
// assignment operator takes the value writes into c and then returns it 
*/

let a = 1;
let b = 1;

let c = 3 - (a = b + 1); //valid statement

// Chaning assignments

let a, b, c;

//Its possible to chain 

a = b = c = 2 + 2;

// Modify in place

let n= 2;
n*=2 ; //n=n*2
n/=2 ; //n=n/2
n+=2 ; //n=n+2
n-=2 ; //n=n-2 all operators support modify in plcae
n*=5+2; // n=n*7 because right side evealutes first here

// INCREMENT/DECREMENT
//++,--
//preincrement,postincrement
//preincrement - increments the values and return the new values

let a = 1;
let b = ++a; // a becomes 2 and return 2
//preincrement - return old value and increment the variable

let a = 1;
let b = a++; // a becomes 2 and but b becomes 1 (first return and then incrment)

//if return value is not used both are same no difference

//BITWISE OPERATORS
//bitwise treates arguments as 32bit integers and work on binary representation

//List of operators
/*
    AND (&)
    OR (|)
    NOT (~)
    XOR (^)
    LEFT SHIFT (<<)
    RIGHT SHIFT (>>)
    ZERO FILL RIGHT SHIFT (>>>)

*/