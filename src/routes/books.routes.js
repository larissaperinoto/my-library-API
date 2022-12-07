const express = require('express');
const { booksController } = require('../controllers');

const router = express.Router();

router.get('/', booksController.findAll);
router.post('/', booksController.insert);

module.exports = router;
