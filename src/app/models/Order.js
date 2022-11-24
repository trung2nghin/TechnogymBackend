const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Order = new Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        productID: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    amount: { type: Number, required: true },
    address: { type: Object },
    status: { type: String, default: 'pending' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Order', Order);
