const express = require('express');
const comboController = require('../controllers/comboController');

const router = express.Router();

// Manage Combo Route
router.get('/', comboController.indexCombo);
router.get('/create', comboController.createCombo);
//router.get('/read', comboController);


module.exports = router;