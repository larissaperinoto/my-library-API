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

  return WishTable;
}

module.exports = WishSchema;
