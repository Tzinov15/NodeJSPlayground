// server.js (Express 4.0)
// In Express 4.0 middleware that used to come (via Connect) is removed so it must be npm-installed and imported manually


/* Import and set up tools that we will need */
/*=================================================================*/

/* Main express module*/
var express = require('express');

/* Constructor that creates the main express app */
var app = express();

/* Set port number */
var port = process.env.PORT || 8080;

/* MongoDB object modeling library */
var mongoose = require('mongoose');

/* Authentication middleware */
var passport = require('passport');

/* Allows for passing session flashdata messages? */
var flash = require('connect-flash');

/* Used for debugging */
var morgan = require('morgan');

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

/* Import config data about our db */
var configDB = require('./config/database.js')

// Configuration
// =================================================================
/* Connect our db to our url specified in the config file */
mongoose.connect(configDB.url)


// Set up Express app
// =================================================================
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms

app.set('view engine', 'ejs'); // set up ejs for templating


// required for passport
app.use(session({ secret: 'hellothere'}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session


// routes =================================================================
require('./app/routes.js')(app, passport); // load our routes an pass in our app and fully configured passport object


// launch =================================================================
app.listen(port);
console.log('The magic happens at ' + port);
