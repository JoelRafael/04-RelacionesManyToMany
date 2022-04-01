const {Model, DataTypes} = require('sequelize')
const sequelize = require("../Conexion/db");

class Post extends Model{}
Post.init({
    title:DataTypes.STRING,
    body:DataTypes.STRING,
},{
    sequelize,
    modelName:'post',
    timestamps:false
})
module.exports = Post