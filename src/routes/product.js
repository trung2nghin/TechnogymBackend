const express = require('express');
const router = express.Router();

const productController = require('../app/controllers/productController');
const middlewareController = require('../app/controllers/middlewareController');

// POST PRODUCT
router.post(
  '/',
  middlewareController.verifyTokenAndAdminAuth,
  productController.createProduct
);

// GET ALL PRODUCTS
router.get(
  '/',
  middlewareController.verifyToken,
  productController.getAllProduct
);

// GET PRODUCT
router.get('/find/:id', productController.getProduct);

// UPDATE PRODUCT
router.put(
  '/:id',
  middlewareController.verifyTokenAndAdminAuth,
  productController.updateProduct
);

// UPDATE FAVORITE PRODUCT
router.patch(
  '/:id',
  middlewareController.verifyToken,
  productController.setFavoriteProduct
);

// DELETE PRODUCT
router.delete(
  '/:id',
  middlewareController.verifyTokenAndAdminAuth,
  productController.deleteProduct
);

module.exports = router;
