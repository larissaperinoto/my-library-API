const BookSchema = (sequelize, DataTypes) => {
  const BookTable = sequelize.define('Book', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    release: DataTypes.DATE
  }, {
    tableName: 'books',
    underscored: true,
    timestamps: false
  });

  return BookTable;
}

module.exports = BookSchema;
