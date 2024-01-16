const digitos = (vet, d) => {
    let res = []
    vet.filter( num => {
        let qtndDigitos = String(num).length

        if( qtndDigitos == d)
            res.push(num)
    })

    return res
}

console.log(digitos([5,9,1,125,11], 1))