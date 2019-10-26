const express = require("express")
const app = express()


app.get("/", function (req, res) {
    res.send("Acessando o documento root")
})

app.get("/welcome/:name", function (req, res) {
    res.send("Olá, " + req.params["name"])
})

app.get("/home", function (req, res) {
    res.send("Você ainda está acessando o root")
})

app.get("/login/:user", function (req, res) {
    let user = req.params["user"]
    if (user == "admin") {
        res.send("Logado com sucesso!")
    } else {
        res.send("Área restrita")
    }
})

//Sempre precisa ficar no final 
app.listen(8081, function () {
    console.log("Servidor rodando")
})