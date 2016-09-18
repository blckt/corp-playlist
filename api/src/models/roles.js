module.exports = function (sequelize, DataTypes) {
  const Roles = sequelize.define('Roles', {
    RoleName: DataTypes.ENUM('USER', 'ADMIN', 'STUDENT', 'STEWARD', 'LECTURER', 'LECTURER-ASSISTANT'),
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
        //   this.hasMany(models.User)
        this.belongsToMany(models.User, { as:'User' , through: models.UsersInRoles , foreignKey:'RoleId'});
      },
    },
  });
  return Roles;
};
