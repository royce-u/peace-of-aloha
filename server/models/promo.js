'use strict';
module.exports = (sequelize, DataTypes) => {
  const promo = sequelize.define('promo', {
    promoCode: DataTypes.STRING,
    item: DataTypes.STRING,
    price: DataTypes.FLOAT,
    description: DataTypes.TEXT,
    start: DataTypes.DATE,
    end: DataTypes.DATE,
    active: DataTypes.BOOLEAN
  }, {});
  promo.associate = function(models) {
    // associations can be defined here
  };
  return promo;
};