// import express
var express = require('express');

// use express.Router to create an individual routing mini-app to use
var router = express.Router();

// basic get route for /firstbird
router.get('/firstbird', function(req,res){
  res.send('This is route for the first bird');
});

// basic get route for /secondbird
router.get('/secondbird', function(req,res){
  res.send('This is route for the second bird');
});

// export the router object so that we can use it as middleware it seperate files
// by directly setting the module.exports value like this, what we are doing is saying:
//  any other file that wishes to import bird_router.js (by calling require(./bird_router.js)) will as a result receive this object (in this case our router object)
module.exports = router;
