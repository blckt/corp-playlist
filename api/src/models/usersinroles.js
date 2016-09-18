'use strict';
module.exports = function(sequelize, DataTypes) {
  var UsersInRoles = sequelize.define('UsersInRoles', {
    RoleId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return UsersInRoles;
};