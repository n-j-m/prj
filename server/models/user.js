"use strict";
var bcrypt = require("bcrypt");

function beforeSave(user, opts, next) {
  // Break out if the password hasn"t changed
  if (!user.isNewRecord && !user.changed("password")) return next(null);

  // Password changed so we need to hash it
  bcrypt.genSalt(5, function(err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);

      user.password = hash;
      next(null);
    });
  });
}

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: beforeSave,
      beforeUpdate: beforeSave
    },

    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },

    instanceMethods: {
      verifyPassword: function(password, callback) {
        bcrypt.compare(password, this.password, (err, isMatch) => {
          if (err) callback(err);
          callback(null, isMatch);
        });
      }
    }
  });
  return User;
};