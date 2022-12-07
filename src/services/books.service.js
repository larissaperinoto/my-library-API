const { Book } = require('../database/models');

const findAll = async () => await Book.findAll();

const insert = async (newBook) => {
  const alredyExists = await Book.findOne({ where: { title: newBook.title } });

  if (alredyExists) {
    return { message: 'Este livro já está cadastrado!' }
  }

  await Book.create({ ...newBook });
};

module.exports = { findAll, insert };