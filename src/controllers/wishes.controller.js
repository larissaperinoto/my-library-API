const { wishesService } = require('../services');

const findByUserId = async (req, res) => {
  const wishes = await wishesService.findByUserId(req.params.id);
  return res.status(200).json(wishes);
};

const insert = async (req, res) => {
  const insert = await wishesService.insert(req.body);

  if (insert) return res.status(500).json(insert.message);

  return res.status(201).json('Livro inserido com sucesso');
};

module.exports = { findByUserId, insert };
