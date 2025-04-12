const express = require("express");
const clientController = require("../controllers/clientController");

const router = express.Router();

router.post("/clients", clientController.createClient);
router.get("/clients", clientController.getClients);
router.get("/clients/:id", clientController.getClientById);
router.put("/clients/:id", clientController.updateClient);
router.delete("/clients/:id", clientController.deleteClient);

module.exports = router;
