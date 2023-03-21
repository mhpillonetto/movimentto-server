const express = require('express');
const router = express.Router();
const driverController = require('../../controllers/driverController');

router.get('/', driverController.getAllDrivers);
router.get('/:username', driverController.getDriverByUsername);
router.post('/checkin', driverController.checkIn);
module.exports = router;