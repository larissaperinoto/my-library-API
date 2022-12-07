const express = require('express');
const { readingsController } = require('../controllers');
const validateReadings = require('../middlewares/readings.middleware');

const router = express.Router();

router.get('/:id', readingsController.findByUserId);
router.post('/:id', validateReadings, readingsController.insert);

module.exports = router;
