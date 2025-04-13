const express = require('express');
const router = express.Router();

// In-memory posts storage
// We'll attach this array to app.locals in index.js
router.post('/', (req, res) => {
  const posts = req.app.locals.posts;
  const newPost = {
    id: Date.now(),
    content: req.body.content,
    image: req.body.image || null
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

// existing POST handler above...

// GET all posts
router.get('/', (req, res) => {
  const posts = req.app.locals.posts;
  res.json(posts);
});


module.exports = router;
