'use strict';
module.exports = function(sequelize, DataTypes) {
    var Playlist = sequelize.define('Playlist', {
        name: {
            type  : DataTypes.STRING,
            unique: true,
        },
        uuid: {
            type        : DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey  : true,
        },
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
                this.belongsTo(models.User);
            },
        },
    });
    return Playlist;
}
