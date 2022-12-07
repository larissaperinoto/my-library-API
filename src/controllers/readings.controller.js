const { readingsService } = require('../services');

const findByUserId = async (req, res) => {
  const readings = await readingsService.findByUserId(req.params.id);
  return res.status(200).json(readings);
};

const insert = async (req, res) => {
  const insert = await readingsService.insert(req.body, req.params.id);

  if (insert) return res.status(400).json(insert.message);

  return res.status(201).json('Livro inserido com sucesso');
};

module.exports = { findByUserId, insert };
