const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_KEY);
const router = express.Router();

const stripeController = require('../app/controllers/stripeController');
const middlewareController = require('../app/controllers/middlewareController');

router.post(
  '/',
  middlewareController.verifyToken,
  stripeController.stripePayment
);

module.exports = router;
