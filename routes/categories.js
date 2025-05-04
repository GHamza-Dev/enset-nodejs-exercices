const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

router.get('/:categoryName/posts', categoryController.getPostsByCategory);

module.exports = router;