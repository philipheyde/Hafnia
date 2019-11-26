// Requiring necessary npm packages
const express     = require('express');
const bodyParser  = require('body-parser');
const session     = require('express-session');

// Requiring passport as we've configured it
const passport    = require("./config/passport");

// Setting up port and requiring models for syncing
const PORT        = process.env.PORT || 8080;
const db          = require("./models");

const app         = express();
const path        = require('path');
const flash       = require('connect-flash');

//var createError = require('http-errors');
//var cookieParser = require('cookie-parser');
const logger = require('morgan');

// view engine setup
app.set('views', path.join(__dirname, 'views/pages'));

//app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "ilovescotchscotchyscotchscotch", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash()); // use connect-flash for flash messages stored in session

// Set view engine
app.set('view engine', 'ejs');

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

//app.use(morgan('dev')); // log every request to the console
//app.use(cookieParser()); // read cookies (needed for auth)
//app.use(bodyParser()); // get information from html forms

// launch ======================================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});

/*
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
*/
module.exports = app;
