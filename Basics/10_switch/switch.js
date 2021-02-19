/* 
    switch conditions:
    Switch will be helpful to replace multiple if else in more descriptive way

    switch(x) {
        case 'value1':  // if (x === 'value1')
            ...
            [break]

        case 'value2':  // if (x === 'value2')
            ...
            [break]

        default:
            ...
            [break]
    }
    1) value x striclty compared to case value , if match found execute that case until hit break or continue to next case
    2) If no case is matched then the default code is executed (if it exists).

    IMPORTANT : swich uses strict equality for comparison
*/

let a = 2;
switch (a) {
    case 2:   // swicth perfrom strict equality inside a === 2
        alert("2");
        break; // break is optional 
    case 3:
        alert("3");
        break;
    default:
        alert("Not match found");
}

// expresiion is also possible inside switch & case
let a = '2';
let b = 2;
switch (+a) {
    case b:   // swicth perfrom strict equality inside a === 2
        alert("2"); // 2 runs
        break; // break is optional 
    case 3:
        alert("3");
        break;
    default:
        alert("Not match found");
}

// if we omit break next case start to run until it found break
let a = '2';
let b = 2;
switch (+a) {
    case b:   // swicth perfrom strict equality inside a === 2
        alert("2"); // 2 runs
    case 8: 
        alert("3"); // 3 runs 
        break;
    default:
        alert("Not match found");
}

// There is a possiblity of combing mulitple cases together
let a = '2';
let b = 2;
switch (+a) {
    case 8:
    case b:   // swicth perfrom strict equality inside a === 2
        alert("2"); // 2 runs for both 8 and 2 match
        break;
    default:
        alert("Not match found");
}
