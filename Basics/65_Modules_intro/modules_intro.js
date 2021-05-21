/* 
    Previously there was no module system in javascript because scripts were small 

    But as of now we started shipping more and more code to frontend so there is a need
    for module system 

    Previosult there was differen types of module system implemented like commonJs,AMD,UMD

    But now javascript has its own module system 


    Whats is module ?

    => Module is a file contains javscript
    => Modules use export/ import to export and import code from different modules
    => We can use <script type="module"></script> to specify we are using module
    => Modules always "use strict";
    => Have module level scoping and it does not pollute global scope
    => A module is evaluated once and cached and resused export when another time called
    => "this" is undefined in modules
    => Modules are deferred by default 
    => import.meta.url contains the information of the current import

    => Async works for modules in inline script
    => External module script with same src run only once 
    => External module script fetched from another origin require CORS header
        => That means the Access-Control-Allow-Origin need to be supplied
    
*/
// 📁 admin.js
export let admin = {
    name: "John"
  };  // Module is called only once and all export import is cached and reused

// 📁 1.js
import {admin} from './admin.js';
admin.name = "Pete";

// 📁 2.js
import {admin} from './admin.js';
alert(admin.name); // Pete 


/* 
 Build Tools

 In real production time we often use tools like webpack 
 They give more control over how the file is resolved extra 

 => They provide advanced features like tree shaking (remove unnecessary export)
 => Development specific statements like console and debbuger removed
 => Code will be Minified and helps to give to one big javascript bundel.js file 

 
*/