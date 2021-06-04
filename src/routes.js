const express = require("express");

const routes = express.Router();

const DashboardController = require("./controllers/DashboardController");

routes.get("/", DashboardController.index);

module.exports = routes;