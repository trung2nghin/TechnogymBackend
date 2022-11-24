const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Product = new Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    categories: { type: Array },
    quantity: { type: Number },
    size: { type: String },
    ingredient: { type: Array },
    recommend: { type: Array },
    favorite: { type: Array },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', Product);
