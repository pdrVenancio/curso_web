function geraNumeroEntre(min, max){
    if( min > max){
        [max, min] = [min, max]
    }

    return new Promise(resove => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resove(aleatorio)
    })
}

geraNumeroEntre(1, 60)
    .then(num => num * 5)
    .then(numx5 => `O numero sorteado x5: ${numx5}`)
    .then(console.log)