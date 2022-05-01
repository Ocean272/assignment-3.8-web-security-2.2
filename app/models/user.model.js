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
        },
        {
            sequelize,
            modelName: "User",
            tableName: "users",
        }
    
    );

    return User;
};
