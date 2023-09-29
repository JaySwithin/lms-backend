'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('customer', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      maritalStatus: {
        type: Sequelize.STRING,
        allowNull: false
      },
      employmentStatus: {
        type: Sequelize.STRING,
        allowNull: false
      },
      employerName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dateOfBirth: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      idCard: {
        type: Sequelize.STRING,
        allowNull: false
      },
      address: {
        type: Sequelize.TEXT
      },
      phoneNumber: {
        type: Sequelize.STRING,
        allowNull: false
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('customer');
  }
};