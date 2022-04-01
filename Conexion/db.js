const {Sequelize} = require ('sequelize')
const {database} = require ('../config')

const sequelize = new Sequelize(
    'sequelize',
    "jparedes",
    "papita123@", {
        host:"127.0.0.1",
        dialect :"mysql"
    }
);
module.exports = sequelize;