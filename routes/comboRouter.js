const express = require('express');
const comboController = require('../controllers/comboController');

const router = express.Router();

// Manage Combo Route
router.get('/', comboController.indexCombo);
router.post('/create', comboController.createCombo);
router.get('/read', comboController.readAllCombo);
router.get('/read/:id', comboController.readAllServiceOfCombo);
router.delete('/delete/:id', comboController.deleteOneCombo);


module.exports = router;