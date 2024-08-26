const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/db");

const BookingModels = db.define(
  "Booking",
  {
    id_booking: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    booking_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
    status: {
      type: DataTypes.ENUM("confirmed", "pending", "cancelled"),
      allowNull: false,
      defaultValue: "pending",
    },
    payment_status: {
      type: DataTypes.ENUM("paid", "unpaid"),
      allowNull: false,
      defaultValue: "unpaid",
    },
    total_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    tableName: "bookings",
    timestamps: false, // Nonaktifkan otomatis createdAt dan updatedAt
  }
);

module.exports = BookingModels;
