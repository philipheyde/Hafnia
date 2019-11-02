// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var teamSchema = mongoose.Schema({

    name            : String,
    coachId         : String,
    divisionId      : String,
    posInDivision   : Number
});

// methods ======================

// create the model for users and expose it to our app
module.exports = mongoose.model('Team', teamSchema);