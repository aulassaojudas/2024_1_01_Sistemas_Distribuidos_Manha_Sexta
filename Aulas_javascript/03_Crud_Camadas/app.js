// app.js
const express = require("express");
const bodyParser = require("body-parser");
const UserController = require("./user/user.controller.js");
const PerfilController = require("./perfil/perfil.controller.js")

const app = express();
const port = 3000;

app.use(bodyParser.json()); // Para parsing de application/json

const userController = new UserController();
const perfilController  = new PerfilController();

// Rotas para funcionalidade do CRUD de Usuário
app.post("/users", (req, res) => userController.createUser(req, res));
app.get("/users", (req, res) => userController.getAllUsers(req, res));
app.get("/users/:id", (req, res) => userController.getUserById(req, res));
app.put("/users/:id", (req, res) => userController.updateUser(req, res));
app.delete("/users/:id", (req, res) => userController.deleteUser(req, res));

// Rotas para funcionalidade do CRUD de perfil do usuário
app.get("/profile", (req, res) => perfilController.getAllPerfis(req, res) );
app.get("/profile/:user_id", (req, res) => perfilController.getPerfilById(req, res));
app.get("/profile/:user_id/address/:address_id", (req, res) => perfilController.getPerfilEndById(req, res));
app.post("/profile/:user_id", (req, res) => perfilController.createPerfil(req, res));
app.put("/profile/:user_id/address/:address_id", (req, res) => perfilController.updatePerfil(req, res));
app.delete("/profile/:user_id/address/:address_id", (req, res) => perfilController.deletePerfil(req, res));

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
