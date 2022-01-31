module.exports = (sequelize, DataType) => {
    const Permissions = sequelize.define('Permissions', {
      id: {
        type: DataType.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      id_user: {
        type: DataType.INTEGER.UNSIGNED,
        allowNull: false
      },
      administrator: {
        type: DataType.INTEGER.UNSIGNED,
        allowNull: false
      },
      speaker: {
        type: DataType.INTEGER.UNSIGNED,
        allowNull: false
      }
    },
    {
      tableName: 'permissions',
      timestamps: false
    });
    return Permissions;
  };
  
  
  
