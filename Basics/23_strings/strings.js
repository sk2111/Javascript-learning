/* 
    In javascript the textual data is stored as string

    There is no character type for single char

    The strings are represented as UTF-16 internally and it is not tied to page encoding
*/

//string represntation

let str1 = "Helllo"; //double quotes
let str2 = 'Helllo'; // single quotes
let str3 = `Helllo`;// back ticks

/* 
    Double and single quotes are exactly same no special featurs

    But backticks support multiline and inside expressions
*/

let str3 = `helllo
${str1} + ${str2}
`;

/* 
    The above backticks supports multine and also can have embedded expressions

    These features are not avaliable in single or double quotes
*/

// Rarely used fetaure of backticks

// Tagged templates => function called with backticks instead of ()
function template(strings, str1, str2) {
    // string will be array ["This","is a bad"];
    // str1 will be helllo
    // str2 will be helllo

    // we can do something and return some value depending on that
    return 'hai'
}

let a = template`This ${str1} is a bad ${str2}`;



/* 
    Special characters in javascript 

    Its still possible to achieve newline in javascript in single and double quotes

*/

let a = 'hai\nhelllo';
let b = `hai
helllo`;

a == b; //true 

/* 
    There are lot of special characters used inside strings

    \n    newline
    \r    carraige return , not used alone , window text file usally use two char \r\n for line break
    \',\"  Quotes
    \\    Backslash
    \t    Tab
 \b,\f,\v  Backspace,Form Feed ,vertical Tab
 
   \xXX   unicode character given in hex format unicode XX , '\x7A' is same as 'z'
    \uXXXX  A unicode symbol with exactly 4 hex digits to reepreent utf-16 encoding , eg:'\u00A9' for ©   
    \u{x..xxxxx}  1 to 6 characters used to represent unicode 32 encoding 
*/



alert("\u00A9"); // ©
alert("\u{2031}");
alert("\u{1F60D}"); // EMOJI

//STRING LENGTH

alert('My\n'.length); // length === 3 \n also counts as single char

// Note length is a property not a method

/* 
    ACCESSING CHARACTERS

    TO get a position character we can use [pos] or str.charAt(pos)
*/

let str = 'meow';

str[0]; // m
str.charAt(0); // m
str[str.length - 1]; // w

// if nothing found [] return undefined while charAt return empty string

str[100]; //undefined
str.charAt(100); // ''

// We can also iterate over characters using for... of

/* 
    Immutable primitives

    since string is a primitive we cannot edit the string as a character
    
*/

let str = 'Hi';

str[0] = 'h'; // error 

alert(str); // No change same value

// so the work around will be creating a new string and assing to str instead of old one

str = 'h' + str[1];

alert(str);

// chaning the case

alert('hai'.toUpperCase()); // HAI
alert('HAI'.toLowerCase()); // hai


/* 
    Searching for a substring

    There are multiple ways to look for a substring within a string

    str.indexOf(substr,pos) => pos denotes from where to start search

    it looks for substr in str, starting from the given position and returnt the pos when match found
    or else it will return -1


*/
let str = 'Widget with id';

alert(str.indexOf('Widget')); // 0, because 'Widget' is found at the beginning
alert(str.indexOf('widget')); // -1, not found, the search is case-sensitive

alert(str.indexOf("id")); // 1, "id" is found at the position 1 (..idget with id)



// if we need all the occurens then we can do like

let str = 'As sly as a fox, as strong as an ox';

let target = 'as'; // let's look for it

let pos = 0;
while (true) {
    let foundPos = str.indexOf(target, pos);
    if (foundPos == -1) break;

    alert(`Found at ${foundPos}`);
    pos = foundPos + 1; // continue the search from the next position
}


// str.lastIndexOf(substr,position) => index of startf rom 0 but lastIndex of start from back fo string


/* 
    NOTE: when indexOf is used in if condition then 
*/

if (str.indexOf("Widget")) {
    // Not execute because 0 is treated a falsy
}

if (str.indexOf("Widget") !== -1) {
    // execute because we are explicity checkign for -1
}

/* 
    includes,startsWith,endsWith

    The more modern method str.includes(substr,pos) returns true/false

    alert("haie heippp".includes("hei")); true

*/

// startsWith

alert("hello jas".startsWith("hell")); //true
alert("hello jas".endsWith("jas")); //true

