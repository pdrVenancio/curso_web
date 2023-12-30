let num = [2, 3, 4, 5, 7, 10, 8]

function calcImPar(num = []){
    if(num == [])
        return 0

    let par = 0
    let imp = 0

    for(n in num){
        if(n % 2 == 0)
            par++
        else
            imp++
    }
    return console.log(`Pares: ${par} - Impar: ${imp}`)
}

calcImPar(num)