const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const News = new Schema(
  {
    mainImage: { type: String },
    mainTitle: { type: String },
    headerImage: { type: String },
    bodyImage: { type: String },
    noteImage: { type: String },
    textHeader: { type: String },
    textBody01: { type: String },
    textBody02: { type: String },
    textBody03: { type: String },
    textQuote: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('News', News);
