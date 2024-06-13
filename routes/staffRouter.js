const express = require('express');
const staffController = require('../controllers/staffController');

const router = express.Router();

// Manage Staff
router.get('/', staffController.indexStaff);
router.post('/create', staffController.createStaff);
router.get('/read', staffController.readAllStaff);
router.get('/read/:id', staffController.readOneStaff);
router.post('/delete/:id', staffController.deleteOneStaff);
router.post('/update', staffController.updateOneStaff);

module.exports = router;
