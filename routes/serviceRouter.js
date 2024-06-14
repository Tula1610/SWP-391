const express = require('express');
const serviceController = require('../controllers/serviceController');

const router = express.Router();

// Manage Service
router.get('/', serviceController.indexService);
router.get('/create', serviceController.createService);
router.get('/read', serviceController.readAllService);
/*router.get('/read/:id', serviceController.readOneStaff);
router.post('/delete/:id', serviceController.deleteOneStaff);
router.post('/update', serviceController.updateOneStaff); */

module.exports = router;
