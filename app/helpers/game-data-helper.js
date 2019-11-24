const helper    = {};
const GameModel = require('../models/game');
const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

helper.storeGameData = function(data, callback) {
    var success = false;

    console.log('data', data);
    /**************
     * TODO:
     * USE express-validator: https://express-validator.github.io/docs/
     * Check if a game with this ID already exists. Then update data instead of creating new game in DB
     */ 

    gameData = new GameModel();
    gameData.date = data.date;
    gameData.teams = [{
        type: "home",
        team: new Schema.Types.ObjectId(data.home-team),
        score: data.home-score,
        casualties: {
            bh: data.home-bh,
            si: data.home-si,
            kills: data.home-kills,
        },
        winner: data.home-score > data.away-score ? true : false,
    },{
        type: "away",
        team: data.away-team,
        score: data.away-score,
        casualties: {
            bh: data.away-bh,
            si: data.away-si,
            kills: data.away-kills,
        },
        winner: data.away-score > data.home-score ? true : false,
    }];
    gameData.winner = data.home-score > data.away-score ? "home" : data.home-score < data.away-score ? "away" : "draw";
    gameData.fans = data.fans;
    gameData.played = true;

    console.log('gameData', gameData);

    /*
{
21:30:34 web.1   |    date: '',
21:30:34 web.1   |    'away-team': '5dbdaaaa8b7da93dcc61adab>',
21:30:34 web.1   |    fans: '',
21:30:34 web.1   |    'home-score': '',
21:30:34 web.1   |    'away-score': '',
21:30:34 web.1   |    'home-bh': '',
21:30:34 web.1   |    'home-si': '',
21:30:34 web.1   |    'home-kills': '',
21:30:34 web.1   |    'away-bh': '',
21:30:34 web.1   |    'away-si': '',
21:30:34 web.1   |    'away-kills': '',
21:30:34 web.1   |    'home-team': '5dbda9898b7da93dcc61ada8'
21:30:34 web.1   |  }
    */
    callback(success);
    return;
}

module.exports = helper;
