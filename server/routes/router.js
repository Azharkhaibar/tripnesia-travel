const express = require('express')
const router = express.Router()

const authController = require('../controllers/authcontroller')
const tripController = require('../controllers/tripcontroller')
const bookingController = require('../controllers/bookingcontroller')
const axiosController = require('../controllers/axioscontroller')
const ContactController = require('../controllers/contactcontroller')
const PackageDestination = require('../controllers/packagedestinationscontroller')
const PricingController = require ('../controllers/pricingcontroller.js')
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
// post contact
router.post('/axios/post', axiosController.postContact)

router.post('/contact', ContactController.postContact)
router.get('/contact', ContactController.getContact)

router.get("/paketdestinasi", PackageDestination.getAllPaketDestinasi);
router.get("/paketdestinasi/:id", PackageDestination.getPaketDestinasiById)

router.get('/pricing', PricingController.FetchingDataPricing)
router.get("/pricing/:id", PricingController.FetchPricingDataById);
router.delete("/pricing/:id", PricingController.DeletePricingData);
router.post("/pricing", PricingController.CreatePricingData);

module.exports = router