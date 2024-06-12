const express = require('express');
const staffController = require('../controllers/staffController');

const router = express.Router();

// Manage Staff
router.get('/', staffController.indexStaff);

router.get('/read', staffController.readAllStaff);



module.exports = router;
