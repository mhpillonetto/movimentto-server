const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');

router.get('/', userController.findUserByUsername);
router.post('/edit', userController.editUser);
module.exports = router;