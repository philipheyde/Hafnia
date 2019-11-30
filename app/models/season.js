
module.exports = function(sequelize, DataTypes) {
  var Season = sequelize.define("Season", {
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
    }
  });


  return Season;
};

