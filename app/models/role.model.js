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
            createdAt: {
                type: DataTypes.STRING,
                field: "created_at",
            },
            updatedAt: {
                type: DataTypes.STRING,
                field: "updated_at",
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
