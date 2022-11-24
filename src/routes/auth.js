const express = require('express');
const router = express.Router();

const authController = require('../app/controllers/authController');
const middlewareController = require('../app/controllers/middlewareController');

// REGISTER
router.post('/register', authController.registerUser);

// LOGIN
router.post('/login', authController.loginUser);

// REFRESH
router.post('/refresh', authController.requestRefreshToken);

// LOGOUT
router.post(
  '/logout',
  middlewareController.verifyToken,
  authController.logoutUser
);

module.exports = router;
