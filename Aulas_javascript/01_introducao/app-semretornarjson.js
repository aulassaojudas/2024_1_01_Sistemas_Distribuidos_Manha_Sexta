const express = require("express"); 
const app = express(); 

app.get("/", (req, res) => {
    res.send("este é o endpoint inicial"); 
});

app.get("/user", (req, res) => {
    res.send("este é um endpoint para usuários");
});

app.get("/user/:id", (req, res) => {
    const id = req.params.id; 
    res.send("este é um endpoint que recebe um parametro " + id ); 
});

/*você pode passar quantos parametros quiser, desde que siga a sintaxe abaixo */
app.get("/user/:id/:nome", (req, res) => {
    const {id, nome } = req.params;
    res.send("este é um endpoint que recebe dois parametros " + id + " -> " + nome);
});

app.listen(3000, () => {
    console.log( "listen carrega um servidor na porta 3000");
});

