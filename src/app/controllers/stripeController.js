const stripe = require('stripe')(
  'sk_test_51M7gPYACPyXHkSWyqweLfEtKiLV3Lk26PJmfbG5UKZ5cJjHATLmnyxOAcs5g2eyFqXhFzsjQQwBmQQc95ZpKHQaj003ZUST6Th'
);

const stripeController = {
  // STRIPE PAYMENT
  stripePayment: async (req, res) => {
    try {
      const data = req.body;
      console.log(data);
      // Create a PaymentIntent with the order amount and currency
      const paymentIntent = await stripe.paymentIntents.create({
        amount: 100 * data.totalPrice,
        currency: 'usd',
        payment_method_types: ['card'],
        metadata: data,
      });
      const clientSecret = paymentIntent.client_secret;
      res.status(200).json({ message: 'Payment initiated', clientSecret });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }

    // stripe.charges.create(
    //   {
    //     source: req.body.tokenId,
    //     amount: req.body.amount,
    //     currency: 'usd',
    //   },
    //   (stripeErr, stripeRes) => {
    //     if (stripeErr) {
    //       res.statusCode(500).json(stripeErr);
    //     } else {
    //       res.statusCode(200).json(stripeRes);
    //     }
    //   }
    // );
  },
};

module.exports = stripeController;
