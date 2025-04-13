// backend/index.js

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const authRouter = require('./routes/auth');
const postsRouter = require('./routes/posts');
const commentsRouter = require('./routes/comments');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// In-memory storage
app.locals.posts = [];
app.locals.comments = [];

// Routes
app.use('/api/auth', authRouter);
app.use('/api/posts', postsRouter);
app.use('/api/comments', commentsRouter);

app.get('/', (req, res) => {
  res.send('Backend is running');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
