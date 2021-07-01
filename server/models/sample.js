'use strict';
module.exports = (sequelize, DataTypes) => {
  const sample = sequelize.define('sample', {
    first: DataTypes.STRING,
    second: DataTypes.STRING
  }, {});
  sample.associate = function(models) {
    // associations can be defined here
  };
  return sample;
};