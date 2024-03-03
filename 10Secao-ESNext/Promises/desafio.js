const fs = require('fs')
const path = require('path')

function lerArquivo(caminho){
    return new Promise(resolve => {
        // na função passamos o erro e o conteudo
        fs.readFile(caminho, function(_, conteudo){
            // Passamos o conteudo em forma de string
            console.log('O  conteudo do arquivo vem em forma de: ' + typeof conteudo)
            resolve(conteudo.toString())
        })
        console.log('Depois de ler...')
    })
}

const caminho = path.join(__dirname, 'dados.txt')

lerArquivo(caminho)
    //.then(cont => cont.('\n'))
    .then(console.log)