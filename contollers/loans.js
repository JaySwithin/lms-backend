const { Loan, Customer } = require('../models')

const addLoan = async (req, res) => {
  try {
    const { customerId, loanAmount, interestRate, loanTerm } = req.body;

    if (!customerId || !loanAmount || !interestRate || !loanTerm) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)) {
      return res.status(400).json({ error: 'Loan amount, interest rate, and loan term must be numeric' });
    }

    const customer = await Customer.findByPk(customerId);
    if (!customer) {
      return res.status(404).json({ error: 'Customer not found' });
    }

    const simpleInterest = (loanAmount * (interestRate) * loanTerm) / 100;

    const loan = await Loan.create({
      customerId,
      loanAmount,
      interestRate,
      loanTerm,
      simpleInterest,
    });

    res.json(loan);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'An error occured on the server. Try again later' });
  }
}

const getAllLoans = async (req, res) => {
  try {
    const loans = await Loan.findAll({
      include: Customer, 
    });

    if (!loans || loans.length === 0) {
      return res.status(204).json({ message: "No loans found" });
    }

    const response = loans.map((loan) => {
      return {
        id: loan.id,
        customerId: loan.customerId,
        loanAmount: loan.loanAmount,
        interestRate: loan.interestRate,
        loanTerm: loan.loanTerm,
        simpleInterest: loan.simpleInterest,
        customerName: loan.Customer.name,
      };
    });

    return res.json(response);
  } catch (error) {
    console.error("Error fetching loans:", error);
    return res.status(500).json({ message: "Server error" });
  }
};


module.exports = { addLoan, getAllLoans }