const express = require('express');
const router = express.Router();

// Mock signup endpoint
router.post('/signup', (req, res) => {
  const { username, password } = req.body;
  // TODO: add real persistence
  return res.json({ message: `User ${username} registered.` });
});

module.exports = router;
