const express = require('express');
const router = express.Router();
const geoCodingController = require('../controllers/geoCodingController');

router.get('/forward', geoCodingController.forward);
router.get('/reverse', geoCodingController.reverse);

module.exports = router;