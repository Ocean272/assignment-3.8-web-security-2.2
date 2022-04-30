
module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define( "users",
        {
            username: {
                type: Sequelize.STRNG,
                allowNull: false,
                field: "user_name",
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                field: "email_add",
            },
            createdAt: {
                type: Sequelize.DATE,
                field: "created_at",
            },
            updatedAt: {
                type: Sequelize.DATE,
                field: "updated_at",
            },
        });

    return User;
};
