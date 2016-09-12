'use strict';
module.exports = function(sequelize, DataTypes) {
    var Audio = sequelize.define('Audio', {
        name  : DataTypes.STRING,
        url   : DataTypes.STRING,
        genre: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
                this.belongsTo(models.Playlist);
            }
        }
    });
    return Audio;
};