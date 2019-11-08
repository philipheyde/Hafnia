// load the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// define the schema for our user model
var gameSchema = mongoose.Schema({

    /*season: {
        type: Schema.Types.ObjectId, 
        ref: 'Season',
        required: true
    },*/
    date: Date,
    teams: [{
        type: {type: String, required: true},
        team: { type: Schema.Types.ObjectId, ref: 'Team', required: true },
        score: Number,
        casualties: {
            bh: {type: Number, default: 0, required: true},
            si: {type: Number, default: 0, required: true},
            kills: {type: Number, default: 0, required: true},
        },
        winner: Boolean
    }],
    winner: {
        type: String,
        margin: Number
    },
    fans: {
        type: Number,
        required: true,
        default: 0
    },
    spectators: {
        type: Number,
        required: true,
        default: 0
    },
    played: Boolean
});

// methods ======================

// create the model for users and expose it to our app
module.exports = mongoose.model('Game', gameSchema);