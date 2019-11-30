//we import passport packages required for authentication
const passport      = require("passport");
const LocalStrategy = require("passport-local").Strategy;

//We will need the models folder to check passport agains
var db = require("../models");

// =========================================================================
// LOCAL SIGNUP ============================================================
// =========================================================================
// we are using named strategies since we have one for login and one for signup
// by default, if there was no name, it would just be called 'local'

passport.use('local-signup', new LocalStrategy(
  {
    emailField : 'email',
    passwordField : 'password',
    usernameField : 'username',
    passReqToCallback : true // allows us to pass back the entire request to the callback
  },
  function(req, username, password, done) {
    // asynchronous
    // User.findOne wont fire unless data is sent back
    /*process.nextTick(function() {
      // find a user whose username is the same as the forms email
      // we are checking to see if the user trying to login already exists
      User.findOne({ 'username' :  username }, function(err, user) {
        // if there are any errors, return the error
        if (err)
            return done(err);

        // check to see if theres already a user with that email
        if (user) {
            return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
        } else {
          // if there is no user with that email
          // create the user
          var newUser            = new User();

          // set the user's local credentials
          newUser.email       = req.body.email;
          newUser.username    = username;
          newUser.password    = newUser.generateHash(password);

          // save the user
          newUser.save(function(err) {
              if (err)
                  throw err;
              return done(null, newUser);
          });
        }
      });    
    });*/
  }
));

// =========================================================================
// LOCAL LOGIN =============================================================
// =========================================================================
passport.use('local-login', new LocalStrategy(
  {
    usernameField: "username"
  },
  function(username, password, done) {
    // When a user tries to sign in this code runs
    db.User.findOne({
      where: {
        username: username
      }
    }).then(function(dbUser) {
      // If there's no user with the given email
      if (!dbUser) {
        return done(null, false, {
          message: "Incorrect username."
        });
      }
      // If there is a user with the given email, but the password the user gives us is incorrect
      else if (!dbUser.validPassword(password)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      // If none of the above, return the user
      console.log('login successfull!');
      return done(null, dbUser);
    });
  }
));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;