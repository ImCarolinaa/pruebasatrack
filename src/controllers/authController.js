const express = require('express');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

const UserModel = require('../models/userModel');

const { validateRegistration, validateLogin } = require('../utils/validation');

const router = express.Router();


class AuthController {
  // Método para registrar un nuevo usuario
  registerUser(req, res) {
    // Lógica para manejar el registro de usuario
    res.send('User registered');
  }

  // Método para iniciar sesión de un usuario
  loginUser(req, res) {
    debugger;
    try {
      const { username, password } = req.body;
      res.status(200).json({ message: 'Login successful' });
    } catch (err) {
      res.status(500).json({ error: 'Login failed' });
    }
  }
}

module.exports = AuthController;