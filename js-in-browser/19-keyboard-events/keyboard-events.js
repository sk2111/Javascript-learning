/* 
    keyborad events

    The keyboard events occurs when user interact using the physical or virtual keyboard

    Note : Using oninput & onchange will be most reliable way of handling keyboard change events
    We should use keyboard events when we really want keyboard. For example, to react on hotkeys or special keys.

    Because keyborad specific events such as keydown,keyup will not work for copy paste value

    Keyboard events will be helpful to find all the events associated with the keyboard 
    like keydown,keyup along with any special keys is pressed or not

    keydown/keyup 
        when keydown/up event occurs when the key is pressed or released

    event.code and event.key

        => event.key will give the exact character may be caps or small depend upon shift pressed
            or not
        => event.code will give the key value according to the key physical location i keyboard

        Each has it own pros and cons so we may need to use which fits better in use case

            => event.code works well for different os since it depends on the physical layout
            => event.key will work better for different physical layout keys

        For special characters mostly key and code will be the same

*/
document.addEventListener('keydown', function (event) {
    if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
        alert('Undo!')
    }
});

/* 
    Auto repeat 

    If a key is pressed for a ling time then the autorepeat will starts to occurs

    the keydown event triggers again and again and at finally the keyup event will happen

    For events triggered by auto repeat , the event has event.repeat property set to true

*/

/* 
    Default Actions

    There are many default broswer actions for keyboard

    For instance 

        A character appears on the screen
        A character is deleted(Delete key)
        The page is scrolled (pageDown key)
        The browser save page dialog (ctrl + S)

    When we use event.preventDefault() on the keydown most of the default actions will be 
    cancelled 


    <script>
    function checkPhoneKey(key) {
    return (key >= '0' && key <= '9') || ['+','(',')','-'].includes(key);
    }
    </script>
    <input onkeydown="return checkPhoneKey(event.key)" placeholder="Phone, please" type="tel">


    But rather altering the broswer behaviour on default we should apply post validation using 
    onChange or orInput 

*/