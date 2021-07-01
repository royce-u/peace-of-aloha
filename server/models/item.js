'use strict';
module.exports = (sequelize, DataTypes) => {
  const item = sequelize.define('item', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    alias: DataTypes.STRING,
    sciName: DataTypes.STRING,
    category: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.FLOAT,
    stock: DataTypes.INTEGER,
    care: DataTypes.TEXT,
    itemSold: DataTypes.INTEGER,
    photos: DataTypes.STRING,
    promo: DataTypes.INTEGER
  }, {});
  item.associate = function(models) {
    // associations can be defined here
  };
  return item;
};