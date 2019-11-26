
module.exports = function(sequelize, DataTypes) {
  var Team = sequelize.define("Team", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    race_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });

  return Team;
};

