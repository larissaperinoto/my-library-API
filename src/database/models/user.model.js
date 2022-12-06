const UserSchema = (sequelize, DataTypes) => {
  const UserTable = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    tableName: 'users',
    underscored: true,
    timestamps: false
  });

  UserTable.associate = (models) => {
    UserTable.hasMany(models.wish, {
      as: 'user_wishes',
      foreignKey: 'userId'
    });

    UserTable.hasMany(models.reading, {
      as: 'user_readings',
      foreignKey: 'userId'
    });
  };

  return UserTable;
}

module.exports = UserSchema;
