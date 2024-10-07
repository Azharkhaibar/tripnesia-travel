const db = require("../config/db");
const sequelize = require("sequelize");

const ReviewsModels = db.define(
    "reviews",
    {
        id: {
            type: sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        review_text: {
            type: sequelize.TEXT,
            allowNull: false,
        },
        rating: {
            type: sequelize.ENUM("1", "2", "3", "4", "5"), // Rating sebagai ENUM
            allowNull: false,
        },
        name_reviewer: {
            type: sequelize.STRING,
            allowNull: false,
        },
        location_traveller: {
            type: sequelize.STRING,
            allowNull: false,
        },
    },
    {
        tableName: "reviews",
        timestamps: false,
    }
);

module.exports = ReviewsModels; 
