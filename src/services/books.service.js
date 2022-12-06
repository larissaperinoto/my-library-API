const { Book } = require('../database/models');

const findAll = async () => await Book.findAll();

const insert = async (newBook) => {
  const books = await Book.findAll();

  if (books.some((book) => book.title === newBook.title)) {
    return { message: 'Este livro já está cadastrado!' }
  }

  await Book.create({ ...newBook });
};

module.exports = { findAll, insert };