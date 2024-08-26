const Sequelize = require("sequelize");
const db = require("../config/db");

const tripModels = db.define("trips", {
    destinasi: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    deskripsi: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    start_date: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    end_date: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    availability: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
});

module.exports = tripModels;
