const express = require('express');
const staffController = require('../controllers/staffController');

const router = express.Router();

// Manage Staff
router.get('/', staffController.indexStaff);
router.post('/create', staffController.createStaff);
router.get('/read', staffController.readAllStaff);
router.delete('/delete/:id', staffController.deleteOneStaff);


module.exports = router;
