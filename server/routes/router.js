const express = require('express')
const router = express.Router()

const authController = require('../controllers/authcontroller')
const tripController = require('../controllers/tripcontroller')
const bookingController = require('../controllers/bookingcontroller')
const axiosController = require('../controllers/axioscontroller')
const ContactController = require('../controllers/contactcontroller')
router.get('/', (req, res) => {
    res.json({
        message: 'STATUS CONNECTED'
    })
})

router.post('/auth/register', authController.Register)
router.get('/auth/register', authController.getRegisterData)
router.get('/auth/register/:id', authController.getRegisterDataById)
router.put('/auth/register/:id', authController.UpdateRegisterData)

router.post('/trip', tripController.postDataTrips)
router.get('/trip', tripController.getDataTrips)
router.get('/trip/:id', tripController.getDataTripsById)

router.post('/booking', bookingController.postBooking)
router.get('/booking', bookingController.getBookingData)
router.get('/booking/:id', bookingController.getBookingDataById)

router.get('/axios/fetch', axiosController.fetchingData)

router.post('/contact', ContactController.postContact)
router.get('/contact', ContactController.getContact)

module.exports = router