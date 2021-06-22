/* 
    The html forms will be avaliable in the special
    property called document.forms

    Inside the forms we will have form elements 

    <form name="my">
        <input name="one" value="1">
        <input name="two" value="2">
    </form>

*/

let form = document.forms.my;
console.log(form.elements.one);


/* 
    Input Elements

    The input elements value can be extracted from the value property

    Textarea also we can extract the values from the value property

    Select options

        For select tag we can extract / set the values using three properties

        select.value
        select.selectedIndex
        select.options[1].selected = true

    For options we have 
        option.selected => is option selected
        option.index => option index
        option.text => Text of the option
*/


/* 
    Focus / blur

    Focus is when the element is higlight and ready to accept value

    Generally when we press tab the focus of the control will change or jump from
    one to another

    onfocus and onblur events are there so when focus/ blur happens we can handle the 
    input accordingly

    Methods

        Programmatically we have elem.focus() & elem.blur() to set or remove the focus of the
        element
    
    By default not all elements are focusable like div,span are not focussed

    IF we need to add focus to such inputs then we can use tabindex attribute
    to make the element focussable

    Event delegation

        focus/blur events generally dont bubble but we can use capture phase to ork on parent node

        But cleaner way would be to use focusin focusout events which is similar to focus/blur
        but these events will bubble


    The current focussed element will be present in document.activeElement

*/