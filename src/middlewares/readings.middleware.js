const validateReadingsFields = require('../utils/validations/validateReadingsFields');

const validateReadings = (req, res, next) => {
  const validation = validateReadingsFields(req.body);

  if (validation) return res.status(400).json(validation);

  next();
};

module.exports = validateReadings;
