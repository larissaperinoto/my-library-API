const validateWishesFields = require('../utils/validations/validateWishesFields');

const validateWishes = (req, res, next) => {
  const validation = validateWishesFields(req.body);

  if (validation) return res.status(400).json(validation);

  next();
};

module.exports = validateWishes;
