// load the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// define the schema for our user model
var gameSchema = mongoose.Schema({

    team1: {
        type: Schema.Types.ObjectId, 
        ref: 'Team',
        required: true
    },
    team2Id: {
        type: Schema.Types.ObjectId, 
        ref: 'Team',
        required: true
    },
    team1Score: {
        type: Number,
        required: true,
        default: 0
    },
    team2Score: {
        type: Number,
        required: true,
        default: 0
    }      
});

// methods ======================

// create the model for users and expose it to our app
module.exports = mongoose.model('Game', gameSchema);