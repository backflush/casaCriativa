const express = require("express");

const routes = express.Router();

const db = require("./database/config");

const DashboardController = require("./controllers/DashboardController");
const IdeasController = require("./controllers/IdeasController");

routes.get("/", DashboardController.index);
routes.post("/", DashboardController.create);

routes.get("/ideas", IdeasController.index);

module.exports = routes;