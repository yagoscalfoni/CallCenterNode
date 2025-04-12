const prisma = require("../database/prismaClient");

const createClient = async (name, email, phone) => {
  return await prisma.client.create({
    data: { name, email, phone },
  });
};

const getClients = async () => {
  return await prisma.client.findMany();
};

const getClientById = async (id) => {
  return await prisma.client.findUnique({ where: { id } });
};

const updateClient = async (id, data) => {
  return await prisma.client.update({
    where: { id },
    data,
  });
};

const deleteClient = async (id) => {
  return await prisma.client.delete({ where: { id } });
};

module.exports = {
  createClient,
  getClients,
  getClientById,
  updateClient,
  deleteClient,
};
