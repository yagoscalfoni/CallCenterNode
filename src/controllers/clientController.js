const clientService = require("../services/clientService");

const createClient = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const newClient = await clientService.createClient(name, email, phone);
    res.status(201).json(newClient);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getClients = async (req, res) => {
  try {
    const clients = await clientService.getClients();
    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getClientById = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await clientService.getClientById(id);
    if (!client) return res.status(404).json({ error: "Cliente não encontrado" });
    res.status(200).json(client);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateClient = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedClient = await clientService.updateClient(id, req.body);
    res.status(200).json(updatedClient);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteClient = async (req, res) => {
  try {
    const { id } = req.params;
    await clientService.deleteClient(id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createClient,
  getClients,
  getClientById,
  updateClient,
  deleteClient,
};
