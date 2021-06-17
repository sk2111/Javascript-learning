/* 
    Event Delegation

    Capturing and Bubbling allow us to implement one of the event pattern called as event delegation

    Instead of adding event listner to each the node to perfom similar action we can add a common listener 
    to an ancestor and from event.target we can get the actual place the event occured

    if we have a parent div which enclose lot of child divs
    and while clicking on the child div we need to change color
*/

elemDiv.onclick = (event) => {
    let target = event.target;

    if (target.tagName === 'div') {
        //then do our changes here
    }
}

/* 
    But in the above method sometimes the child div has its own child span strong etc and we might 
    miss the actual target to highlight 

    To achieve that we have few methods

*/

elemDiv.onclick = (event) => {
    let parentDiv = even.target.closest('div'); //returns nearest matching ancestor
    if (!parentDiv) return;
    if (elemDiv.contains(parentDiv)) { // necessary to check properly when ancestor enclose the child 
        //then do our functionality 
    }
}

/*
    Behaviour pattern example

    We can also use event delegation to add behaviours to elements declaratively
    with special attributes

    <input type="button" value="1" data-count/>
    <input type="button" value="2" data-count/>


    document.addEventListener('click',(event)=>{

        if(event.target.dataset.count != undefined){
            document.title = event.target.value;
        }
    })
*/