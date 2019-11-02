// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var gameSchema = mongoose.Schema({

    team1Id         : String,
    team2Id         : String,
    team1Score      : Number,
    team2Score      : Number
});

// methods ======================

// create the model for users and expose it to our app
module.exports = mongoose.model('Game', gameSchema);