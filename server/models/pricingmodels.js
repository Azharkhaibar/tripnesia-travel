const { timeStamp } = require('console');
const db = require('../config/db')
const sequelize = require('sequelize')

const PricingPlanModels = db.define("pricing_plan", {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  kategori_pricing: {
    type: sequelize.STRING,
    allowNull: false
  },
  harga_pricing: {
    type: sequelize.INTEGER,
    allowNull: false
  },
  deskripsi: {
    type: sequelize.STRING,
    allowNull: false
  },
  benefit: {
    type: sequelize.JSON,
    allowNull: false
  }
}, {
    tablename: "pricing_plan",
    timestamp: false
});

module.exports = PricingPlanModels;