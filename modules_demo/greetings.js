/*
 __  __           _       _           
|  \/  | ___   __| |_   _| | ___  ___ 
| |\/| |/ _ \ / _` | | | | |/ _ \/ __|
| |  | | (_) | (_| | |_| | |  __/\__ \
|_|  |_|\___/ \__,_|\__,_|_|\___||___/


A module encapsulates related code into a single unit of code. 
When creating a module, this can mean moving all related functions into a file


In NodeJS, files and modules have a one-to-one correspondance (each file has its own module). Each file has its own unique module object
This module object includes the property module.exports which is how the module system for NodeJS works

At the beginning of each file, exports and module.exports are both references to the same empty object
When a certain file gets required ( such as require(./greetings.js) ), then the module.exports object within that file gets returned

When it comes to exporting functionality from a file via module.exports, two different options are possible:
  >> Adding individual entities to the module.exports object as attributes (exports.someFunction = function() {}) which allows for exporting of multiple functions/variables
     In this case, module.exports acts like a contianer of exported values. When you require the file, you will be given an object containing all of these values
  >> Overwriting the module.exports object itself and setting it equal to a function (often used to have a module act as a self-contained constructor)
     In this case, module.exports no longer points to the empty object, but to an entirely new entity that you set for it
     Ex: module.exports = function createUser(name){}. In this case, when you require the file, you will be given a function that can be called directly
*/
exports.sayHelloInEnglish = function() {
  console.log('Hello');
}

exports.sayHelloInSpanish = function() {
  console.log('Hola');
}















/*
 * REFERENCES:
 * http://www.sitepoint.com/understanding-module-exports-exports-node-js/
 * http://www.hacksparrow.com/node-js-exports-vs-module-exports.html
 * https://nodejs.org/api/modules.html
 * http://stackoverflow.com/questions/7137397/module-exports-vs-exports-in-node-js
 */
