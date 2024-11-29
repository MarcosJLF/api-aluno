const express = require("express");
const bodyparser = require("body-parser");
//import router.aluno from "./'"
const db = require ("./db.js")

const app = express()

const PORT = 8000 

app.use(bodyparser.json())

//app.use('/', router.aluno)

app.get('/aluno', (req, res) => {

    res.status(200).json({db})
    console.log(db.nome)

})

app.listen(PORT, () =>{
    console.log(`API rodando na porta ${PORT}`)
})

