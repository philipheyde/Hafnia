module.exports = function(sequelize, DataTypes) {
  var Race = sequelize.define("Race", {
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

  return Race;
};

