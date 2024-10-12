const db = require("../config/db");
const sequelize = require("sequelize");

const AllGuiderModels = db.define("data_semua_pemandu", {
  id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nama_pemandu: {
    type: sequelize.STRING,
    allowNull: false,
  },
  lokasi_pemandu: {
    type: sequelize.STRING,
    allowNull: false,
  },
  peran: {
    type: sequelize.STRING,
    allowNull: false,
  },
  nomertelpon: {
    type: sequelize.STRING, // Phone numbers are typically stored as strings.
    allowNull: false,
  },
  email: {
    type: sequelize.STRING,
    allowNull: false,
  },
  deskripsi_personal: {
    type: sequelize.TEXT,
    allowNull: false,
  },
  bahasa: {
    type: sequelize.STRING,
    allowNull: false,
  },    
  totalguide: {
    type: sequelize.INTEGER,
    allowNull: false,
  },
  totalservices: {
    type: sequelize.INTEGER,
    allowNull: false,
  },
  totalevent: {
    type: sequelize.INTEGER,
    allowNull: false,
  },
  awardwon: {
    type: sequelize.INTEGER,
    allowNull: false,
  },
}, {
    tablename: "data_semua_pemandu",
    timestamp: false,
});

module.exports = AllGuiderModels;
