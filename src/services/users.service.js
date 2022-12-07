const { User } = require('../database/models');

const login = async (credentials) => {
  const { email, password } = credentials;
  const user = await User.findOne({ where: { email, password } });

  if (!user) return { status: 401,  message: 'Email ou senha incorretos!' };

  return { status: 200,  message: 'Usuário logado' }
};

module.exports = {
  login,
};
