/* 
    Attributes and Properties

    When the broswer load the web page it parses the html and generates DOM objects from it
    For element node most standard attributes automatically become part of DOM object 

    For eg : <body id="page"> , then body.id has page in it
*/

/* 
    DOM properties

    Node and elements have by default have many properties which will come from Node or Element
    Base class 

    We can also add our own property to it as well because they are just javascript objects
*/

document.body.customData = { name: 'sathish ' }

console.log(document.body.customData.name);//sathish

//we can add a method as well

document.body.hello = () => {
    return this.tagName;
}

document.body.hello(); // BODY

// We can even add properties to Element prototype also
Element.prototype.sayHi = function () {
    alert(`Hello, I'm ${this.tagName}`);
};

document.documentElement.sayHi(); // Hello, I'm HTML
document.body.sayHi(); // Hello, I'm BODY


/* 
    HTML Attributes

    In HTML, tags may have attributes , when the broswer parses the HTML it creates the
    DOM object and it recognize the standard attributes and keep as a property in DOM object
    
    standard property example are id,class etc

    Note : Standard properties vary between element type because each element has its own base class


    But what happens when we try to introduce own attribute which is not in standard ?


    That particular attribute will not be added to the DOM object as a property

    Then how can we access it ?
        We need to use methods like
            getAttribute(name)
            setAttribute(name,value)
            hasAttribute(name)
            removeAttribute(name)
            attributes => will give a list of all attributes
*/

/* 
    <body id="helllo" something="test"></body>

*/

//Non standard attributes are not a part of properties
document.body.id;//hello
document.body.something; //undefined

//we need to use attribute methods to access
document.body.getAttribute('something'); //test 

/* 
    HTML Attributes are case-insensitive
    Attribute values are always string
*/

/* 
    Property-attribute synchronization


    When we cahnage STANDARD attribute its corresponding object property gets auto-updated
    (few exceptions are there)



*/

let input = document.querySelector('input');

// attribute => property
input.setAttribute('id', 'id');
alert(input.id); // id (updated)

// property => attribute
input.id = 'newId';
alert(input.getAttribute('id')); // newId (updated)

//But for input value this wont work
//Setting the attibute will change the prperty value but vice versa is not true

// attribute => property
input.setAttribute('value', 'text');
alert(input.value); // text

// NOT property => attribute
input.value = 'newValue';
alert(input.getAttribute('value')); // text (not updated!)

//ths may be useful feature because use can change the value but we can get the original
// value from DOM attribute


/* 
    DOM properties are typed


    Few of the DOM properties are typed and they are not always string

    NOte DOM attributes are always string value


    Fr eg if we try to read the checkbox checked property then we end it in boolen value

    inputElem.checked ; // Boolean

    For style properties we will get an style object but attribute value will be string

    inputElem.style; // Object 

    At few exceptions DOM Propety and attribute can be different value

    For example href in anchor tag will always give same value in attribute methods

    while in DOM object it will always give the full path

    <a id="a" href="#hello">link</a>
    <script>
    // attribute
    alert(a.getAttribute('href')); // #hello

    // property
    alert(a.href ); // full URL in the form http://site.com/page#hello
    </script>
*/


/* 
    Non standard attributes and dataset

    When writing HTML, we use a lot of standard attributes and also we need sometimes introduce

    some of the non standard attributes for our purpose 


    for example

    <div id="" custom-name="sathish"></div>

*/

//we can keep data in attribute and insert to show to user
const ref = document.querySelector('[custom-name]');

const userName = ref.getAttribute('custom-name');
ref.innerHTML = userName;

//we can use for custom styling 
/*
<style>
   styles rely on the custom attribute "order-state"
  .order[order-state="new"] {
    color: green;
  }

  .order[order-state="pending"] {
    color: blue;
  }

  .order[order-state="canceled"] {
    color: red;
  }
</style>

<div class="order" order-state="new">
  A new order.
</div>

<div class="order" order-state="pending">
  A pending order.
</div>

<div class="order" order-state="canceled">
  A canceled order.
</div>

*/

/* 
  Using Attribute way to apply styles will be easir to maintain
  we can easily apply or change the styles like

  elem.setAttribute('order-state','newState');

  We can use custom properties but there is a problem

  what if HTML spec adds new attribute that match with our  custom attribute then
  we will end up in problem so to sort it out

  we have data- attribute

  we can write our custom attribute with data- preappended with it 

  <div data-name="sathish" data-old-name="meow"></div> 

  //In dom object it will be avaliable as 
    divElem.dataset.name
    divElem.dataset.oldName //camelcase for dash seperated names


    <style>
    .order[data-order-state="new"] {
        color: green;
    }

    .order[data-order-state="pending"] {
        color: blue;
    }

    .order[data-order-state="canceled"] {
        color: red;
    }
    </style>

    <div id="order" class="order" data-order-state="new">
    A new order.
    </div>

    <script>
    // read
    alert(order.dataset.orderState); // new

    // modify
    order.dataset.orderState = "pending"; // (*)
    </script>
*/  