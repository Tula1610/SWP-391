const express = require('express');
const serviceController = require('../controllers/serviceController');

const router = express.Router();

// Manage Service
router.get('/', serviceController.indexService);
router.post('/create', serviceController.createService);
router.get('/read', serviceController.readAllService);
router.get('/read/:id', serviceController.readOneService);
router.delete('/delete/:id', serviceController.deleteOneService);
router.post('/update', serviceController.updateOneService);

module.exports = router;
