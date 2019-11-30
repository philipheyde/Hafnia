
module.exports = function(sequelize, DataTypes) {
  var TeamsInDivision = sequelize.define("TeamsInDivision", {
    team_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    division_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });


  return TeamsInDivision;
};

