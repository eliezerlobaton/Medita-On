module.exports = (sequelize, DataType) => {
  const Users = sequelize.define('Users', {
    id: {
      type: DataType.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    frist_name: {
      type: DataType.STRING(50),
      allowNull: false,
    },
    last_name: {
      type: DataType.STRING(50),
      allowNull: false
    },
    birth: {
      type: DataType.DATE,
      allowNull: false
    },
    email: {
      type: DataType.STRING(100),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataType.STRING(50),
      allowNull: false
    }
  },
  {
    tableName: 'users',
    timestamps: false
  });
  return Users;
};