const express = require('express');
const { wishesController } = require('../controllers');

const router = express.Router();

router.get('/:id', wishesController.findByUserId);
router.post('/:id', wishesController.insert);

module.exports = router;
