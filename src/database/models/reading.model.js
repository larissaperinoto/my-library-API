const ReadingSchema = (sequelize, DataTypes) => {
  const ReadingTable = sequelize.define('Reading', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    userId: DataTypes.INTEGER,
    bookId: DataTypes.INTEGER,
    finishedAt: DataTypes.DATE
  }, {
    tableName: 'readings',
    underscored: false,
    timestamps: false
  });

  ReadingTable.associate = (models) => {
    models.Book.belongsToMany(models.User, {
      through: ReadingTable,
      as: 'readings_books',
      foreignKey: 'userId',
      otherKey: 'bookId',
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