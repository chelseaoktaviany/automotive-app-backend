const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  brandProduct: {
    type: String,
    required: true,
  },
  typeProduct: {
    type: String,
    required: true,
  },
  quantityStock: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Products = mongoose.model("Product", productSchema);

module.exports = Products;
