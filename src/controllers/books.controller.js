const { booksService } = require('../services');

const findAll = async (_req, res) => {
  const books = await booksService.findAll();
  return res.status(200).json(books);
};

const insert = async (req, res) => {
  const insert = await booksService.insert(req.body);

  if (insert) return res.status(500).json(insert.message);

  return res.status(201).json('Livro inserido com sucesso');
};

module.exports = { findAll, insert };
