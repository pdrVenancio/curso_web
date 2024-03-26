// para rodar o server: node server.js
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    resp.send('<h1> Parabens! Usuario cadastrado </h1>')
})

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.body)
    resp.send('<h1> Parabens! Usuario Alterado! </h1>')
})

app.listen(5500)