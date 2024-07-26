
const express = require('express');
const router = express.Router();
const MessageController = require('../controllers/messageController');
const authMiddleware = require('../middlewares/authMiddleware');

const messageController = new MessageController();

router.post('/', authMiddleware.authenticateToken, (req, res) => {
  try {
    const { title, content } = req.body;
    const userId = req.user.id;

    const message = messageController.createMessage(title, content, userId);

    res.status(201).json({ message });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;