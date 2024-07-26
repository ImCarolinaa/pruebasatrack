
const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/authController');

const authController = new AuthController();

router.post('/register', authController.registerUser.bind(authController));

router.post('/login', authController.loginUser.bind(authController));


module.exports = router;