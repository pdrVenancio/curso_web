// proprio do node para ler arquivo (file system)
const fs = require('fs')

// __dirname representa o diretorio atual
const caminho = __dirname + '/arquivo.json'

// sincrono ser for um arquivo pesado pode traver o event loop

// Passamos o caminho e o encoding
const conteudo = fs.readFileSync(caminho, "utf-8")
console.log(conteudo)

// Assincrono + interessante

// Passamos uma callback que só é chamada quando termina de ler o arquivo
fs.readFile(caminho, "utf-8", (err, conteudo) =>{
    const confg = JSON.parse(conteudo)
    console.log(confg.db.host + ":" + confg.db.port)
}) 

// Metodo mais facil
const config = require('./arquivo.json')
console.log(config.db)

// Ler uma pasta
// Passamos o diretorio e uma funcao callback
fs.readdir(__dirname, (err, arquivos) =>{
    console.log(arquivos)
})