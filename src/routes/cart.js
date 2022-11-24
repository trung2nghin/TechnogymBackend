const express = require('express');
const router = express.Router();

const cartController = require('../app/controllers/cartController');
const middlewareController = require('../app/controllers/middlewareController');

// POST CART
router.post('/', middlewareController.verifyToken, cartController.createCart);

// GET ALL
router.get(
  '/',
  middlewareController.verifyTokenAndAdminAuth,
  cartController.getAll
);

// GET CART
router.get(
  '/find/:userId',
  middlewareController.verifyToken,
  cartController.getCart
);

// UPDATE CART
router.put('/:id', middlewareController.verifyToken, cartController.updateCart);

// DELETE CART
router.delete(
  '/:id',
  middlewareController.verifyToken,
  cartController.deleteCart
);

module.exports = router;
