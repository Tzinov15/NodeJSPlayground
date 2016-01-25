// import our greetings.js file
// What this is really doing is setting the variable greetingVariable equal to the module.exports object that gets set in greetings.js
var greetingVariable = require('./greetings.js');

// invoke the two commands that are contained inside the greetingVariable object
greetingVariable.sayHelloInEnglish();
greetingVariable.sayHelloInSpanish();


// import our userGreeter.js file
// What this is really doing is setting the varaible userGreeterVariable equal to module.exports from userGreeter.js which is actually a function
var userGreeterVariable = require('./userGreeter.js');

// invoke the command that got exported directly from userGreeter.js
userGreeterVariable("alex", 20);
