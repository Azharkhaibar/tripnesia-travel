const { Sequelize, DataTypes } = require('sequelize')
const db = require('../config/db')

const usersModels = db.define("user", {
    id_user: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email : {
        type: Sequelize.STRING,
        allowNull: false
    }
})