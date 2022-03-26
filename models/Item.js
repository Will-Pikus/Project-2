const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Item extends Model {}

Item.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      desc: {
        type: DataTypes.STRING,
      },
      quality: {
        type: DataTypes.STRING,
      },
      transacted: {
        type: DataTypes.BOOLEAN,
      },
      owner_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
          },
      },
      requester_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
          },
      },
      image_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'image',
            key: 'id',
          },
      },
      type_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'type',
            key: 'id',
          },
      },
      cat_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'category',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'item',
    }
  );
  
  module.exports = Item;
  