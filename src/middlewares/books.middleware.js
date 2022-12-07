const validateBooksFields = require('../utils/validations/validateBooksFields');

const validateBooks = (req, res, next) => {
  const validation = validateBooksFields(req.body);

  if(validation) return res.status(400).json(validation);

  next();
};

module.exports = validateBooks;
