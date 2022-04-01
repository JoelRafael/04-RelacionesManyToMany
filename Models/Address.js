const {Model, DataTypes} = require('sequelize')
const sequelize = require("../Conexion/db");

class Address extends Model {}
Address.init({
street: DataTypes.STRING
},{
    sequelize,
    modelName:"addreess",
    timestamps:false
})

module.exports = Address;