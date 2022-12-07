const Joi = require('joi');

const wishesSchema = Joi.object({
  bookId: Joi.number().min(1).required().messages({
    'number.base': 'O campo bookId deve ser um número',
    'number.empty': 'O campo bookId é obrigatório',
    'number.min': 'O campo bookId deve ser um valor maior que 0',
  })
});

const arraySchema = Joi.array().items(wishesSchema).messages({
  'array.base': 'As informações devem ser enviadas em um array'
});


const validateWishesFields = (wishes) => {
  const { error } = arraySchema.validate(wishes);
  if(error) return error.details[0].message;
};

module.exports = validateWishesFields;
