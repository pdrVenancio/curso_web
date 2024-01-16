const somaArray = vet =>{
    let soma = 0
    vet.forEach(n => soma += n)

    return soma
}

console.log(somaArray([1,2,3,4,5]))

// usando reduce 
const somaArrayReduce = vet => vet.reduce((acumulador, atual) => acumulador + atual)

console.log(somaArrayReduce([1,2,3,4,5]))
