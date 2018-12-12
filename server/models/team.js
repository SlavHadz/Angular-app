const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const teamSchema = new Schema({
    teamName: String,
    password: String,
    captain: {
        firstName: String,
        lastName: String,
        age: String
    },
    numberOfPlayers: String
});

module.exports = mongoose.model('team', teamSchema, 'teams');