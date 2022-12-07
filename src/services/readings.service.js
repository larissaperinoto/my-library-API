const { Reading } = require('../database/models');

const findByUserId = async (userId) => await Reading.findAll({ where: { userId } });

const insert = async ({ bookId , userId }) => {
  const alredyExists = await Reading.findOne({ where: { userId, bookId }});

  if (alredyExists) {
    return { message: 'Este livro já está  na sua lista de finalizados!' }
  }

  await Reading.create({ userId, bookId });
};

module.exports = { findByUserId, insert };