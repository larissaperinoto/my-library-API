const express = require('express');
const { wishesController } = require('../controllers');
const validateWishes = require('../middlewares/wishes.middleware');
const router = express.Router();

router.get('/:id', wishesController.findByUserId);
router.post('/:id', validateWishes, wishesController.insert);

module.exports = router;
