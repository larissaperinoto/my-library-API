const ReadingSchema = (sequelize, DataTypes) => {
  const ReadingTable = sequelize.define('Reading', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    userId: DataTypes.INTEGER,
    bookId: DataTypes.INTEGER,
    finishedAt: DataTypes.DATE
  }, {
    tableName: 'readings',
    underscored: true,
    timestamps: false
  });

  return ReadingTable;
}

module.exports = ReadingSchema;