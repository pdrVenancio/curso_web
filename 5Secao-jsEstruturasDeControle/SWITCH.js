const imprimirResultado = function (nota) {
    switch(Math.floor(nota)){
        case 10:
        case 9:
            console.log('Quadro de honra')
            break
        case 8:
        case 7:
        case 6:
            console.log('aprovado')
            break
        case 5:
        case 4:
        case 3:
        case 2:
        case 1:
        case 0:
            console.log("reprovado")
            break
        default:
            console.log('Nota invalida')
    }
}

imprimirResultado(10)
imprimirResultado(7)
imprimirResultado(3)
imprimirResultado(-1)