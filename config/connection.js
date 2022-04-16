//import the sequelize constructor from the library
const Sequelize = require('sequelize')

//hide password and username information
require('dotenv').config();

//create connection to database
const sequelize = new Sequelize(process.env.DB.tech_blog, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
})


module.exports = sequelize;