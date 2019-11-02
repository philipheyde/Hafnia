// load the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// define the schema for our user model
var teamSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId, 
        ref: 'User', 
        required: true
    },
    division: {
        type: Schema.Types.ObjectId,
        ref: 'Division',
        required: true
    },
    posInDivision: {
        type: Number,
        required: true
    }
});

// methods ======================

// create the model for users and expose it to our app
module.exports = mongoose.model('Team', teamSchema);