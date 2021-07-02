'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('shippings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      carrier: {
        type: Sequelize.STRING
      },
      orderId: {
        type: Sequelize.STRING
      },
      trackingNum: {
        type: Sequelize.STRING
      },
      shipDate: {
        type: Sequelize.DATE
      },
      arrivalDate: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('shippings');
  }
};