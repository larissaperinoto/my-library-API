const Joi = require('joi');

const readingsSchema = Joi.object({
  bookId: Joi.number().min(1).required().messages({
    'number.empty': 'O campo bookId é obrigatório',
    'number.base': 'O campo bookId deve ser um número',
    'number.min': 'O campo bookId deve ser um valor maior que 0',
  }),
  finishedAt: Joi.date().iso().required().messages({
    'date.format': 'A data deve ter um formato YYYY/MM/DD',
  }),
});

const validateReadingsFields = (readings) => {
  const { error } = readingsSchema.validate(readings);
  if(error) return error.details[0].message;
};

module.exports = validateReadingsFields;
