const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');

router.get('/', userController.getUserByUsername);
router.post('/edit', userController.editUser);
router.get('/info', userController.getUserInfo);
module.exports = router;