const express = require('express');
const router = express.Router();
const passport = require('passport');
const authController = require('../controllers/authController');

// User registration route
router.post('/register', authController.register);

// User login route
router.post('/login', authController.login);

// Protected route example (requires authentication)
router.get('/protected', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({ message: 'This is a protected route' });
});

module.exports = router;