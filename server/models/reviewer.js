const { type } = require('os')
const db = require('../config/db')
const sequelize = require('sequelize')

const ReviewsModels = db.define('reviews', {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    review_text: {
        type: sequelize.TEXT,
        allowNull: false
    },
    rating: {
        type: sequelize.INTEGER,
        allowNull: false
    }, 
    name_reviewer: {
        type: sequelize.STRING,
        allowNull: false
    },
    location_traveller: {
        type: sequelize.STRING,
        allowNull: false
    },
}, {
    tablename: "reviews",
    timestamp: false
})

exports.module = ReviewsModels;