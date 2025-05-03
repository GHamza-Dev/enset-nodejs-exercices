const express = require('express');
const router = express.Router();
const path = require('path');

// Route pour la page d'accueil
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

// Route pour vérifier l'état de l'API
router.get('/api/status', (req, res) => {
  res.json({ status: 'API is running' });
});

module.exports = router;