// app/routes.js

module.exports = function(app, passport) {

  // ================================
  // HOME PAGE
  // ================================
  app.get('/', function(req,res) {
    res.render('index.ejs');
  });

  // ================================
  // LOGIN PAGE
  // ================================
  // show the login form
  app.get('/login', function(req,res) {
    res.render('login.ejs', { message: req.flash('loginMessage') });
  });

  // process the login form
  // app.post('/login', do all our passport stuff here);

  // ================================
  // SIGNUP PAGE
  // ================================
  // show the signup page
  app.get('/signup', function(req,res) {
    res.render('signup.ejs', { message: req.flash('signupMessage') })
  });

  // process the signup form
  // app.post('/signup', do all our passport stuff here);
  
  // ================================
  // PROFILE SECTION
  // ================================
  // we will want ths protected so you have to be logged in to visit
  // we will use route middleware to verify this (the isLoggedIn function)
  // Also a note on what the following line of code does:
  //  the app.get method in Express allows for additional middleware functions to be passed in as callbacks (in this case isLoggedIn).
  //  In this case, isLoggedIn will be first invoked, and then the function that is passed in as the third parameter (second callback) will be called
  //  Also, any functions passed in as callbacks that will serve as middleware can call next('route') which will by pass the remaining callbacks in the current route. 
  //  In this case, if isLoggedIn called next('route'), the function here that is being passed in as a third parameter will never be called. Instead, control will pass //  to the next matching route in the middleware
  //  This mechanism of passing in additional middleware to a route can be used to impose pre-conditions on a route
  //  In this case, we are only calling res.render('profile.ejs') if the function isLoggedIn succesfully verifies that the user is logged in (in which case it will call next())
  //  Otherwise, the isLoggedIn function will redirect the user to the home page (and not show them the profile page)
  app.get('/profile', isLoggedIn, function(req,res) {
    res.render('profile.ejs', {
      user: req.user // get the user out of the session, pass it to the template
    });
  });

  // ================================
  // LOGOUT
  // ================================
  app.get('/logout', function(req,res) {
    req.logout();
    res.redirect('/');
  });
};

// route middleware to make sure a user is logged in
function isLoggedIn(req,res,next) {

  // if user is authenticated in the session, carry on
  if (req.isAuthenticated())
    return next();

  res.redirect('/');
}
