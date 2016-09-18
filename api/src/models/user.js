module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      validate: {
        // isEmail includes max length 256 constraint
        // see: https://github.com/chriso/validator.js/blob/master/validator.js
        isEmail: {
          args: true,
          msg: 'email must be a valid email string',
        },
      },
    },
    password: DataTypes.STRING,
  }, {
    indexes: [
      {
        unique: true,
        fields: ['email'],
      },
    ],
     classMethods: {
      associate: function (models) {
        // associations can be defined here
        this.belongsToMany(models.Roles, { as: 'Role', through: models.UsersInRoles , foreignKey: 'UserId' });
      },
    },
    instanceMethods:{
        
    }
  });
  return User;
};
