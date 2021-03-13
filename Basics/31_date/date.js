/* 
    Javascript has Date object ,

    It stores date ,time and has methods to work on it

    we can also use it to store or modify the time,to measure time
    
*/

//creation


let date = new Date(); // without arguments
alert(date);// shows stored current date and time


// new Date(milliseconds)

/* 
    => creates an date object with the time equal to number of milliseconds (1/1000 of a second)
    passed after the Jan 1st of 1970 UTC+0

    =>For dates before Jan 1st 1970 then we need to pass negative milliseconds arguments
*/

let test1 = new Date(0);// 01.01.1970 UTC+0
let test2 = new Date(24 * 3600 * 1000);// 02.01.1970 UTC+0

// new Date(dateString)

let date3 = new Date("2017-01-26");

alert(date);

/* 
    Here date is only passed so time will be assumed
    (time assumed to midnight of GMT) and adjusted according to local time zone

    // so the result can be like
    // Thu Jan 26 2017 11:00:00 GMT+1100 (Australian Eastern Daylight Time)
    // or
    // Wed Jan 25 2017 16:00:00 GMT-0800 (Pacific Standard Time)

*/


// new Date(year,month,date,hours,minutes,seconds,ms)

/* 
    Year => 2013 =>must be four digit 
    month => 0 (Jan) .... 11(Dec)
    date => actually the day of month start from 1 (1 assumed if not provieded)
    hours,minutes,seconds,ms => assumed 0 if not present 
*/

new Date(2011, 0, 1, 0, 0, 0, 0); // 1 Jan 2011, 00:00:00
new Date(2011, 0, 1); // the same, hours etc are 0 by default

// the maximum precision is of 1ms

let date = new Date(2011, 0, 1, 2, 3, 4, 567);
alert(date); // 1.01.2011, 02:03:04.567

//Access date components

/* 
    getFullYear()
      => Get the year in 4 digits
    getMonth()
      => Get the month from 0 to 11
    getDate()
      => Get the day from 1 to 31
    getHours(),getMinutes(),getSeconds(),getMilliseconds()
      => gettting min,secon,milliseconds
    getDay()
      => 0 (sunday) 6 for saturday
    getTime()
      => returns the milliseconds after january 1st of 1970
    getTimeZoneOffset()
    The above methods are for local time zone variants

    The same methods are avaliable for universal time zone as well

    getUTCFullYear()
    getUTCMonth()
    (add UTC after get)

*/

/* 
    We can also set date Objects (helpful to evaluate future dates) 

    setFullYear(year, [month], [date])
    setMonth(month, [date])
    setDate(date)
    setHours(hour, [min], [sec], [ms])
    setMinutes(min, [sec], [ms])
    setSeconds(sec, [ms])
    setMilliseconds(ms)
    setTime(milliseconds) (sets the whole date by milliseconds since 01.01.1970 UTC)
    Every one of them except setTime() has a UTC-variant, for instance: setUTCHours().

*/
let today = new Date();

today.setHours(0);
alert(today); // still today, but the hour is changed to 0

today.setHours(0, 0, 0, 0);
alert(today); // still today, now 00:00:00 sharp.


/* 
    Autocorrection feature of dates

    => when we passed out of range values date object takes care of it

    let date = new Date(2013, 0, 32); // 32 Jan 2013 ?!?
    alert(date); // ...is 1st Feb 2013!

    Lets say we need to add 2 days to 28 feb 2016 / It may be mar 1 or mar 2 depend on leap year

    we dont need to think of all those edge cases

*/


let date = new Date(2016, 01, 28);
date.setDate(date.getDate() + 2);

alert(date); //1Mar 2016

// we can also set zero or negative numbers
// In that case previous year date is assumed
let date = new Date(2016, 0, 2); // 2 Jan 2016

date.setDate(1); // set day 1 of month
alert(date);

date.setDate(0); // min day is 1, so the last day of the previous month is assumed
alert(date); // 31 Dec 2015


// conversion of dates

let date = new Date();

alert(+date); // output in milliseconds as of date.getTime()

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let doSomething = i * i * i;
}

let end = new Date();

alert(end - start);

// For testing resonss we can also use Date.now() => it returns milliseconds

let date = Date.now();

alert(+date); // output in milliseconds as of date.getTime()

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let doSomething = i * i * i;
}

let end = Date.now();

alert(end - start);

/* 
    Date.parse from a string

    The method date.parse(str) can read a date from a string

    The string format should be YYYY-MM-DDTHH:mm:ss.sssZ

    YYYY-MM-DD => year,month,day
    T=> is a delimiter character
    HH:mm:ss.sss - is the time:hours,minutes,seconds,milliseconds
    The optional Z part denotes the time zone format +-hh:mm . 
      Single letter z means UTC+0

    shorter variants also possible
    
    yyyy-mm-dd 
    yyyy-mm
    yyyy

    Date.parse(str) parse the given string and returns the timestamp in milliseconds

*/


let ms = Date.parse('2012-01-26T13:51:50.417-07:00');

alert(ms); // 1327611110417  (timestamp)

let date = new Date(ms)
console.log(date)