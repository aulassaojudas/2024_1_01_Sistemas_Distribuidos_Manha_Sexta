const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

// é criado um vetor para armazernar os dados na memória
let ctrl_id = 4;
const users = [
  {
    id: 1,
    email: "usuario1@example.com",
    senha: "senha123",
  },
  {
    id: 2,
    email: "usuario2@example.com",
    senha: "senha456",
  },
  {
    id: 3,
    email: "usuario3@example.com",
    senha: "senha789",
  },
];

app.get("/", (req, res) => {
  res.send("este o ponto de entra do site").status(200);
});

// o metodo get do http neste caso retorna uma lista de recursos (usuários)
app.get("/user", (req, res) => {
    res.send(users);
});

// neste caso retorna um recurso (usuário)
app.get("/user/:id", (req, res) => {
    // o operador + foi colocado para transformar o id em inteiro 
    // uma vez que parametros sempres são do tipo string
    const id = +req.params.id; 
    const user = users.find( (user) => user.id === id);
    // quando não é contrado o usurio a variavel usuario 
    // é undefined por isso a esclamação no if
    if( !user ){
        res.send("registro nao encontrado").status(404);
    } else {
        res.send(user).status(200);
    }
});

// o metodo post cria um novo recurso, e pode retornar um elemento ou somente um status
app.post("/user", (req, res) => {
  const { email, senha} = req.body
  const user = {
    id: ctrl_id++,
    email: email,
    senha: senha,
  }
  console.log(user)
  users.push(user); 
  res.send("registro criado").status(201);
});

// o metodo delete exclui um recurso, e deve retornar um status 200, 204, 401, 403
app.delete("/user/:id", (req, res) => {
  const id = req.params.id;
  res.send("registro exeluido").status(200);
});

app.listen(3000, () => {
    console.log("servidor no ar");
})