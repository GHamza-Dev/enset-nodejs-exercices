const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.get('/:year', postController.getPostsByDate);
router.get('/:year/:month', postController.getPostsByDate);

module.exports = router;