'use strict';
module.exports = (sequelize, DataTypes) => {
  const wishList = sequelize.define('wishList', {
    userId: DataTypes.STRING,
    items: DataTypes.STRING
  }, {});
  wishList.associate = function(models) {
    // associations can be defined here
  };
  return wishList;
};