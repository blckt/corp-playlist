'use strict';
module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('User', {
        email   : {
            type    : DataTypes.STRING,
            validate: {
                // isEmail includes max length 256 constraint
                // see: https://github.com/chriso/validator.js/blob/master/validator.js
                isEmail: {
                    args: true,
                    msg : 'email must be a valid email string'
                }
            }
        },
        password: DataTypes.STRING
    }, {
        indexes: [
            {
                unique: true,
                fields: ['email']
            }
        ]
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
                this.hasMany(models.Playlist, {
                    foreignKey: {
                        name     : 'creator_id',
                        allowNull: false
                    }
                })
            }
        }
    });
    return User;
};
