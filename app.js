const express = require('express');
const bodyParser = require('body-parser');

// Import des routeurs
const taskRouter = require('./routes/tasks.js');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/tasks', taskRouter);

// Route par défaut
app.get('/', (req, res) => {
  res.send('Bienvenue sur l\'API de gestion de tâches');
});

// Gestion des erreurs 404
app.use((req, res) => {
  res.status(404).json({ message: 'Route non trouvée' });
});

// Gestion des erreurs globales
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Erreur serveur', error: err.message });
});

module.exports = app;