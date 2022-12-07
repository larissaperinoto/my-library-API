const { usersService } = require('../services');

const login = async (req, res) => {
  const { status, message } = await usersService.login(req.body);
  return res.status(status).json(message);
};

module.exports = {
  login,
};
