const Sequelize = require("sequelize");
const db = require("../config/db");

const PaketDestinasiModel = db.define(
  "paket_destinasi",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nama_paket: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    tempat: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    rating: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    harga: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    batas_hari: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    img: {
      type: Sequelize.BLOB,
      allowNull: false,
    },
  },
  {
    tableName: "paket_destinasi",
    timestamps: false, // Disable timestamps
  }
);

module.exports = PaketDestinasiModel;
