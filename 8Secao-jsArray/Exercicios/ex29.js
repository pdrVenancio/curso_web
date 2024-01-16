const segMaior = vet =>{
    // Função short so funciona sem parametros de 0 - 9

    // Quando o método sort() compara dois elementos a e b, 
    // ele chama a função de comparação e, com base no 
    // resultado (a - b), decide se a deve vir antes de 
    // b (retorno negativo), se a deve vir depois de 
    // b (retorno positivo) ou se a e b são considerados 
    // iguais (retorno zero).
    
    let vet1 = vet.sort((a,b) => a - b)
    console.log(vet1)
    return vet[vet.length - 2]
}

console.log(segMaior([5,9,1,125,11]))