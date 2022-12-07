const { Wish, Book } = require('../database/models');

const findByUserId = async (userId) => await Wish.findAll({  where: { userId } });

const insert = async (books, userId) => {
  const booksExists = await Promise.all(books.map(({ bookId }) => Book.findOne({ where: { id: bookId } })));
  if (booksExists.some((book) => !book)) {
    return { message: 'Os livros não estão cadastrados' };
  }

  const alredyExists = await Promise.all(books
    .map(({ bookId }) => Wish.findOne({ where: { userId, bookId }})));

  if (alredyExists.some((wish) => wish)) {
    return { message: 'Os livros já estão na sua lista de desejos!' }
  }

  await Promise.all(books.map(({ bookId }) => Wish.create({ userId, bookId })));
};

module.exports = { findByUserId, insert };