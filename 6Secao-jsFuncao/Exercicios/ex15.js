function escolhaCarro(carro = ""){
    switch(carro){
        case "hactch":
            return console.log("Compra efetuada com sucesso")
        case "sedans":
        case "motocicletas":
        case "caminhonetes":
            return console.log("Tem certeza da escolha do carro")
        default:
            return console.log("Nao trabalhamos com esse tipo de automovel")
    }
}

escolhaCarro("hactch")
escolhaCarro("sedans")
escolhaCarro("motocicletas")
escolhaCarro("caminhonetes")
escolhaCarro("hdsadacth")



