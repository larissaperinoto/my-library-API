const Joi = require('joi');

const bookSchema = Joi.object({
  title: Joi.string().required().messages({
    'string.empty': 'O campo título é obrigatório!',
  }),
  author: Joi.string().required().messages({
    'string.empty': 'O campo author é obrigatório!',
  }),
  release: Joi.date().iso().required().messages({
    'date.format': 'A data deve ter um formato YYYY/MM/DD'
  }),
});

const validateBooksFields = (book) => {
  const { error } = bookSchema.validate(book);
  if(error) return error.details[0].message;
};

module.exports = validateBooksFields;
