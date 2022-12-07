const validateLoginFields = require('../utils/validations/validateLoginFields');

const validateLogin = (req, res, next) => {
  const validation = validateLoginFields(req.body);

  if(validation) return res.status(400).json(validation);

  next();
};

module.exports = validateLogin;
