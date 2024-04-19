const express = require("express"); 
const bodyParser = require("body-parser")
const app = express(); 

app.use(bodyParser.json()) 

app.get("/", (req, res) => {
    res.send({
        "nome": "jose carmino",
        "profissao" : "professor"
    }); 
});

// o metodo get do http neste caso retorna uma lista de recursos (usuários)
app.get("/user", (req, res) => {
    res.send({
        "id": 1,
        "email": "usuario1@example.com",
        "senha": "senha123"
      },
      {
        "id": 2,
        "email": "usuario2@example.com",
        "senha": "senha456"
      },
      {
        "id": 3,
        "email": "usuario3@example.com",
        "senha": "senha789"
      });
});

// neste caso retorna um recurso (usuário) 
app.get("/user/:id", (req, res) => {
    const id = req.params.id; 
    res.send({
        "id": id,
        "email": "usuario1@example.com",
        "senha": "senha123"
      }); 
});

// o metodo post cria um novo recurso, e pode retornar um elemento ou somente um status
app.post("/user/:id", (req, res) => {
    const id = req.params.id; 
    res.send({
        "id": id,
        "email": "usuario1@example.com",
        "senha": "senha123"
      }); 
});

// o metodo delete exclui um recurso, e deve retornar um status 200, 204, 401, 403
app.delete("/user/:id", (req, res) => {
    const id = req.params.id; 
    res.send("registro exeluido").status(200); 
});

