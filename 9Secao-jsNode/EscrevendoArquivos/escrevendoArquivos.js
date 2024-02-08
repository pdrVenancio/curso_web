const fs = require("fs")

const produto = {
    nome: "Carro",
    preco: 22222.89,
    desconto: 0.3
}
// Diretorio, nome do arquivo gerado
// O que esse arquivo vai conter
// Callback com mensagem de erro
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo slvo com sucesso!')
})