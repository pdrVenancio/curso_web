let num = [2, 3, 15, 35, 73, 10, 83]

function calIntervalo(num = []){
    if(num == [])
        return 0

    let cont = 0

    for(n of num) // of para vermos os elementos do array
        if(n >= 10 && n <= 20)
            cont++
        
    return console.log(`Nums: ${cont}`)
}

calIntervalo(num)