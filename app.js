const express = require('express');
const app = express();

app.get('/', (req, res) => {
    let obj = req.query;

    return res.send({message: `Tudo ok com o método GET! Você enviou o nome ${obj.nome} com a idade ${obj.idade}`});
})

app.post('/', (req, res) => {
    let obj = req.body
    return res.send({message: `Tudo ok com o método POST! Você enviou o nome ${obj.nome} com a idade ${obj.idade}`});
})

app.listen(3000);

module.exports = app;