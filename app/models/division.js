/*
// load the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// define the schema for our user model
var divisionSchema = mongoose.Schema({

    name: {
        type        : String,
        required    : true
    },
    teams: [{type: Schema.Types.ObjectId, ref: 'Team'}]
});

// methods ======================

// create the model for users and expose it to our app
module.exports = mongoose.model('Division', divisionSchema);
*/