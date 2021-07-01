'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    fName: DataTypes.STRING,
    lName: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    address: DataTypes.STRING,
    orders: DataTypes.STRING,
    wishList: DataTypes.STRING,
    admin: DataTypes.BOOLEAN
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};