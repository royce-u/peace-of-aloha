'use strict';
module.exports = (sequelize, DataTypes) => {
  const shipping = sequelize.define('shipping', {
    userId: DataTypes.STRING,
    address: DataTypes.STRING,
    carrier: DataTypes.STRING,
    orderId: DataTypes.STRING,
    trackingNum: DataTypes.STRING,
    shipDate: DataTypes.DATE,
    arrivalDate: DataTypes.DATE
  }, {});
  shipping.associate = function(models) {
    // associations can be defined here
  };
  return shipping;
};