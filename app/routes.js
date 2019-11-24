//const mongoose = require('mongoose');
//const Schema = mongoose.Schema;

/*
const divisions = require('./models/division');
const games     = require('./models/game');
const teams     = require('./models/team');
const user      = require('./models/user');
const races     = require('./models/race');

const queryHelper = require('./helpers/queryhelper');
const gameDataHelper = require('./helpers/game-data-helper');
*/
module.exports = function(app, passport) {

  // =====================================
  // HOME PAGE (with login links) ========
  // =====================================
  app.get('/', function(req, res) {
    //var query = divisions.find().populate({path: 'teams', populate: {path: 'race', select: 'name'}});
    /*query.exec(function (err, divisions) {
      var gameQuery = games.aggregate(queryHelper.allGames());
      
      gameQuery.exec(function (err, gameData) {
        //console.log('gameData', gameData);
        
        res.render('index.ejs', {
          user:       req.user,
          divisions:  divisions,
          games:      gameData
        });
      });
    });
    */
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
        user:       req.user
      }); 
  });

  // process the login form
  app.post('/login', isNotLoggedIn, passport.authenticate('login', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
  }));
 
  /*
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
  app.get('/profile', isLoggedIn, function(req, res) {
    var query = user.findOne({_id: req.user._id}).populate({path: 'teams', populate: {path: 'race', select: 'name'}})
    query.exec(function (err, data) {
      res.render('profile.ejs', {
          user : req.user, // get the user out of session and pass to template
          teamdata: data.teams
      });
    });
  });

  // =====================================
  // ENTER MATCH PAGE ====================
  // =====================================
  app.get('/enter-result', isLoggedIn, function(req, res) {
    var query = teams.find({ user: { $nin: req.user._id } });
    query.exec(function (err, teams) {
      res.render('enter-result.ejs', {
          user:   req.user,
          teams:  teams
      });
    });
  });

  
  // process the signup form
  app.post('/enter-result', isLoggedIn, function(req, res) {
    gameDataHelper.storeGameData(req.body, function(success, gameId) {
      console.log('game data saved', success);
      if (success) {
        /*var query = teams.find({ user: { $nin: req.user._id } });
        query.exec(function (err, teams) {*/
          /*res.render('game.ejs'/*, {
            success: success, 
            gameId: gameId,
            user: req.user,
            teams:  teams
          });
        }*//*);
        return;
      }

      // If game data was not successfully saved
      var query = teams.find({ user: { $nin: req.user._id } });
      query.exec(function (err, teams) {
        res.render('game.ejs', {
          success: success, 
          gameId: gameId,
          user: req.user,
          teams:  teams
        });
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
*/
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
