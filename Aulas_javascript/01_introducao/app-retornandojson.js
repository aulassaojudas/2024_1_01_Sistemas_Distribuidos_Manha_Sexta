const express = require("express"); 
const bodyParser = require("body-parser")
const app = express(); 

/*
app: é uma instancia do Express criada na linha 3
app.use: onde use é um método que adicionar um middleware ao aplicativo. 
         Um middleware é uma função que acessa o objeto de solicitação (request), ou o objeto de resposta (response)
         E é executado antes da execução da função, neste caso para carregar bodyParser.json()

         bodyParser é um middleware que analisa os corpos das solicitações entrantes antes de seus manipuladores, 
         disponível sob a propriedade `req.body`. Desta forma bodyParser.json() analisa os corpos das solicitações 
         enviados com o cabeçalho `Content-Type: application/json`, e transforma essa string JSON em um objeto JavaScript,
         o qual é atribuido ao req.body

Desta forma app.use(bodyParser.json()) é uma instrução que permite automaticamente os corpos das solicitações JSON 
sejam disponibilizados ao JavaScript como um objeto ao req.body.

*/

app.use(bodyParser.json()) 

app.get("/", (req, res) => {
    res.send({
        "nome": "jose carmino",
        "profissao" : "professor"
    }); 
});

app.get("/user", (req, res) => {
    res.send("este é um endpoint para usuários");
});

app.get("/user/:id", (req, res) => {
    const id = req.params.id; 
    res.send("este é um endpoint que recebe um parametro " + id ); 
});

/*você pode passar quantos paremetros quiser, desde que siga a sintaxe abaixo */
app.get("/user/:id/:nome", (req, res) => {
    const {id, nome } = req.params;
    res.send("este é um endpoint que recebe dois parametros " + id + " -> " + nome);
});

app.listen(3000, () => {
    console.log( "listen carrega um servidor na porta 3000");
});
