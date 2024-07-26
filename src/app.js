const express = require('express');
const app = express();
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const messageRoutes = require('./routes/messageRoutes');
const authMiddleware = require('./middlewares/authMiddleware');

dotenv.config();

app.use(express.json());

app.use('/register', authRoutes);
app.use('/login', authRoutes);
app.use('/messages', authMiddleware.authenticateToken, messageRoutes);


const port = process.env.PORT || 3000;
app.listen(port, () => {
 
});

module.exports = app;