const { Wish } = require('../database/models');

const findByUserId = async (userId) => await Wish.findAll({  where: { userId } });

const insert = async ({ bookId , userId }) => {
  const alredyExists = await Wish.findOne({ where: { userId, bookId }});

  if (alredyExists) {
    return { message: 'Este livro já está  na sua lista de desejos!' }
  }

  await Wish.create({ userId, bookId });
};

module.exports = { findByUserId, insert };