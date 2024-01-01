const vet = [1, 2, 3, 4, 5, 7, 6, 8 ]

const mult = (vet = [], num = 1) => {
    let vetRes = []
    for(n of vet)
        vetRes.push(n * num)

    return vetRes
}

const mult5 = (vet = [], num = 1) => {
    let vetRes = []
    for(n of vet){
        if(n >= 5)
            vetRes.push(n * num)
        else
            vetRes.push(n)
    }
    
    return vetRes
}

console.log(mult(vet, 2))
console.log(mult5(vet, 2))