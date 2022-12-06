const WishSchema = (sequelize, DataTypes) => {
  const WishTable = sequelize.define('Wish', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    userId: DataTypes.INTEGER,
    bookId: DataTypes.INTEGER
  }, {
    tableName: 'wishes',
    underscored: true,
    timestamps: false
  });

  WishTable.associate = (models) => {
    models.Book.belongsToMany(models.User, {
      through: WishTable,
      as: 'wishes_books',
      foreignKey: 'userId',
      otherKey: 'bookId',
    });
    models.User.belongsToMany(models.Book, {
      through: WishTable,
      as: 'wishes_users',
      foreignKey: 'bookId',
      otherKey: 'userId',
    });
  };

  return WishTable;
}

module.exports = WishSchema;
