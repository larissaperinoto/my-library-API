module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('users',
      [{
        username: 'Maria da Silva',
        email: 'mariadasilva@gmail.com',
        password: '123456',
      },
      {
        username: 'Luis Ramos',
        email: 'luisramos@gmail.com',
        password: '123456',
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};