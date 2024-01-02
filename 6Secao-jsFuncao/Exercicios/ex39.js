let vetA = [1, 2, 3, 4, 5]
let vetB = [6, 7, 8, 9, 0]

function trocaTroca(vetA = [], vetB = []){
    
    for(let i = 0; i < vetA.length; i++){
        let aux = vetA[i]
        vetA[i] = vetB[i]
        vetB[i] = aux
    }

    console.log(`VETA: ${vetA}\nVETB: ${vetB}`)
}

trocaTroca(vetA, vetB)