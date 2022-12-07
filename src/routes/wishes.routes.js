const express = require('express');
const { wishesController } = require('../controllers');

const router = express.Router();

router.get('/', wishesController.findAll);
router.post('/', wishesController.insert);

module.exports = router;