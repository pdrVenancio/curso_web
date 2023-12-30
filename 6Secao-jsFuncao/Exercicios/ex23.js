function calcMedia(cod = 0, n1 = 0, n2 = 0, n3 = 0){
    notas = [ n1, n2, n3]

    for(let i = 0; i <= notas.length  + 1; i++){
        if( notas[i] >= notas[i + 1]){
            let aux = notas[i]
            notas[i] = notas[i + 1]
            notas[i+ 1] = aux
        }
    }
    
    return (notas[2] * 4 + notas[1] * 3 + notas[0] * 3)/(10) >= 6 ? console.log("Aprovado") : console.log("reprovado") 
}


calcMedia(0, 1, 2, 3)
calcMedia(0, 1, 4, 3)
calcMedia(0, 4, 2, 3)
calcMedia(0, 10,9, 9)