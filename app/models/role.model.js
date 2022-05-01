const { DataTypes, Model } = require('sequelize');


module.exports = function (sequelize) {
    class Role extends Model{}

    Role.init( 
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                field: "name",
            },
        },
        {
            sequelize,
            modelName: "Role",
            tableName: "roles",
        }
    );

    return Role;
};
