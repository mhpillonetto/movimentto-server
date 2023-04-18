const express = require('express');
const router = express.Router();
const authController = require('../../controllers/authController');
const registerController = require('../../controllers/registerController');
const logoutController = require('../../controllers/logoutController');

router.post('/login', authController.handleLogin);
router.post('/register', registerController.handleNewUser);
router.post('/logout', logoutController.handleLogout);

module.exports = router;