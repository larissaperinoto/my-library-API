const WishSchema = (sequelize, DataTypes) => {
  const WishTable = sequelize.define('Wish', {
    userId: { type: DataTypes.INTEGER, primaryKey: true },
    bookId: { type: DataTypes.INTEGER, primaryKey: true }
  }, {
    tableName: 'wishes',
    timestamps: false
  });

  WishTable.associate = (models) => {
    models.Book.belongsToMany(models.User, {
      through: WishTable,
      as: 'wishes_books',
      foreignKey: 'bookId',
      otherKey: 'userId',
    });
    models.User.belongsToMany(models.Book, {
      through: WishTable,
      as: 'wishes_users',
      foreignKey: 'userId',
      otherKey: 'bookId',
    });
  };

  return WishTable;
}

module.exports = WishSchema;
