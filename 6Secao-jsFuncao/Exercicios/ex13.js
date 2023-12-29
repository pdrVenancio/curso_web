function verificaDia(dia = 1){
    switch(dia){
        case 1:
        case 7:
            return "Fim de semana"
            break
        case 2:
        case 3:
        case 4: 
        case 5:
        case 6:
            return "Util"
            break
        default:
            return "Dia invalido"
            
    }
}

console.log(verificaDia(2))
console.log(verificaDia(1))
console.log(verificaDia(5))

