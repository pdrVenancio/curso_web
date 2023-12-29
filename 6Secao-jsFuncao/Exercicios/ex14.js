function verifiacaFruta(fruta = ""){
    switch(fruta){
        case "maca":
            return console.log("nao vendemos esta fruta aqui")
            break
        case "kiwi":
            return console.log("Estamos com escassez de kiwis")
            break
        case "melancia":
            return console.log("Aqui esta sao 3 reais o Kg")
            break
        default:
            return console.log("Erro...")
    }
}

verifiacaFruta("maca")
verifiacaFruta("kiwi")
verifiacaFruta("melancia")