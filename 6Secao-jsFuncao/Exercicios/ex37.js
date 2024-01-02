// Mostrando os termos e o resultado da soma

function calcPA(n, a1, r){

    let an = a1 + (n - 1) * r

    let soma = ((a1 + an) * n)/ 2

    let vetPa = []
    let a = a1

    while(a <= an){
        vetPa.push(a)
        a += r
    }

    return console.log(`Soma: ${soma} - ${vetPa}`)
}

calcPA(7, 2, 2)

function calcPG(n, a1, r){
    let soma = (a1 *(Math.pow(r, n) - 1))/( r - 1)
    
    let a = a1
    let vetPg = []
    for( let i = 0; i < n; i++){
        vetPg.push(a)
        a *= r
    }

    return console.log(`Soma: ${soma} - ${vetPg}`)
}

calcPG(5, 1, 3)