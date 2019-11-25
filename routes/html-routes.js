// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
//
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");
var isNotAuthenticated = require("../config/middleware/isNotAuthenticated");

module.exports = function(app) {
//
  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    res.render('index.ejs', {
        user: false
    });
  });

  // =====================================
  // LOGIN ===============================
  // =====================================
  // show the login form
  app.get('/login', function(req, res) {
    // render the page and pass in any flash data if it exists
    res.render('login.ejs', {
      message:    req.flash('loginMessage'),
      user:       req.user || false
    }); 
});

  // =====================================
  // SIGNUP ==============================
  // =====================================
  // show the signup form
  app.get('/signup', isNotAuthenticated, function(req, res) {

    // render the page and pass in any flash data if it exists
    res.render('signup.ejs', { message: req.flash('signupMessage') });
});

  // =====================================
  // PROFILE SECTION =====================
  // =====================================
  app.get('/profile', isAuthenticated, function(req, res) {
    console.log('req.user', req.user);
    res.render('profile.ejs', {
      user : req.user // get the user out of session and pass to template
      //teamdata: data.teams
  });
/*var query = user.findOne({_id: req.user._id}).populate({path: 'teams', populate: {path: 'race', select: 'name'}})
    query.exec(function (err, data) {
      res.render('profile.ejs', {
          user : req.user, // get the user out of session and pass to template
          teamdata: data.teams
      });
    });
    */
  });

  // =====================================
  // ENTER MATCH PAGE ====================
  // =====================================
  app.get('/enter-result', isAuthenticated, function(req, res) {
    var query = teams.find({ user: { $nin: req.user._id } });
    query.exec(function (err, teams) {
      res.render('enter-result.ejs', {
          user:   req.user,
          teams:  teams
      });
    });
  });

//
  /*
  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });
//
  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be 
  //redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });
  */
};