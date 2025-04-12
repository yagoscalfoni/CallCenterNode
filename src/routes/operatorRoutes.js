const express = require("express");
const router = express.Router();
const operatorController = require("../controllers/operatorController");
const authenticateToken = require("../middlewares/authMiddleware");


router.post("/operators", operatorController.createOperator);
router.get("/operators", authenticateToken ,operatorController.getAllOperators);
router.post("/operators/login", operatorController.authenticateOperator);

module.exports = router;
