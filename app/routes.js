const divisions = require('./models/division');
const games     = require('./models/game');
const teams     = require('./models/team');
const user      = require('./models/user');
const races     = require('./models/race');

const queryHelper = require('./helpers/queryhelper');

module.exports = function(app, passport) {

  // =====================================
  // HOME PAGE (with login links) ========
  // =====================================
  app.get('/', function(req, res) {
    var query = divisions.find().populate({path: 'teams', populate: {path: 'race', select: 'name'}});
    query.exec(function (err, divisions) {
      var gameQuery = games.aggregate(queryHelper.allGames());
      
      gameQuery.exec(function (err, gameData) {
        console.log('gameData', gameData);
        games.aggregate(gameData.forEach(function (doc){
          teams.findOne({_id: doc.team}).exec(function(err, data){
            console.log('team name', data.name);
            doc["teamname"] = data.name;
          });
        }));
        
        res.render('index.ejs', {
          user : req.user, // get the user out of session and pass to template
          divisions : divisions,
          games: gameData
        });
      });
    });

    /*
    res.render('index.ejs', {
      user : req.user, // get the user out of session and pass to template
      divisions : divisions
    }); // load the index.ejs file
    */
  });

  // =====================================
  // LOGIN ===============================
  // =====================================
  // show the login form
  app.get('/login', function(req, res) {

      // render the page and pass in any flash data if it exists
      res.render('login.ejs', { message: req.flash('loginMessage') }); 
  });

  // process the login form
  app.post('/login', isNotLoggedIn, passport.authenticate('local-login', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));
  // =====================================
  // SIGNUP ==============================
  // =====================================
  // show the signup form
  app.get('/signup', isNotLoggedIn, function(req, res) {

      // render the page and pass in any flash data if it exists
      res.render('signup.ejs', { message: req.flash('signupMessage') });
  });

  // process the signup form
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

  // =====================================
  // PROFILE SECTION =====================
  // =====================================
  // we will want this protected so you have to be logged in to visit
  // we will use route middleware to verify this (the isLoggedIn function)
  app.get('/profile', isLoggedIn, function(req, res) {
    var query = user.findOne({_id: req.user._id}).populate({path: 'teams', populate: {path: 'race', select: 'name'}})
    query.exec(function (err, data) {
      //console.log("user", data)
      //console.log("team data", data.teams)
      res.render('profile.ejs', {
          user : req.user, // get the user out of session and pass to template
          teamdata: data.teams
      });
    });
  });

  // =====================================
  // LOGOUT ==============================
  // =====================================
  app.get('/logout', function(req, res) {
      req.logout();
      res.redirect('/');
  });
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

  // if user is authenticated in the session, carry on 
  if (req.isAuthenticated())
      return next();

  // if they aren't, redirect them to the home page
  res.redirect('/');
}
// route middleware to make sure a user is logged in
function isNotLoggedIn(req, res, next) {

  if (!req.isAuthenticated())
    return next();
  
  res.redirect('/');
}