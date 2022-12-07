const express = require('express');
const { readingsController } = require('../controllers');

const router = express.Router();

router.get('/:id', readingsController.findByUserId);
router.post('/', readingsController.insert);

module.exports = router;
