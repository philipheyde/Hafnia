
module.exports = function(sequelize, DataTypes) {
  var Division = sequelize.define("Division", {
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


  return Division;
};

