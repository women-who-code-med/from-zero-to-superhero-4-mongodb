const { Product } = require("../models");

exports.getAllProducts = async (_, res) => {
  console.log("Product -> getAllProducts");
  const products = await Product.find();
  res.json(products);
};

exports.getProductById = async (req, res) => {
  console.log("Product -> getProductById");
  const { id } = req.params;
  const products = await Product.findById(id);
  res.json(products);
};

exports.createProduct = async (req, res) => {
  console.log("Product -> createProduct");
  const product = await new Product(req.body).save();
  res.json(product);
}

exports.deleteProduct = async (req, res) => {
  console.log("Product -> deleteProduct");
  const { id } = req.params;
  const product = await Product.findByIdAndRemove(id, {new: true});
  res.json({ message: `Product ${product.title} has been deleted` });
};

exports.updateProduct = async (req, res) => {
  console.log("Product -> updateProduct");
  const { id } = req.params;
  const product = await Product.findByIdAndUpdate(id, req.body);
  res.json(product);
};