'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Customer.hasMany(models.Loan, { foreignKey: 'customerId' });
    }
  }
  Customer.init({
    name: DataTypes.STRING,
    maritalStatus: DataTypes.STRING,
    employmentStatus: DataTypes.STRING,
    employerName: DataTypes.STRING,
    dateOfBirth: DataTypes.DATE,
    idCard: DataTypes.STRING,
    address: DataTypes.TEXT,
    phoneNumber: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Customer',
    tableName: 'customer',
  });
  return Customer;
};