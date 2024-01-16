const troca = obj =>{
    const objInvertido = {}
    // Entries: transformamos o obj em um array de arrays onde o valor [0] é a chave e a [1] é o valor
    Object.entries(obj).forEach(parChave =>{
        let chave = 0,
        valor = 1

        objInvertido[parChave[valor]] = parChave[chave]
    })

    return objInvertido
}

console.log(troca({a:1, b:2, c:3}))