//import the sequelize constructor from the library
const Sequelize = require('sequelize')

//create connection to database
const sequelize = new Sequelize('tech_blog','DB', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
})


module.exports = sequelize;