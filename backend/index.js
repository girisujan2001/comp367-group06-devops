// backend/index.js

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');      // ← add this

const authRouter = require('./routes/auth');    // ← ensure this path is correct
const postsRouter = require('./routes/posts');  // ← new posts router

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(bodyParser.json());                    // ← use bodyParser instead of express.json()

// In-memory storage
app.locals.posts = [];

// Routes
app.use('/api/auth', authRouter);
app.use('/api/posts', postsRouter);

app.get('/', (req, res) => {
  res.send('Backend is running');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
