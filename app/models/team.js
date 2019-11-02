// load the things we need
var mongoose = require('mongoose');
const Schema = mongoose.Schema;


// define the schema for our user model
var teamSchema = mongoose.Schema({

    name            : String,
    coach           : {type: Schema.Types.ObjectId, ref: 'User', required: true},
    divisionId      : {type: Schema.Types.ObjectId, ref: 'Division', required: true},
    posInDivision   : Number
});

// methods ======================

// create the model for users and expose it to our app
module.exports = mongoose.model('Team', teamSchema);