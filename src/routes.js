const express = require("express");

const routes = express.Router();

const DashboardController = require("./controllers/DashboardController");
const IdeasController = require("./controllers/IdeasController");

routes.get("/", DashboardController.index);

routes.get("/ideas", IdeasController.index);

module.exports = routes;