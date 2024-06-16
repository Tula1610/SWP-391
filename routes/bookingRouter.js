const express = require('express');
const bookingController = require('../controllers/bookingController');

const router = express.Router();

// Booking
router.get('/', bookingController.indexBooking);
router.get('/create', bookingController.createBooking);

module.exports = router;