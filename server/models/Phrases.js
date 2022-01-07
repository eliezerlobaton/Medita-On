module.exports = (sequelize, DataType) => {
    const Phrases = sequelize.define('Phrases', {
      id: {
        type: DataType.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      phrase: {
        type: DataType.STRING(255),
        allowNull: false,
      },
      author: {
        type: DataType.STRING(50),
        allowNull: false
      },
      creation_date: {
        type: DataType.DATE,
        allowNull: false
      }
      // updateAt: {
      //   type: DataType.DATE,
      //   allowNull: true
      // }
    },
    {
      tableName: 'phrases',
      timestamps: false
    });
    return Phrases;
  };
  
  
  