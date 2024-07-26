// /node-express-api/src/controllers/messageController.js

const MessageModel = require('../models/messageModel');

class MessageController {
  constructor() {
    this.messageModel = new MessageModel();
  }

  async createMessage(req, res) {
    try {
      const { title, content } = req.body;

      if (!title || !content) {
        return res.status(400).json({ error: 'Title and content are required' });
      }

      const message = await MessageModel.create({ title, content });

      return res.status(201).json({ message });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }
}

module.exports = MessageController;