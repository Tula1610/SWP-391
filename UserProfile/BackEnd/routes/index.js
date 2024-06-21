const express = require('express')

const router = express.Router()

const CustomerDetailsController = require('../controller/CustomerDetails')
const authToken = require('../middleware/authToken')

router.get("/customer-details",authToken,CustomerDetailsController)


module.exports = router