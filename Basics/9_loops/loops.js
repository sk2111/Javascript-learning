/*
    Loops : Loops helps us to repeat the same code multiple times

    Types :
    1) While loops
    2) do while loops
    3) for loops
*/

// while loops -> Can be helpful when we dont know the length in prior

let condition = 1 > 2 ;
while(condition){
  // loop body
}

// While the condition is truthy the loop will executes
// While loop converts to boolean if we give numbers,string etc

//do while -> checks for the condition at last

do{
 // loop body will be executed once and check condition and repeat again
}
while(condition);

/*
    for loops

    for(begin;condition;step){
        loop body
    }

    How it works?

    begin -> executes only once while entering into loops
    condition -> checked before each iteration , if false stop the loop
    body -> runs again and again until condition is truthy
    step -> run after body on each iteration

    // General algorithm

    1) Begin executed once
    2) check condition 
    3) go to body 
    4) step -> repeat from 2


    We can skip any parts in for loops 

*/

let i = 2;
for(;i<3;i++){
        
}

let i = 2;
for(;i<3;){
  i++;
}

for(;;){
    //infinite loop
    break;
}

// Breaking the loop

/* 
    Normally loop exists when the condition is falsy but we can force
    it by using special directive called break
    
*/

while(true){
    break;
}

//once break is hit it will come out of loop and start executing next line

// continue the loop

/*
    sometimes its usefult to skip the current iteration and move to next one

    we can use continue directive there

*/

for(let i=0;i<10;i++){
    if(i%2 === 0) continue;
    alert(i) ; // 1 ,3 5, 7,9
}

// continue directive stops executing the body and passes control to next iteration

// IMPORATNT LABELs for break and continue
// use case
// In nested for loops if we use break in inner loop it wont stop outer loops
// but what if i want to stop the outer loop
// we can use label break or continue 

for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {
  
      let input = prompt(`Value at coords (${i},${j})`, '');
  
      // what if we want to exit from here to Done (below)?
      break ; // not work only inner loops gets break
    }
}
alert('Done!');

// solution 
outer:for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {
  
      let input = prompt(`Value at coords (${i},${j})`, '');

      break outer; // 
    }
}

// we can use labels for continue as well
