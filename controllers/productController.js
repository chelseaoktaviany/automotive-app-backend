const Products = require("../models/Products");

// get all products
exports.getAllProducts = async (req, res) => {
  const products = await Products.find();

  res.status(200).json({
    success: true,
    data: products,
  });
};

// get a product
exports.getProduct = async (req, res) => {
  const { id } = req.params();

  const product = await Products.findById({ _id: id });

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  res.status(200).json({
    success: true,
    data: product,
  });
};

// create a product
exports.createProduct = async (req, res) => {
  const { brandProduct, typeProduct, quantityStock, price, description } =
    req.body;

  try {
    const newProduct = await Products.create({
      brandProduct,
      typeProduct,
      quantityStock,
      price,
      description,
    });

    res.status(201).json({
      success: true,
      data: newProduct,
    });
  } catch (err) {
    console.log("Error creating a new product", err.message);
  }
};

// update a product
exports.updateProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const editedProduct = await Products.FindByIdAndUpdate(
      { _id: id },
      req.body,
      { new: true },
    );

    if (!editedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      data: editedProduct,
    });
  } catch (err) {
    console.log("Error updating an existing product", err.message);
  }
};

// delete a product
exports.deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await Products.FindByIdAndDelete({ _id: id });

    if (!deletedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Deleted existing product",
    });
  } catch (err) {
    console.log("Error deleting an existing product", err.message);
  }
};
