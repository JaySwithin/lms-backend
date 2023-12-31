'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Loan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Loan.belongsTo(models.Customer, { foreignKey: 'customerId' });
    }
  }
  Loan.init({
    customerId: DataTypes.INTEGER,
    loanAmount: DataTypes.DECIMAL,
    interestRate: DataTypes.DECIMAL,
    loanTerm: DataTypes.INTEGER,
    simpleInterest: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Loan',
    tableName: 'loan'
  });
  return Loan;
};