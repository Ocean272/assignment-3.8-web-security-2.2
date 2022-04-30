
module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define( "roles",
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
            },
            name: {
                type: Sequelize.STRING,
                field: "name",
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

    return Role;
};