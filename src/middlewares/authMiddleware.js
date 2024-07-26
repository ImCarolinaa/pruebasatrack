// src/middlewares/authMiddleware.js

const jwt = require('jsonwebtoken');
const { UserModel } = require('../models/userModel');

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Token invalido' });
    }

    UserModel.findById(user.id, (err, user) => {
      if (err) {
        return res.status(500).json({ message: 'Internal server error' });
      }

      if (!user) {
        return res.status(401).json({ message: 'Unauthorized' });
      }

      req.user = user;
      next();
    });
  });
};

module.exports = { authenticateToken };