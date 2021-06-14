const express = require("express");

const routes = express.Router();

const DashboardController = require("./controllers/DashboardController");
const IdeasController = require("./controllers/IdeasController");

routes.get("/", DashboardController.index);
routes.post("/", DashboardController.create);

routes.get("/ideas", IdeasController.index);
routes.post("/ideas", IdeasController.create);

module.exports = routes;