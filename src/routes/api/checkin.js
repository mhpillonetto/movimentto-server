const express = require('express');
const router = express.Router();
const checkinController = require('../../controllers/checkinController');

router.get('/', checkinController.getCheckedInDrivers);
router.post('/', checkinController.checkIn);
module.exports = router;