const operatorService = require("../services/operatorService");

const createOperator = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const operator = await operatorService.createOperator(name, email, password);
    res.status(201).json(operator);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllOperators = async (req, res) => {
  try {
    const operators = await operatorService.getAllOperators();
    res.status(200).json(operators);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const authenticateOperator = async (req, res) => {
  try {
    const { email, password } = req.body;
    const data = await operatorService.authenticateOperator(email, password);
    res.status(200).json(data);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

module.exports = { createOperator, getAllOperators, authenticateOperator };
