const { DataTypes, Model } = require('sequelize');


module.exports = function (sequelize) {
    class User extends Model{}

    User.init(
        {
            username: {
                type: DataTypes.STRING,
                allowNull: false,
                field: "user_name",
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                field: "email_add",
            },
            password:{
                type: DataTypes.STRING,
                allowNull: false,
                field: "password",
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
            modelName: "User",
            tableName: "users",
        }
    
    );

    return User;
};
