const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Comment = new Schema(
  {
    productId: { type: String, required: true },
    comments: [
      {
        userId: { type: String },
        desc: { type: String },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Comment', Comment);
