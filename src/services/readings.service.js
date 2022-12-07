const { Reading, Book } = require('../database/models');

const findByUserId = async (userId) => await Reading.findAll({ where: { userId } });

const insert = async ({ bookId, finishedAt }, userId) => {
  const bookExists = await Book.findOne({ where: { id: bookId } });

  if (!bookExists) {
    return { message: 'Este livro não está cadastrado' };
  }

  const alredyExists = await Reading.findOne({ where: { userId, bookId }});

  if (alredyExists) {
    return { message: 'Este livro já está  na sua lista de finalizados!' };
  }

  await Reading.create({ userId, bookId, finishedAt });
};

module.exports = { findByUserId, insert };