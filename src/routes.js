const express = require("express");

const routes = express.Router();

routes.get("/", DashboardController.index);

module.exports = routes;