const vetNota = [1.1, 5.0, 7.4, 9.5]

function geraConceito(vet = []){
    let vetC = []
    for(let i = 0; i < vet.length; i++){
        if(vet[i] >= 0 && vet[i] <= 4.9)
            vetC.push("D")
        else if(vet[i] >= 5 && vet[i] <= 6.9)
            vetC.push("C")
        else if(vet[i] >= 7 && vet[i] <= 8.9)
            vetC.push("B")
        else if(vet[i] >= 9 && vet[i] <=10)
            vetC.push("A")
        else
            return "Nota invalida"
    }

    return vetC
}   

console.log(geraConceito(vetNota))