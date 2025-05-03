const User = require('../models/userModel');

exports.getAllUsers = (req, res) => {
  // Simuler des données pour cet exemple
  const users = [
    { id: 1, name: 'hamza', email: 'hamza@example.com' },
    { id: 2, name: 'yassine', email: 'yassine@example.com' }
  ];
  res.json(users);
};

exports.getUserById = (req, res) => {
  const id = parseInt(req.params.id);
  // Simuler la recherche d'un utilisateur par ID
  const user = { id: id, name: 'Utilisateur ' + id, email: `user${id}@example.com` };
  res.json(user);
};

exports.createUser = (req, res) => {
  // Normalement, on validerait et sauvegarderait dans une BD
  const newUser = {
    id: 3,
    name: req.body.name,
    email: req.body.email
  };
  res.status(201).json(newUser);
};

exports.updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  // Simuler la mise à jour d'un utilisateur
  const updatedUser = {
    id: id,
    name: req.body.name,
    email: req.body.email
  };
  res.json(updatedUser);
};

exports.deleteUser = (req, res) => {
  const id = parseInt(req.params.id);
  // Simuler la suppression d'un utilisateur
  res.json({ message: `Utilisateur avec ID ${id} supprimé` });
};