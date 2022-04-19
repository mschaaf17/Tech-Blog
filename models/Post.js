const { Model, Datatypes, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class Post extends Model {}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        // },
        // //post_url?
        //     user_id: {
        //         type: DataTypes.STRING,
        //         references: {
        //             model: 'user',
        //             key: 'id'
        //         }
            }
        },
        {
            sequelize,
            underscored: true,
            timestamps: true,
            modelName: 'post'
        }

)

module.exports = Post