const prisma = require("../database/prismaClient");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const createOperator = async (name, email, password) => {
  try {
    const existingOperator = await prisma.operator.findUnique({
      where: { email },
    });

    if (existingOperator) {
      throw new Error("Este endereço de e-mail já está em uso.");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    return await prisma.operator.create({
      data: { name, email, password: hashedPassword },
    });
  } catch (error) {
    throw error;
  }
};


const getAllOperators = async () => {
  return await prisma.operator.findMany();
};

const authenticateOperator = async (email, password) => {
  const operator = await prisma.operator.findUnique({ where: { email } });
  if (!operator) throw new Error("Operador não encontrado");

  const isValid = await bcrypt.compare(password, operator.password);
  if (!isValid) throw new Error("Senha incorreta");

  const token = jwt.sign({ id: operator.id }, process.env.JWT_SECRET, { expiresIn: "1h" });

  return { token, operator };
};

module.exports = { createOperator, getAllOperators, authenticateOperator };
