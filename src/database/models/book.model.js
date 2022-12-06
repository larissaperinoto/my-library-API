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

  BookTable.associate = (models) => {
    BookTable.hasMany(models.wish, {
      as: 'book_wishes',
      foreignKey: 'bookId'
    });

    BookTable.hasMany(models.reading, {
      as: 'book_readings',
      foreignKey: 'bookId'
    });
  };

  return BookTable;
}

module.exports = BookSchema;
