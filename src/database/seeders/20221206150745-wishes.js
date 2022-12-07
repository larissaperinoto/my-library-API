module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('wishes',
      [{
        userId: 1,
        bookId: 1
      },
      {
        userId: 1,
        bookId: 2
      },
      {
        userId: 1,
        bookId: 3
      },
      {
        userId: 2,
        bookId: 2
      },
      {
        userId: 2,
        bookId: 6
      }
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('wishes', null, {});
  },
};
