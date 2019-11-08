const helper = {};

helper.allGames = function() {
    return [
        {
            $unwind: "$teams"
        },
        {
            $project: {
                teams: 1,
                win: {
                    $cond: [ { $eq: [ "$teams.winner", true ] }, 1, 0 ]
                },
                lose: {
                    $cond: [ { $eq: [ "$teams.winner", false ] }, 1, 0 ]
                },            
                draw: {
                    $cond: [ { $eq: [ "$winner.type", "draw" ] }, 1, 0 ]
                }
            }
        },
        {
            $group: {
                _id: "$teams.team",            
                "wins": { $sum: "$win" },
                "losses": { $sum: "$lose" },
                "draws": { $sum: "$draw" },  
            }
        },
        {
            $project: {
                _id: 0,
                "team": "$_id",
                wins: 1,
                losses: 1,
                draws: 1
            }
        }
    ]
}

module.exports = helper;
