const moduloA = require('../../../sistemaDeModulo/modulo')
console.log(moduloA.bomDia)

// quando passamos so a pasta ele busca no arquivo index.js
const c = require('./pastaC')
console.log(c.ola2)

// importando uma pasta dentro de node_modules ele puxa direto o arquivo index
const saudacao = require('../../../modulosDeTerceiros/node_modules/saudacao')
console.log(saudacao.ola)

// Usando uma requisição no browser
const http = require('http')
http.createServer((req, res) => {
    res.write("Ola mundo")
    res.end()
}).listen(8080)
