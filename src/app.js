require("dotenv").config();
const express = require("express");
const operatorRoutes = require("./routes/operatorRoutes");
const callRoutes = require("./routes/callRoutes");
const clientRoutes = require("./routes/clientRoutes");


const app = express();
app.use(express.json());

app.use("/api", operatorRoutes);
app.use("/api", callRoutes);
app.use("/api", clientRoutes);

module.exports = app;
