/* 
    static methods and static properties

    We can attach a method to the class itself not to the prototype

    such methods are called as static methods

*/

class Article {
    constructor(title, date) {
        this.title = title;
        this.date = date;
    }
    static compare(a, b) {
        return a.title - b.title;
    }
}

// can be also written as

class Article {

}

Article.compare = function (a, b) {
    return a.title - b.title;
}

// this will point to the class itself because thta is the caller 


//static properties 

//static properties are also possible 

class Test{
    static example = "hello"
}

console.log(Test.example);
Test.example ="samplerrr"


// static method and static fields are also inherited to child classes


/* 
    It works like 

    // For normal methods
    child.prototype.__proto = parent.prototype

    //for static method and fields
    
    child.__proto__ = parent

*/