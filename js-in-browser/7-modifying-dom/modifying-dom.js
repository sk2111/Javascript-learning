/* 
    DOM modification is the key to creating live pages

    Creating an element

        => document.createElement(tag) //create an element 
        => document.createTextNode(text) //create an text node

    Insertion methods

        => elem.append() //appends nodes or strings at the end of node
        => elem.prepend() //insert nodes or strings at the beginning of node
        => elem.before() //insert nodes or strings at the before node
        => elem.after() //insert nodes or strings at the after node
        => elem.replaceWidth(...nodes or strings) //replaces nodes or strings with given nodes or string

        // These will insert the string as strings and node as HTML 

        //To Insert html we have
        elem.insertAdjacentHTML(where,html)

        "beforebegin" – insert html immediately before elem,
        "afterbegin" – insert html into elem, at the beginning,
        "beforeend" – insert html into elem, at the end,
        "afterend" – insert html immediately after elem.

        //To remove node
        node.remove()

        //clone Node 
        elem.cloneNode(boolean) creates a deep clone of the element
        
        



*/  