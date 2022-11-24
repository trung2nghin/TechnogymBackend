const express = require('express');
const router = express.Router();

const userController = require('../app/controllers/userController');
const middlewareController = require('../app/controllers/middlewareController');

// GET ALL USERS
router.get('/', middlewareController.verifyToken, userController.getAllUser);

// GET USER
router.get(
  '/find/:id',
  middlewareController.verifyToken,
  userController.getUser
);

// UPDATE USERS
router.put('/:id', middlewareController.verifyToken, userController.updateUser);

// DELETE USER
router.get(
  '/:id',
  middlewareController.verifyTokenAndAdminAuth,
  userController.deleteUser
);

module.exports = router;
