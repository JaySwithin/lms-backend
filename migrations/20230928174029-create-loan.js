'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('loan', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      customerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "customer",
          key: "id",
        },
      },
      loanAmount: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      interestRate: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      loanTerm: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      simpleInterest: {
        type: Sequelize.DECIMAL,
        allowNull: false,
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
    await queryInterface.dropTable('loans');
  }
};