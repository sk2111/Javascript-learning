/* 
    Custom Events

    In browser we can generate our own events apart from default events

    Event constructor

        A new type of event can be created with Event constructor

        


*/

const event = new Event(type, options)

/* 
    type => 'click' or any own names 'myEvent'

    options => {
        bubbles:true/false,
        cancelable:true/false
    }
    //default both are false


    After creating the event we need to use dispatch event to fire the event

    elem.dispatchEvent(event);

    //To see whether event is genrated from javascript we can use event.isTrusted property



*/

document.addEventListener("hello", function (event) { // (1)
    alert("Hello from " + event.target.tagName); // Hello from H1
});

// ...dispatch on elem!
let event = new Event("hello", { bubbles: true }); // (2)
elem.dispatchEvent(event);


/* 
    The event class is a generic one if we need to create such standard event
    then we need to use 

        UIEvent,MouseEvent,FocusEvent,wheelEvent,keyboardEvent ....

        new MouseEvent('click')

        Using proper event constructor will help us to specify extra information
        associated with the event
        
        For example, in mouse event we can use clientX and clientY
        
*/

let event = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    clientX: 100,
    clientY: 100
});

alert(event.clientX); // 100

/* 
    For our own event we need to use CustomEvent constructor

    new CustomEvent(name,options)

    WE can add any payload inside the details property which will be available on that 
    event 


*/
elem.addEventListener("hello", function (event) {
    alert(event.detail.name);
});

elem.dispatchEvent(new CustomEvent("hello", {
    detail: { name: "John" }
}));

/* 
    Events are generally queued in nature 

    so if click event occurs first it will be executed and after that only it will move 
    to other events like mouse move extra

    But if an event is occuring inside an event then that the inner event is completed
    and outer event is resumed

    So events inside the events are synchronouse in nature


*/
// triggers between 1 and 2 => inner events executes sync mode and outer event resumes after that
document.addEventListener('menu-open', () => alert('nested'));

menu.onclick = function () {
    alert(1);

    menu.dispatchEvent(new CustomEvent("menu-open", {
        bubbles: true
    }));

    alert(2);

};