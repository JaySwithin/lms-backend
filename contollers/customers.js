const { Customer, Loan } = require("../models");

const register = async (req, res) => {
  try {
    const { name, maritalStatus, employmentStatus, employerName, dateOfBirth, idCard, address, phoneNumber } = req.body;

    if (!name || !maritalStatus || !employmentStatus || !employerName || !dateOfBirth || !idCard || !address || !phoneNumber) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    
    const customer = await Customer.create(req.body);
    res.json(customer);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Could not register customer. Try again later' });
  }
}

const getAllCustomers = async (req, res) => {
  const customers = await Customer.findAll();
  if(!customers) {
    return res.status(204).json({ message: "No customers found" });
  }
  return res.json(customers)
}

const getCustomerLoans = async (req, res) => {
  try {
    if (!req?.params?.customerId) {
      return res.status(400).json({ message: "ID is required" });
    }
    const customerId = req.params.customerId;
    const customer = await Customer.findByPk(customerId, {
      include: Loan, 
    });

    if (!customer) {
      return res.status(404).json({ error: `Customer not found with ID: ${customerId}` });
    }

    const response = customer.Loans.map((loan) => ({
      ...loan.toJSON(),
      customerName: customer.name, 
    }));

    res.json(response);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Server error' });
  }
};



module.exports = { register, getAllCustomers, getCustomerLoans }