
module.exports = function(sequelize, DataTypes) {
  var Game = sequelize.define("Game", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true
    },
    season_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    away_team_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    home_team_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    home_team_score: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    away_team_score: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fans: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE
    },
    home_team_cas_bh: {
      type: DataTypes.INTEGER
    },
    away_team_cas_bh: {
      type: DataTypes.INTEGER
    },
    home_team_cas_si: {
      type: DataTypes.INTEGER
    },
    away_team_cas_si: {
      type: DataTypes.INTEGER
    },
    home_team_cas_kills: {
      type: DataTypes.INTEGER
    },
    away_team_cas_kills: {
      type: DataTypes.INTEGER
    },
  });
  
  return Game;
};

