const BookingModels = require("../models/bookingmodels");

// Menambahkan pemesanan
const postBooking = async (req, res) => {
    try {
        const { id_booking, booking_date, status, payment_status, total_price } = req.body;

        // Membuat entri baru di tabel Bookings
        const newBooking = await BookingModels.create({
            id_booking,
            booking_date,
            status,
            payment_status,
            total_price,
        });

        res.status(201).json(newBooking);
    } catch (error) {
        console.log(error.message);
        res.status(400).send("Failed to post Booking data");
    }
};

// Mendapatkan semua data pemesanan
const getBookingData = async (req, res) => {
    try {
        const bookings = await BookingModels.findAll({});
        res.status(200).json(bookings);
    } catch (error) {
        console.log(error.message);
        res.status(400).send("Failed to fetch Booking data");
    }
};

// Mendapatkan data pemesanan berdasarkan ID
const getBookingDataById = async (req, res) => {
    try {
        const id = req.params.id;
        const booking = await BookingModels.findOne({ where: { id_booking: id } });

        if (!booking) {
            return res.status(404).json({ message: "Booking not found" });
        }

        res.status(200).json(booking);
    } catch (error) {
        console.log(error.message);
        res.status(400).send("Failed to fetch Booking data");
    }
};

module.exports = {
    postBooking,
    getBookingData,
    getBookingDataById,
};
