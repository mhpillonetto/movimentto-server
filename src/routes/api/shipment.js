const express = require('express');
const router = express.Router();
const shipmentController = require('../../controllers/shipmentController')

router.get('/', shipmentController.getAllShipments);

module.exports = router;