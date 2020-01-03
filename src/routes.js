const express = require("express");

const LoginController = require("./controllers/LoginController");

const routes = express.Router();

routes.post("/usuarios/apagar", LoginController.destroy);
//routes.post('/usuarios/atualizar', LoginController.update);
routes.post("/usuarios/criar", LoginController.store);
routes.post("/usuarios/buscar", LoginController.show);
routes.get("/usuarios", LoginController.index); //listar

module.exports = routes;
