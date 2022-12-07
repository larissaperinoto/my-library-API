const ReadingSchema = (sequelize, DataTypes) => {
  const ReadingTable = sequelize.define('Reading', {
    userId: { type: DataTypes.INTEGER, primaryKey: true },
    bookId: { type: DataTypes.INTEGER, primaryKey: true },
    finishedAt: DataTypes.DATE
  }, {
    tableName: 'readings',
    timestamps: false
  });

  ReadingTable.associate = (models) => {
    models.Book.belongsToMany(models.User, {
      through: ReadingTable,
      as: 'readings_books',
      foreignKey: 'bookId',
      otherKey: 'userId',
    });
    models.User.belongsToMany(models.Book, {
      through: ReadingTable,
      as: 'readings_users',
      foreignKey: 'bookId',
      otherKey: 'userId',
    });
  };

  return ReadingTable;
}

module.exports = ReadingSchema;