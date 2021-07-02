'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
    userId: DataTypes.STRING,
    shipping: DataTypes.STRING,
    item: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    promoCode: DataTypes.STRING,
    total: DataTypes.FLOAT,
    address: DataTypes.STRING
  }, {});
  order.associate = function(models) {
    // associations can be defined here
  };
  return order;
};