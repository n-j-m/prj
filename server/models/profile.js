"use strict";
module.exports = function(sequelize, DataTypes) {
  var Profile = sequelize.define("Profile", {
    handle: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.Profile.belongsTo(models.User);
      }
    }
  });
  return Profile;
};