require("dotenv").config()
module.exports = {
    Produccion:{
        host: process.env.HOST,
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
        port: 3360,
        database: process.env.DATABASE
    }
}