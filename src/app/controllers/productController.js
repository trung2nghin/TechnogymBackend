const Product = require('../models/Product');

const productController = {
  // CREATE PRODUCT
  createProduct: async (req, res) => {
    const newProduct = new Product(req.body);
    try {
      const savedProduct = await newProduct.save();
      res.status(200).json(savedProduct);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // GET ALL PRODUCTS
  getAllProduct: async (req, res) => {
    const query = req.query.new;
    const queryCategory = req.query.category;
    try {
      let products;
      if (query) {
        products = await Product.find().sort({ createdAt: -1 }).limit(5);
      } else if (queryCategory) {
        products = await Product.find({
          categories: {
            $in: [queryCategory],
          },
        });
      } else {
        products = await Product.find();
      }
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // GET PRODUCT
  getProduct: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // UPDATE PRODUCT
  updateProduct: async (req, res) => {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedProduct);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // UPDATE FAVORITE PRODUCT
  setFavoriteProduct: async (req, res) => {
    try {
      let setFavoriteProduct = [];
      const product = await Product.findById(req.params.id);
      if (product.favorite.includes(req.body.userId)) {
        setFavoriteProduct = product.favorite.filter(
          (val) => val !== req.body.userId
        );
        product.favorite = [...setFavoriteProduct];
      } else {
        setFavoriteProduct.push(req.body.userId);
        product.favorite = [...product.favorite, ...setFavoriteProduct];
      }
      await product.save();
      await res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // DELETE PRODUCT
  deleteProduct: async (req, res) => {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);
      res.status(200).json('Product has been deleted');
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = productController;
