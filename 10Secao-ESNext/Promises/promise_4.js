// Chamando varias promises ao mesmo tempo

function geraNumeroEntre(min, max, tempo){
    if( min > max){
        [max, min] = [min, max]
    }

    return new Promise(resove => {
        setTimeout(function() {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resove(aleatorio)
        }, tempo)
    })
}

function gerarVariosNumeros(){
    return Promise.all([
        geraNumeroEntre(1,60, 4000),
        geraNumeroEntre(1,60, 2000),
        geraNumeroEntre(1,60, 400),
        geraNumeroEntre(1,60, 40),
        geraNumeroEntre(1,60, 5000),
        geraNumeroEntre(1,60, 100),
    ])
}
// Mede o tempo de execução
console.time('promise')

gerarVariosNumeros()
    .then(console.log)
    .then(()=>{
        console.timeEnd('promise')
    })