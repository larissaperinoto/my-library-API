module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('books',
      [{
        title: 'O Pequeno Príncipe',
        author: 'Antoine de Saint-Exupéry',
        release: '1943-04-06',
      },
      {
        title: '1984',
        author: 'George Orwell',
        release: '1945-06-08'
      },
      {
        title: 'Cem Anos de Solidão',
        author: 'Gabriel García Márquez',
        release: '1967-05-03'
      },
      {
        title: 'A Divina Comédia',
        author: 'Dante Alighieri',
        release: '1975-09-28'
      },
      {
        title: 'O Conto da Aia',
        author: 'Margaret Atwood',
        release: '1985-01-23'
      },
      {
        title: 'A Revolução dos Bichos',
        author: 'George Orwell',
        release: '1945-05-13'
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('books', null, {});
  },
};
