const { Router } = require("express");

const UserController = require("./app/controllers/UserController");

const routes = new Router();

routes.post("/users", UserController.store);
routes.put("/users", UserController.update);

module.exports = routes;
