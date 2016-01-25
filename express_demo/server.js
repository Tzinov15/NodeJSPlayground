/* _____                                  _ ____  
   | ____|_  ___ __  _ __ ___  ___ ___    | / ___| 
   |  _| \ \/ / '_ \| '__/ _ \/ __/ __|_  | \___ \ 
   | |___ >  <| |_) | | |  __/\__ \__ \ |_| |___) |
   |_____/_/\_\ .__/|_|  \___||___/___/\___/|____/ 
     */

/* MIDDLEWARE */
/* Middleware functions are functions that have access to the request object, the response object, and the next middleware function in the applications req-res cycle
 * They are essentially functions that we can "plug" into our app and have them be part of the stack that gets executed on every request
 * Middlware functions can:
 *  Execute any code
 *  Make changes to the request and response objects
 *  End the req-res cycle
 *  Call the next middleware function in the stack
 * If the current middleware function does not end the req-res cycle (returning a response), it must call next() to pass control to the next middleware function
   Otherwise, the request will be left hanging
   Middleware can be attatched to the req-res cycle by calling app.use([path], function(req,res,next)) where you can attach the middleware function to an optional path

   The order in which you define middleware is important. It will execute in the order of the file. 
   So, when a request comes in, it'll hit every single middlware function consecutviely in order from top to bottom until one of the functions returns a response or fails to call next

   Error-handling middleware must have their functions defined with four arguments instead of four ( app.use(function(err,req,res,next)) )
   Even if not all of the objects are used in the defined middleware function (for example next() ) all four arguments must be supplied to maintain the signature
   */

// a third-party middleware for logging stuff
var logger = require('morgan');

// Import the main express module
var express = require('express');

// Express.Router() gives an isolated instance of middleware and routes. It is a mini-application that can only perform middleware and routing
// A router such as the one below acts like middleware, so to include it in our app we must call app.use(router)
var router = express.Router();

// This will import our bird_router.js file which is acting as an instance of a Express.Router() object because in that file we exported the Router object that it created
var birdRouter = require('./bird_router.js');

// Create the Express application by calling the top-level express() function
var app = express();
// The app object has methods for:
//  Routing HTTP Requests (app.METHOD, app.param)
//  Configuring middleware (app.use)
//  Rendering HTML views(app.render)
//  Registering a template engine (app.engine)

var server = app.listen(8000); 
var host = server.address().address;
var port = server.address().port;
console.log("Example app listening at http://%s:%s", host, port)

// tells express to render .ejs pages. Requires installing ejs via npm install ejs
app.set('view engine', 'ejs');

// if the URL that is requested doesn't belong to any paths that have been registered through app.get('/some_path') (actual valid routes) then express checks if its static
// in this case, requested paths that haven't been registered are checked against the /public folder. If file exists, serve it up automatically
app.use(express.static(__dirname + '/public'));


// attach our third-party logging middleware to our apps middleware
app.use(logger('dev'));

// register a callback / listening function to handle requests to homepage
router.get('/', function(req,res) {
  // The res.render method will automatically look for a views/index.ejs file
  //    the ".ejs" is searched for because we called set 'view engine' to ejs above
  //    the "views/" is searched for because thats what express does
  res.render('index');
});

// register our middleware (in this case our Router object used for routing and any additional middleware) to our main app
app.use(router);

// register our external bird routing router for any routes that start with /bird
app.use('/birds', birdRouter);
