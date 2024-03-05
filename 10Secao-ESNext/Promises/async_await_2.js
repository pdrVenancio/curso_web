// Tratamento de erro usando o async wait
function geraNumeroEntre(min, max, nProibidos){
    if( min > max){
        [max, min] = [min, max]
    }

    return new Promise((resove, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if(nProibidos.includes(aleatorio)){
            reject('Numero repetido')
        }else{
            resove(aleatorio)
        }
    })
}

async function gererMegasena(qntNumeros, tentativas = 1){
    const numeros = []
    try{
        for( let _ of Array(qntNumeros).fill()){
            // await deve acompanhar a função que retorna uma promise
            numeros.push(await geraNumeroEntre(1, 60, numeros))
        }
        return numeros
    } catch(e){
        if(tentativas > 10){
            throw("Nao estou conseguindo gerar")
        }else{
             return gererMegasena(qntNumeros, tentativas + 1)
        }
    }
}

gererMegasena(20)
    .then(console.log)
    .catch(console.log)