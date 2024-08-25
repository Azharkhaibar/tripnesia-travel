const sequelize = require('sequelize')
const { get } = require('../routes/router')
const db = require('../config/config.json')
const dbConnect = new sequelize(
    db.database,
    db.username,
    db.password,
    db.host,
    db.dialect
)

dbConnect.sync({})
module.exports = dbConnect