/* 
    Three methods avaliable in string for getting a substring

    slice(start,end)   => end is not inclusive  allow negatives numbes

    subString(start,end)  => between start and end   negative values mean 0
    
    subStr(start,length)  => from start get length characters allows negative start

*/

let str = 'stringify';

alert(str.slice(0,5));//strin  , fromm start t0 end -1
alert(str.slice(1));//tringify  , fromm start if no end given rest of the string
alert(str.slice(-4,-1));//gif 
// negative indicates start from back of string at 4  and go to 1 from back of string

let str = "stringify";

// these are same for substring
alert( str.substring(2, 6) ); // "ring"
alert( str.substring(6, 2) ); // "ring"

// ...but not for slice:
alert( str.slice(2, 6) ); // "ring" (the same)
alert( str.slice(6, 2) ); // "" (an empty string)


let str = "stringify";
alert( str.substr(2, 4) ); // 'ring', from the 2nd position get 4 characters


/* 
    Compare strings

    String are represented as UTF-16 character encoding internally

    so when comaparing char 'a' with char 'A'

    javasript lookup the UTF-16 code and compare numeric code


*/

//str.codePointAt(pos) => gives nueric value for character from lookup

alert( "z".codePointAt(0) ); // 122
alert( "Z".codePointAt(0) ); //90

// str.fromCodePoint(code)

alert( String.fromCodePoint(90) ); // Z


// Correct comparisons

/* 
    correct string comaprison is difficult because aplhabesta re dfferen tfor diffeent languages

    A special method called localCompare is there 

    The call str.localeCompare(str2) returns an integer indicating whether str is less, equal or greater than str2 according to the language rules:
        Returns a negative number if str is less than str2.
        Returns a positive number if str is greater than str2.
        Returns 0 if they are equivalent.
*/

const a = 'réservé'; // with accents, lowercase
const b = 'RESERVE'; // no accents, uppercase

console.log(a.localeCompare(b));
// expected output: 1
console.log(a.localeCompare(b, 'en', { sensitivity: 'base' }));


// Surroagte pairs

/* 
    Generallly characters have 2 byte codes

    but 2bytes can have only 65536 combinations and tahts not enough for evrything 

    So rare symbols are encoded with 2byte characters called a surrogate pair

    the length of such symbol is length


*/

alert( '𝒳'.length ); // 2, MATHEMATICAL SCRIPT CAPITAL X
alert( '😂'.length ); // 2, FACE WITH TEARS OF JOY
alert( '𩷶'.length ); // 2 , a rare chines hieroglyph


/* 
    Suurogate pair doesn't exist when javascript is created so ther might be handled wrong

    The length property always shows as 2 even visibly only one character exists

    Earlier we have Strig.fromCharCode and String.charCodeAt which wont deal with surrogate pair correctly

    so at modern times we need to use String.codePointAt and String.fromCodePoint to process
    correctly

*/

alert( '𝒳'[0] ); // strange symbols...
alert( '𝒳'[1] ); // ...pieces of the surrogate pair

// individual pari of surrogate pair doesnt have much sense when broken

/* 
Technically, surrogate pairs are also detectable by their codes: 
if a character has the code in the interval of 0xd800..0xdbff, 
then it is the first part of the surrogate pair. 
The next character (second part) must have the code in interval 0xdc00..0xdfff. 
These intervals are reserved exclusively for surrogate pairs by the standard.
*/
alert( '𝒳'.charCodeAt(0).toString(16) ); // d835, between 0xd800 and 0xdbff
alert( '𝒳'.charCodeAt(1).toString(16) ); // dcb3, between 0xdc00 and 0xdfff

// Diacritical and normalization

/* 
    For some of the language base character have specil mark above and below

    For instance, the letter a can be the base character for: àáâäãåā. Most common “composite” character 
    have their own code in the UTF-16 table.
    But not all of them, because there are too many possible combinations.

    so to achieve that we can do like this base character + special mark unicode
*/
alert( 'S\u0307' ); // Ṡ

// this allow flexiblity but two same looking might not be equal
let s1 = 'S\u0307\u0323'; // Ṩ, S + dot above + dot below
let s2 = 'S\u0323\u0307'; // Ṩ, S + dot below + dot above

alert( `s1: ${s1}, s2: ${s2}` );

alert( s1 == s2 ); // false though the characters look identical (?!)


//so to check these type we can use normalize() 

alert( "S\u0307\u0323".normalize() == "S\u0323\u0307".normalize() ); //true