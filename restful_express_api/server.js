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
mongoose.connect('mongodb://localhost:27017/data/db')

// Import our Bear model with which we will interact with our database
var Bear = require('./app/models/bear');


// ROUTES FOR OUR API
// ==============================================
var router = express.Router();

router.use(function(req,res,next) {
  console.log("Something is happening!!!");
  next();
});

router.get('/', function(req,res) {
  res.json({ message: 'Hooray! Welcome to my API' });
});


// router.route allows you to specify multiple functions for different methods on the same route to prevent from redundancy
router.route('/bears')

  .post(function(req,res) {
    console.log('hi from the POST /bears route');

    var bearInstance = new Bear();
    bearInstance.name = req.body.name;

    bearInstance.save(function(err) {
      if (err) {
        console.log("Error saving to db");
        res.send(err);
      }
      else {
        console.log("Succesful bear creation");
        res.json({ message: 'Bear Created!'});
      }
    });

  })

  .get(function(req,res) {
    Bear.find(function(err,bears) {
      if (err) {
        console.log("Error retreving from db");
        res.send(err);
      }
      else {
        console.log("Succesful bear retreival");
        res.json(bears);
      }
    })
  });


router.route('/bears/:bear_id')

  .get(function(req,res) {
    Bear.findById(req.params.bear_id, function(err,bear) {
      if (err)
        res.send(err);
      res.json(bear);
    });
  })

  .put(function(req,res) {

    Bear.findById(req,params.bear_id, function(err,bear) {

      if (err)
        res.send(err);

      bear.name = req.body.name;

      bear.save(function(err) {
        if (err)
          res.send(err);
        res.json({ message: 'Bear updated!' });
      });
    });
  })

  .delete(function(req,res) {
    Bear.remove({
      _id: req.params.bear_id
    }, function(err,bear) {
      if (err)
        res.send(err);

      res.json({ message: 'Succesfully deleted' });
    });
  });



// REGISTER OUR ROUTES
// ==============================================
app.use('/api', router);


// START THE SERVER
// ====================================================
app.listen(port);
console.log('Magic happens at port ' + port);
