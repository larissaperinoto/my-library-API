const express = require('express');
const { booksController } = require('../controllers');
const validateBooks = require('../middlewares/books.middleware');

const router = express.Router();

router.get('/', booksController.findAll);
router.post('/', validateBooks, booksController.insert);

module.exports = router;
