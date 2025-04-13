const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const comments = req.app.locals.comments || [];
  const newComment = {
    id: Date.now(),
    postId: req.body.postId,
    text: req.body.text
  };
  comments.push(newComment);
  req.app.locals.comments = comments;
  res.status(201).json(newComment);
});

module.exports = router;
