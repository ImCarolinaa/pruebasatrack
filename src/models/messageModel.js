
const db = require('../utils/db');

class MessageModel {
  constructor() {
    this.messages = db.get('messages');
  }

  createMessage(message) {
    const newMessage = {
      id: Date.now().toString(),
      content: message.content,
      userId: message.userId,
      createdAt: new Date().toISOString(),
    };

    this.messages.push(newMessage);
    db.write();

    return newMessage;
  }

  getMessages() {
    return this.messages;
  }
}

module.exports = MessageModel;