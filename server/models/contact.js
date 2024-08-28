const Sequelize = require("sequelize");
const db = require("../config/db");

const ContactModels = db.define("message", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  typedestination: {
    type: Sequelize.ENUM("Jawa", "Sulawesi", "Bali", "NTT", "Kalimantan", "Sumatra", "Papua", "Maluku"),
    allowNull: false,
  },
  message: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

module.exports = ContactModels;
