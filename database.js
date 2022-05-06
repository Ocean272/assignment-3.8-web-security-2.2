const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('makan_apa', 'user', 'pass',{
    dialect: 'sqlite',
    host: './dev.sqlite'
})

module.exports  = sequelize;
