let num = [2, -3, -4, -5, 7, 10, 8]

function calcNegativos(num = []){
    if(num == [])
        return 0

    let cont = 0

    for(i = 0; i <= num.length; i++){
        if(0 > num[i])
            cont++
        }
    return console.log(`Numero negativo: ${cont}`)
}

calcNegativos(num)