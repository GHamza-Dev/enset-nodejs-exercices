const Product = require('../models/productModel');

exports.getAllProducts = (req, res) => {
  // Simuler des données pour cet exemple
  const products = [
    { id: 1, name: 'Produit A', price: 19.99 },
    { id: 2, name: 'Produit B', price: 29.99 }
  ];
  res.json(products);
};

exports.getProductById = (req, res) => {
  const id = parseInt(req.params.id);
  // Simuler la recherche d'un produit par ID
  const product = { id: id, name: 'Produit ' + id, price: 19.99 * id };
  res.json(product);
};

exports.createProduct = (req, res) => {
  // Normalement, on validerait et sauvegarderait dans une BD
  const newProduct = {
    id: 3,
    name: req.body.name,
    price: req.body.price
  };
  res.status(201).json(newProduct);
};

exports.updateProduct = (req, res) => {
  const id = parseInt(req.params.id);
  // Simuler la mise à jour d'un produit
  const updatedProduct = {
    id: id,
    name: req.body.name,
    price: req.body.price
  };
  res.json(updatedProduct);
};

exports.deleteProduct = (req, res) => {
  const id = parseInt(req.params.id);
  // Simuler la suppression d'un produit
  res.json({ message: `Produit avec ID ${id} supprimé` });
};