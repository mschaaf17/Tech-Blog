const { Model, DataTypes } = require('sequelize')
//bcyrpt for password
const sequelize = require('../config/connection')

//create user model

class User extends Model {
    //set up method to run on instace data (per user) to check password
    //bcrypt
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }
        }

    },
    {
    //hooks for password
    sequelize,
    //check if you need only created_at
    timestamps: true,
    underscore: true,
    modelName: 'user'
    }
    )

    module.exports = User;