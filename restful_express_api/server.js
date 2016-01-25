// BASE SETUP
// ===============================================
// import the express module
var express = require('express');

// create the express app
var app = express();

// import the bodyParser module
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

// attach the bodyParser middleware so that any request bodies that might have POST parameters can be parsed as json
// will populate the req.body object
app.use(bodyParser.json());


var port = process.env.port || 8000;

// import mongoose package
var mongoose = require('mongoose');
// connect to our remote mongodb database on modulus
mongoose.connect('mongodb://atzinov:password1@apollo.modulusmongo.net:27017/Tyx8yret')


// ROUTES FOR OUR API
// ==============================================
var router = express.Router();

router.get('/', function(req,res) {
  res.json({ message: 'Hooray! Welcome to my API' });
});



// REGISTER OUR ROUTES
// ==============================================
app.use('/api', router);


// START THE SERVER
// ====================================================
app.listen(port);
console.log('Magic happens at port ' + port);
