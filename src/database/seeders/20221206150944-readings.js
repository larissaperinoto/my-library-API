module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('readings',
      [{
        userId: 1,
        bookId: 4,
        finishedAt: '2022-01-20'
      },
      {
        userId: 1,
        bookId: 5,
        finishedAt: '2022-02-03'
      },
      {
        userId: 1,
        bookId: 6,
        finishedAt: '2021-12-18'
      },
      {
        userId: 2,
        bookId: 1,
        finishedAt: '2022-01-10'
      },
      {
        userId: 2,
        bookId: 3,
        finishedAt: '2022-01-28'
      },
      {
        userId: 2,
        bookId: 5,
        finishedAt: '2022-04-04'
      }
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('readings', null, {});
  },
};