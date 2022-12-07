const Cart = require('../models/Cart');

const cartController = {
  // CREATE CART
  createCart: async (req, res) => {
    const newCart = new Cart(req.body);
    try {
      const savedCart = await newCart.save();
      res.status(200).json(savedCart);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // GET USER CART
  getCart: async (req, res) => {
    try {
      const carts = await Cart.findOne({ userId: req.params.userId });
      res.status(200).json(carts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // GET ALL
  getAll: async (req, res) => {
    try {
      const carts = await Cart.find();
      res.status(200).json(carts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // UPDATE CART
  updateCart: async (req, res) => {
    try {
      const updatedCart = await Cart.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedCart);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // DELETE CART
  deleteCart: async (req, res) => {
    try {
      await Cart.findByIdAndDelete(req.params.id);
      res.status(200).json('Cart has been deleted');
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = cartController;
