/* 
    Events change :

        The changing event triggers when the input finished changing

        For text inputs it means the event will occur after the element loses focus

        <input type="text" onchange="alert(this.value)">
        <input type="button" value="Button">

        The event will wont occurs until the element loses focus  , say in above example
        the input onchange will not show alert until it loses focus

        But for select and radio/checkbox it event is occurs right after selection
    
    Event input: 
        
        The event input will trigger after every value chnage by the user

        Note : This event not only works for keyboard but also it works for 
        copy/paste etc (The vent wont trigger for arrow keys )

    Event cut/copy/paste:

        The events cut/copy/paste will ocuur while their corresponsing actions

        They belong to clipboard interface and provide access to the class that is being 
        copied or pasted

          input.oncut = input.oncopy = input.onpaste = function(event) {
            alert(event.type + ' - ' + event.clipboardData.getData('text/plain'));
            return false;
         };
*/

/* 
    Form event submit

        To submit the form to the server there are two main ways 
        
        1) The first is to click the submit button 
        2) The second is to press enter on an input field

    In Javascript way

        In Javascript point fo view we can submit it using the method submit()

        let form = document.createElement('form');
        form.action = 'https://google.com/search';
        form.method = 'GET';

        form.innerHTML = '<input name="q" value="test">';

        // the form must be in the document to submit it
        document.body.append(form);

        form.submit();




*/