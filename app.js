const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();

// Middleware pour logger les requêtes
app.use(morgan('dev'));

// Middleware pour parser le JSON
app.use(express.json());

// Middleware pour parser les données des formulaires
app.use(express.urlencoded({ extended: false }));

// Servir les fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const indexRoutes = require('./routes/index');
const userRoutes = require('./routes/users');
const productRoutes = require('./routes/products');

app.use('/', indexRoutes);
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

// Middleware pour gérer les 404
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// Middleware pour gérer les erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Quelque chose s\'est mal passé!');
});

module.exports = app;