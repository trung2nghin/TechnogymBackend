const express = require('express');
const router = express.Router();

const orderController = require('../app/controllers/orderController');
const middlewareController = require('../app/controllers/middlewareController');

// POST ORDER
router.post('/', middlewareController.verifyToken, orderController.createOrder);

// GET ALL
router.get(
  '/',
  middlewareController.verifyTokenAndAdminAuth,
  orderController.getAll
);

// GET ORDER
router.get(
  '/find/:userId',
  middlewareController.verifyToken,
  orderController.getOrder
);

// UPDATE ORDER
router.put(
  '/:id',
  middlewareController.verifyTokenAndAdminAuth,
  orderController.updateOrder
);

// DELETE ORDER
router.delete(
  '/:id',
  middlewareController.verifyTokenAndAdminAuth,
  orderController.deleteOrder
);

// GET MONTLY INCOME
router.put(
  '/income',
  middlewareController.verifyTokenAndAdminAuth,
  orderController.monthlyIncome
);

module.exports = router;
