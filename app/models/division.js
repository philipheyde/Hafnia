// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var divisionSchema = mongoose.Schema({

    name            : String,
    positionInList  : Number
});

// methods ======================

// create the model for users and expose it to our app
module.exports = mongoose.model('Division', divisionSchema);